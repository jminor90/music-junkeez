import "./PostThread.css";

function PostThread() {

    return (
        <div className="commentContainer">
                <div className="threadTitleContainer">
                    <textarea className='threadTextUpper' rows='1' placeholder='Enter thread title here ->'>
                    </textarea>
                    <textarea className='threadTextLower' rows='10' placeholder='Share your thoughts here ->'>
                    </textarea>
                </div>
        <div className='filterList'>
            <h6 className="genresList">Genres:</h6>
            <div className="FilterListContainer">
            <div className="filterListCheckbox" >
                <input type="checkbox" id="Rock" name="Rock" value="Rock"></input>
                <label className="filterListText" for="Rock">Rock</label>
            </div>
            <div className="filterListCheckbox">
                <input type="checkbox" id="Pop" name="Pop" value="Pop"></input>
                <label className="filterListText" for="Pop">Pop</label>
            </div>
            <div className="filterListCheckbox">
                <input type="checkbox" id="Jazz" name="Jazz" value="Jazz"></input>
                <label className="filterListText" for="Jazz">Jazz</label>
            </div>
            <div className="filterListCheckbox">
                <input type="checkbox" id="Hip-Hop" name="Hip Hop" value="Hip Hop"></input>
                <label className="filterListText" for="Hip Hop">Hip-Hop</label>
            </div>
            <div  className="filterListCheckbox">
                <input type="checkbox" id="Classical" name="Classical" value="Classical"></input>
                <label className="filterListText" for="Classical">Classical</label>
            </div>
            <div className="filterListCheckbox">
                <input type="checkbox" id="General" name="General" value="General"></input>
                <label className="filterListText" for="General">General</label>
            </div>
            <div className="filterListCheckbox">
                <input type="checkbox" id="Off-Topic" name="Off-Topic" value="Off-Topic"></input>
                <label className="filterListText" for="Off-Topic">Off-Topic</label>
            </div>
            </div>
        </div>
        <div className='postThreadButtonContainer'>
            <button className='postThreadButton'>Post Thread +</button>
        </div>
            <p className="or">or</p> 
            <button className='albumReviewButton'>Make an album review</button>
        </div>

    );
}

export default PostThread;