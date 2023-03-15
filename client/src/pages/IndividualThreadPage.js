import IndividualThread from "../components/IndividualThread/IndividualThread";

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_POST_BY_ID } from '../utils/queries';

function IndividualThreadPage() {
    const { postId } = useParams();
    console.log("Right here dude")
    console.log(postId)

    const { loading, data } = useQuery(GET_POST_BY_ID, {
        // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
        variables: { "getPost": postId },
      });
      const post = data?.getPost || {}
      console.log("Detective")
      console.log(post)
    //   console.log(data.getPost)

    //   responses = data.getPost.responses
    //   console.log(responses)

    return (
        <>
        {
            loading ? (
                <div>Hey I'm Loadin' Here!...</div>
            ): (

                <div className="genreContainer">
                {/* <IndividualThread /> */}
                <div className="threadContainer">
                <div className="threadText">
                <h6>{post.genreKeywords}</h6>
                <h4 className='threadTitle'>{post.title}</h4>
                <p className='threadContent'>{post.description}</p>
                <h5>by: {post.postAuthor}</h5>
                <h5>on: {post.createdAt}</h5>
                </div>
                
                </div>
                
                <div className="commentContainer">
                <textarea className='commentText' rows='10' placeholder='Share your thoughts here ->'>
                </textarea>
                <div className='buttonContainer'>
                <button className='commentButton'>Comment</button>
                </div>
                </div>
                
                <div className='commentsContainer'>
                <h3 className='commentsHeader'>
                Comments 	&darr;
                </h3>
                </div>
                
                <div className="threadContainer">
                <div className="threadText">
                <p className='commentContent'>-CommentContent-</p>
                <h5>-CommentAuthor- -CommentDate- </h5>
                </div>
                
                </div>
                </div>
        )
    }
    </>
        );
    }
    
export default IndividualThreadPage;