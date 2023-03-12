import { FaSearch } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";

        function Navbar() {

            return (
                <nav className="navbar bg-body-tertiary">
                <div className="container-fluid navContainer">

                    <img src={require("../../assets/images/MusicJunkeez.png")} alt="Logo" className="navImg"></img>
                    <img src={require("../../assets/images/MusicJunkeezShort.png")} alt="Logo" className="navImg2"></img>

                    <form className="content" role="search">
                        <div className='search-bar'>

                            <input className="search-bar__input" type="text" placeholder="Search for forums, genres or users" aria-label="Search"></input>

                            <button className="search-bar__submit" type="submit">
                                <FaSearch className='FaSearch'/>
                            </button>

                            </div>
                    </form>

                    <div className="d-flex signinContainer">
                    <Link to="/signin">
                        <button className="signinBtn">Signup/Sign in</button>
                        </Link>
                    </div>

                </div>
                </nav>
            );
        }

export default Navbar;