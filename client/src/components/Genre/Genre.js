import { FaThumbsDown } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';
import { useState } from 'react';
import PostThread from '../PostThread/PostThread.js';
import "./Genre.css";

    function GenreComponent() {
        const [isToggled, setIsToggled] = useState(false);

        return (
        <div className="genreContainer">
            <div className='newThreadButtonContainer'>
                <button className='newThreadButton' onClick={() => setIsToggled(!isToggled)}>Post Thread +</button>
            </div>

            { isToggled && <PostThread /> } 
        <div className="threadContainer">
            <div className="smallText">
                <p>-GenreType-</p>
                <h5>-ThreadTitle-</h5>
                <h6>-ThreadAuthor- -ThreadDate-</h6>
            </div>
            
        <div className='thumbContainer'>
        <button className='thumbButton'><FaRegCommentDots className='commentNumberButton'/> #</button>
            <button className='thumbButton'>
                <FaThumbsUp className='thumbsUp'/> #
            </button>
            <button className='thumbButton'>
                <FaThumbsDown className='thumbsDown'/> #
            </button>
        </div>
        </div>

        <div className="threadContainer">
            <div className="smallText">
                <p>-GenreType-</p>
                <h5>-ThreadTitle-</h5>
                <h6>-ThreadAuthor- -ThreadDate-</h6>
            </div>
            
        <div className='thumbContainer'>
        <button className='thumbButton'><FaRegCommentDots className='commentNumberButton'/> #</button>
            <button className='thumbButton'>
                <FaThumbsUp className='thumbsUp'/> #
            </button>
            <button className='thumbButton'>
                <FaThumbsDown className='thumbsDown'/> #
            </button>
        </div>
        </div>
    </div>
        );
    }

export default GenreComponent;