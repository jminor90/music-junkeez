import { FaThumbsDown } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';
import "./Genre.css";

    function GenreComponent() {

            return (
                <div className="genreContainer">
                    <div className="singleThreadContainer">
                        <div className="smallText">
                            <p>-GenreType-</p>
                            <h5>-ThreadTitle-</h5>
                            <h6>-ThreadAuthor- -ThreadDate- </h6>
                        </div>
                        
                    <div className='thumbContainer'>
                        <button className='thumbButtons'>
                            <FaThumbsUp className='thumbsUp'/><span> # </span>
                        </button>
                        <button className='thumbButtons'>
                            <FaThumbsDown className='thumbsDown'/><span> # </span>
                        </button>
                    </div>
                    </div>
                </div>

                
            );
        }

export default GenreComponent;