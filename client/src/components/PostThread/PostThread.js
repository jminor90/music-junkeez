import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
// import { useQuery } from '@apollo/client';

import {CREATE_POST} from '../../utils/mutations';
import {GET_ALL_POSTS} from '../../utils/queries';

import Auth from "../../utils/auth";


import { FaThumbsDown } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';
import "./PostThread.css";

function PostThread() {

    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
  
    const [characterCount, setCharacterCount] = useState(0);
  
    const [createPost, { error }] = useMutation(CREATE_POST, {
  
      update(cache, { data: { createPost } }) {
        try {
          const { posts } = cache.readQuery({ query: GET_ALL_POSTS });
  
          cache.writeQuery({
            query: GET_ALL_POSTS,
            data: { posts: [createPost, ...posts] },
          });
        } catch (e) {
          console.error(e);
        }
      },
    });
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
          console.log(title, description);
  
  
      try {
        const { data } = await createPost({
          variables: {
            post: {title,
            description},
            
          },
  
        });
        setTitle("");
        setDescription("");
      } catch (err) {
        console.error(err);
        
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      if (name === "description" && value.length <= 280) {
        setDescription(value);
  
        setCharacterCount(value.length);
      } 
    };





    return (
        <div>

        {Auth.loggedIn() ? (
            <>
            <form onSubmit={handleFormSubmit}>
        <div className="commentContainer">

              <input name="title" placeholder="Title here" value={title} 
               onChange={(e) => setTitle(e.target.value)}></input>

        <textarea name="description"  value={description} className='commentText' rows='10' onChange={(e) => setDescription(e.target.value)} placeholder='Share your thoughts here ->'>
        </textarea>
        <div className='postThreadButtonContainer'>
            <button type="submit" className='postThreadButton'>Post Thread +</button>
        </div>
            <p className="or">or</p> 
            <button className='albumReviewButton'>Make an album review</button>
        </div>

        </form>
            </>
        ) : (
            <p>
              You need to be logged in to create a thread. Please{" "}
              <Link to="/signin">login.</Link>
            </p>
          )}
          </div>

    );
}

export default PostThread;