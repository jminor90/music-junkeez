import { FaThumbsDown } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';
import "./IndividualThread.css";

function IndividualThread() {

    return (
        <div className="genreContainer">
            <div className="threadContainer">
                <div className="threadText">
                    <h6>-GenreType-</h6>
                    <h4 className='threadTitle'>-ThreadTitle-</h4>
                    <p className='threadContent'>-ThreadContent-</p>
                    <h5>-ThreadAuthor- -ThreadDate- </h5>
                </div>
                
            <div className='thumbContainer'>
                <button className='thumbButton'>
                    <FaThumbsUp className='thumbsUp'/><span> # </span>
                </button>
                <button className='thumbButton'>
                    <FaThumbsDown className='thumbsDown'/><span> # </span>
                </button>
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
                    <h6>-GenreType-</h6>
                    <h4 className='threadTitle'>-ThreadTitle-</h4>
                    <p className='threadContent'>-ThreadContent-</p>
                    <h5>-ThreadAuthor- -ThreadDate- </h5>
                </div>
                
            <div className='thumbContainer'>
                <button className='thumbButton'>
                    <FaThumbsUp className='thumbsUp'/><span> # </span>
                </button>
                <button className='thumbButton'>
                    <FaThumbsDown className='thumbsDown'/><span> # </span>
                </button>
            </div>
            </div>
        </div>

    );
}

export default IndividualThread;