const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Post {
    _id: ID
    title: String
    description: String
    postAuthor: String
    responses: [Response]
  }

  type Response {
    _id: ID
    responseText: String
    responseAuthor: String
    createdAt: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]
  }

  type Auth {
    token: ID!
    user: User
  }

  input PostInput {
    title: String
    description: String
  }


  type Query {
    hello: String

    getAllPosts: [Post]
    getPost(id: ID) : Post
    getMyPosts: [Post]
    getPostByUserID(id:ID): User 
  }

  type Mutation {
    createPost(post: PostInput) : Post
    deletePost(id: ID) : String
    updatePost(id: ID, post: PostInput) : Post

    addResponse(id: ID!, responseText: String!) : Post
    removeResponse(id: ID!, responseId:  ID!) : Post
    updateResponse(id: ID!, responseId: ID!, responseText: String!) : Post

    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`

module.exports = typeDefs;