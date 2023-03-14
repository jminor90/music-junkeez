const { gql } = require('apollo-server-express');


//Get All Users ... probably for back end purposes only...?
export const GET_ALL_USERS = gql`
query getAllPosts {
  getAllPosts {
    _id
    title
    description
    postAuthor
    responses {
      _id
      responseText
      responseAuthor
      createdAt
    }
  }
}
`
/*-------------------------------------------------------*/


//Get All Posts
export const GET_ALL_POSTS = gql `
query getAllPosts {
  getAllPosts {
    _id
    title
    description
    postAuthor
    responses {
      _id
      responseText
      responseAuthor
      createdAt
    }
  }
}
`
/*-------------------------------------------------------*/


//Get My Post ...gets all the posts created by the logged in user
export const GET_MY_POSTS = gql`
query getMyPosts {
  getMyPosts {
    title
    description
    responses {
      responseText
      responseAuthor
    }
  }
}
`
//Requires Headers to know which user is logged in...
/*-------------------------------------------------------*/


// Gets all posts by another user
export const GET_POST_BY_USER = gql `
query getPostByUserID($getPostByUserIdId: ID) {
  getPostByUserID(id: $getPostByUserIdId) {
    posts {
      title
      description
      postAuthor
    }
  }
}
`