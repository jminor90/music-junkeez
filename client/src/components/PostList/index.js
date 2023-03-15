import React from 'react';
import { useQuery } from '@apollo/client';

import {GET_ALL_POSTS} from '../../utils/queries'

import PostShape from './postShape.js'

const PostList = () => {
  const {loading,data} = useQuery(GET_ALL_POSTS)

  const posts = data?.getAllPosts || []

  console.log("You are a bold one")
  console.log(posts)

  return(
    <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {/* If the data is still loading, render a loading message */}
          {loading ? (
            <div>Hey I'm Loadin' Here!...</div>
          ) : (
            <PostShape
              posts={posts}
              
            />
          )}
        </div>
    </div>

  )
}

export default PostList