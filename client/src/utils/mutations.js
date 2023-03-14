import { gql } from '@apollo/client';

//Log In User
export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
        _id
        username
        }
    }
    }
`
/*-------------------------------------------------------*/
`;

// Add User
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
        _id
        username
        email
        password
        }
    }
    }
`
/*-------------------------------------------------------*/


//Create Post
export const CREATE_POST = gql`
mutation createPost($post: PostInput) {
    createPost(post: $post) {
        _id
        title
        description
        postAuthor
    }
}
`
/*Variables / Requires Headers
{
    "post": {
        "title": "Yo again",
        "description": "This is the description 878946235"

    }
}
*/
/*-------------------------------------------------------*/


//Delete Post 
export const DELETE_POST = gql`
mutation deletePost($id: ID) { 
    deletePost(id: $id)
}
`
//Requires Headers... ID of post must be passed through...
/*-------------------------------------------------------*/

//Update Post by ID
export const UPDATE_POST = gql`
mutation updatePostByID($id: ID, $post: PostInput) {
    updatePost(id: $id, post: $post) {
        _id
        title
        description
    }
}
`
/* Variables/ Requires Headers
{
    "id": "640f6f1d61db9f308aac1a7c",
    "post": {
        "title": "I updated the title",
        "description": "An update to the Description 55555"
    }
}
*/
/*-------------------------------------------------------*/

//Add Response
export const ADD_RESPONSE = gql`
mutation addResponse($id: ID!, $responseText: String!) {
    addResponse(id: $id, responseText: $responseText) {
        _id
        title
        postAuthor
        responses {
        responseText
        responseAuthor
        createdAt
        }
    }
}
`
/* Variables / Requires Headers
{  "id": "6410ade12c0b8fc6c0680a2f",
    "responseText": "Response Text to this message 897897897987"
}
*/
/*-------------------------------------------------------*/

//Remove Response
export const REMOVE_RESPONSE = gql`
mutation removeResponse($removeResponseId: ID!, $responseId: ID!) {
    removeResponse(id: $removeResponseId, responseId: $responseId) {
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
/* Variables / Requires Headers
{  "removeResponseId": "6410ade12c0b8fc6c0680a2f", //this is the Post ID
    "responseId": "6410ae272c0b8fc6c0680a36" //this is the response ID
}
*/
/*-------------------------------------------------------*/


export const UPDATE_RESPONSE = gql`
mutation updateResponse($updateResponseId: ID!, $responseId: ID!, $responseText: String!) {
    updateResponse(id: $updateResponseId, responseId: $responseId, responseText: $responseText) {
        responses {
        _id
        responseText
        responseAuthor
        createdAt
        }
    }
}
`
/*
{  "updateResponseId": "640f715054b4415f1114ed1a", //this is the Post ID
    "responseId": "640f8b85461a7308a5886828", //this is the response ID
    "responseText": "I am UPDATING THIS 55555"
}
*/
/*-------------------------------------------------------*/




