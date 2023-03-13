import { FaSearch } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";

        function Navbar() {

            return (
                <>
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
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle  text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Genres
                                </a>
                                <ul class="dropdown-menu  text-white">
                                    <li><Link to={`/genres`} className="dropdown-item">All Genres</Link></li>
                                    <li><a className="dropdown-item" href="#">Rock</a></li>
                                    <li><a className="dropdown-item" href="#">Pop</a></li>
                                    <li><a className="dropdown-item" href="#">Jazz</a></li>
                                    <li><a className="dropdown-item" href="#">Hip Hop</a></li>
                                    <li><a className="dropdown-item" href="#">Classical</a></li>
                                </ul>
                                </li>
                                <li className="nav-item">
                                <Link to={`/general-discussion`} className="nav-link active  text-white" aria-current="page">General Discussion</Link>
                                </li>
                                <li className="nav-item">
                                <Link to={`/off-topic`} className="nav-link text-white" >Off-Topic</Link>
                                </li>

                            </ul>
                            </div>
                        </div>
                        </nav>

                </>
            );
        }

export default Navbar;