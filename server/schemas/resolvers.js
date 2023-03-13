const { Post, User } = require ('../models')
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    getAllPosts: async () => {
      return Post.find()
    },

    hello: () => {
      return "Yo Dude"
    },

    getPost: async (parent, {id}, context, info) => { //{id} is just the id field from the request
      return await Post.findById(id)
    },

    getMyPosts: async (parent, args, context) => {
      const user = await Post.find({ postAuthor: context.user.username });
      console.log(user)
      return user
    },

    getPostByUserID: async (parent, {id}, context) => {
      return await User.findById(id).populate('posts')
    }
  },

  Mutation: {
    createPost: async (parent, {post:{title, description}}, context) => {
      if (context.user) {
        // const {title, description} = args.post //object descrutring from args.post
        const postAuthor = context.user.username
        const post = new Post ({ title, description, postAuthor })
        await post.save()
        await User.findOneAndUpdate(
          {_id: context.user._id},
          { $addToSet: {posts: post._id}}
        )
        return post;

      }
      throw new AuthenticationError("You need to be logged in!")
    },

    deletePost: async (parent, {id}, context, info) => {
      // if context.user && context.user.username === post.postAuthor
      const post = await Post.findById(id)
      if (context.user && context.user.username === post.postAuthor) {
        await Post.findByIdAndDelete(id);
        return "Ok Post Deleted"

      }
      throw new AuthenticationError("You must be logged in!")
    },

    updatePost: async (parent, args, context, info) => {
      // if context.user && context.user.username = post.postAuthor
      const {id} = args
      const post = await Post.findById(id)
      if (context.user && context.user.username === post.postAuthor) {
        const { title, description } = args.post
  
        //This allows user to update title OR description without having to update both
        const updates = {}
        if (title !== undefined) {
          updates.title = title
        }
        if (description !== undefined) {
          updates.description = description
        }
  
        const post = await Post.findByIdAndUpdate(
          id, 
          updates, 
          {new: true}
          );
          return post
        
      }
      throw new AuthenticationError("You must be logged in!")
    },

    addResponse: async (parent, {id, responseText}, context) => {
      if (context.user) {
        return Post.findByIdAndUpdate(
          id, //_id mongoose ID, id graphQL
          {$addToSet: {
            responses: {responseText, responseAuthor: context.user.username}
          }},
          {
            new:true,
            runValidators: true,
          }
        )
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeResponse: async (parent, {id, responseId}, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          {_id:id, "responses.responseAuthor": context.user.username},
          {
            $pull: {
              responses: {
                _id: responseId,
                responseAuthor: context.user.username
              }
            }
          },
          {
            new:true,
            runValidators: true,
          }
        )
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateResponse: async (parent, {id, responseId, responseText}, context) => {
      if(context.user) {
        return Post.findOneAndUpdate(
          {_id: id, "responses.responseAuthor": context.user.username, "responses._id": responseId},
          {
            $set: {
              "responses.$.responseText": responseText
            }
          },
          {
            new:true,
            runValidators: true,
          }
        )
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addUser: async (parent, { username, email, password }) => {
      // First we create the user
      const user = await User.create({ username, email, password });
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ email });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
  }
}

module.exports = resolvers;