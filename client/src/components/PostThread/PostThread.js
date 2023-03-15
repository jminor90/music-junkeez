import "./PostThread.css";
import GenreDropdown from "../GenreDropdown/GenreDropdown.js";

// Importing SpotifyAPI module
import SpotifyApi from '../spotifyAPI/spotify';
// Importing UseState
import { useState } from 'react';

function PostThread() {

    const [showSpotifyApi, setShowSpotifyApi] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleAlbumReviewButtonClick = () => {
        setShowSpotifyApi(true);
    };

    if (showSpotifyApi) {
        return <SpotifyApi />;
    }

    return (
        <div className="commentContainer">
                <div className="threadTitleContainer">
                    <textarea className='threadTextUpper' rows='1' placeholder='Enter thread title here ->'>
                    </textarea>
                    <div className="threadTextLowerContainer">
                    <textarea className='threadTextLower' rows='8' placeholder='Share your thoughts here ->'>
                    </textarea>
                    </div>
                </div>
        <div className='filterList'>
            <li className="nav-item dropdown dropdownTopics">
                <div className="dropdownItemsContainer">
                <a className="nav-link dropdown-toggle topicHeader" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Choose Topic:
                </a>
                    <ul className="dropdown-menu dropdownItems">
                        <li className="dropdown-item topicItem" onClick={() => setIsClicked(!isClicked)}>General</li>
                        <li className="dropdown-item topicItem">Off-Topic</li>
                    </ul>
                    { isClicked && <GenreDropdown /> }
                </div>
            </li>
        </div>
        <div className='postThreadButtonContainer'>
            <button className='postThreadButton'>Post Thread +</button>
        </div>
            <p className="or">or</p> 
            <button className='albumReviewButton' onClick={handleAlbumReviewButtonClick}>Add Media</button>
        </div>

    );
}

export default PostThread;