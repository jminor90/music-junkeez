import {
    gql
} from '@apollo/client';


export const GET_ALL_POSTS = gql`
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
`;