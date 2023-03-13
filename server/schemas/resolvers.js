const { Post } = require ('../models')

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
    }
  },

  Mutation: {
    createPost: async (parent, args, context, info) => {
      const {title, description} = args.post //object descrutring from args.post
      const post = new Post ({ title, description })
      await post.save()
      return post;
    },

    deletePost: async (parent, {id}, context, info) => {
      await Post.findByIdAndDelete(id);
      return "Ok Post Deleted"
    },

    updatePost: async (parent, args, context, info) => {
      const {id} = args
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
  }
}

module.exports = resolvers;