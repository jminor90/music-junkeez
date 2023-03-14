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
                <div className="threadTitleContainer">
                    <textarea className='threadTextUpper' rows='1' placeholder='Enter thread title here ->'>
                    </textarea>
                    <div className="threadTextLowerContainer">
                    <textarea className='threadTextLower' rows='8' placeholder='Share your thoughts here ->'>
                    </textarea>
                    </div>
                </div>
        <div className='filterList'>
        <label className="form-label topicHeader">Choose Topic:</label>
  <div className="input-group dropdownTopicsContainer">
      <select className="form-select" id="topic" aria-label="Default select example">
          <option value="General Discussion">General Discussion</option>
          <option value="Off-Topic">Off-Topic</option>
      </select>
  </div>
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