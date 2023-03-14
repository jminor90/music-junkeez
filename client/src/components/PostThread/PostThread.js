import { FaThumbsDown } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';
import "./PostThread.css";

function PostThread() {

    return (
        <div className="commentContainer">
        <textarea className='commentText' rows='10' placeholder='Share your thoughts here ->'>
        </textarea>
        <div className='postThreadButtonContainer'>
            <button className='postThreadButton'>Post Thread +</button>
        </div>
            <p className="or">or</p> 
            <button className='albumReviewButton'>Make an album review</button>
        </div>

    );
}

export default PostThread;