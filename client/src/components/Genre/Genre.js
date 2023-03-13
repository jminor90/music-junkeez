import { FaThumbsDown } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';
import "./Genre.css";

    function GenreComponent() {

            return (
                <div className="genreContainer">
                    <div className="threadContainer">
                        <div className="smallText">
                            <p>-GenreType-</p>
                            <h5>-ThreadTitle-</h5>
                            <h6>-ThreadAuthor- -ThreadDate- <button className='commentButton'><FaRegCommentDots className='thumbButton'/> #</button></h6>
                        </div>
                    </div>

                    <div className='thumbContainer'>
                        <button className='thumbButton'>
                            <FaThumbsUp className='thumbsUp'/>
                        </button>
                        <button className='thumbButton'>
                            <FaThumbsDown className='thumbsDown'/>
                        </button>
                    </div>
                </div>
            );
        }

export default GenreComponent;