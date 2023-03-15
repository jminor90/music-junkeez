import React from 'react';
import "../Genre/Genre.css";
import { FaLongArrowAltRight } from 'react-icons/fa';

const PostShape = ({posts}) => {

  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <>
    {
      posts.map((posts)=> (
        <div className='threadContainers'>
        <div className="threadContainer">
        <div className="smallText">
        <h5>{posts.title}</h5>
        <p><FaLongArrowAltRight className='faArrow' /> {posts.description}</p>
        <p>{posts.genreKeywords}</p>
        <h6>Topic: {posts.topic}</h6>
        <h6>By: {posts.postAuthor}</h6>
        <h6>On: {posts.createdAt}</h6>
        <div id="spotifyData">
        </div>
        </div>
      </div>
        </div>
        
      )

      )
    },
    </>

  )
}

export default PostShape;