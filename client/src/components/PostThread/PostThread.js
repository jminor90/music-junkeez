import { FaThumbsDown } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';
import "./PostThread.css";

// Importing SpotifyAPI module
import SpotifyApi from '../spotifyAPI/spotify';
// Importing UseState
import { useState } from 'react';

function PostThread() {
    const [showSpotifyApi, setShowSpotifyApi] = useState(false);

    const handleAlbumReviewButtonClick = () => {
        setShowSpotifyApi(true);
    };

    if (showSpotifyApi) {
        return <SpotifyApi />;
    }

    return (
        <div className="commentContainer">
        <textarea className='commentText' rows='10' placeholder='Share your thoughts here ->'>
        </textarea>
        <div className='postThreadButtonContainer'>
            <button className='postThreadButton'>Post Thread +</button>
        </div>
            <p className="or">or</p> 
            <button className='albumReviewButton' onClick={handleAlbumReviewButtonClick}>Add Spotify Media</button>
        </div>

    );
}

export default PostThread;