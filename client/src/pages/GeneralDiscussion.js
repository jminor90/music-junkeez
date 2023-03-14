import { FaThumbsDown } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';
import "../components/Genre/Genre.css";

function GeneralDiscussion() {

    return (
        <div className="genreContainer">
            <div className="threadContainer">
                <div className="smallText">
                    <p>-GenreType-</p>
                    <h5>-ThreadTitle-</h5>
                    <h6>-ThreadAuthor- -ThreadDate- <button className='commentButton'><FaRegCommentDots className='thumbButton'/> #</button></h6>
                </div>
                
            <div className='thumbContainer'>
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

export default GeneralDiscussion;