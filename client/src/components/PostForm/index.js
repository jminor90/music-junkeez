import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
// import { useQuery } from '@apollo/client';

import {CREATE_POST} from '../../utils/mutations';
import {GET_ALL_POSTS} from '../../utils/queries';

import Auth from "../../utils/auth";

const PostForm = () => {
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
          title,
          description,
          PostAuthor: Auth.getProfile().data.username,
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

  // test code to change to formState

  // const [formState, setFormState] = useState({title: '', description: '' });
  // const [createPost, { error, data }] = useMutation(CREATE_POST);
  //   const [characterCount, setCharacterCount] = useState(0);

  // // update state based on form input changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // // submit form
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(formState);
  //   try {
  //     const { data } = await createPost({
  //       variables: { ...formState },
  //     });

  //     // Auth.login(data.login.token);
  //   } catch (e) {
  //     console.error(e);
  //   }

  //   // clear form values
  //   setFormState({
  //     title: '',
  //     description: '',
  //   });
  // };



  return (
    <div>
      <h3>Create a new post</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div>
              <input name="title" placeholder="Title here" value={title} 
               onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="description"
                placeholder="Type here"
                value={description}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Create Post
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/signin">login</Link> or <Link to="/signin">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;
