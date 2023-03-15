import { FaSearch } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import AuthService from '../../utils/auth';
import { useState } from 'react';
import "./Navbar.css";

        function Navbar() {
            const [showModal, setShowModal] = useState(false);

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
                    {AuthService.loggedIn() ? (
                <>
                <div className="logoutContainer">
                <p>Hello,</p>
                <button className="logout">
                  <Nav.Link onClick={AuthService.logout}>Logout</Nav.Link>
                  </button>
                  </div>
                </>
              ) :

                    <div className="d-flex signinContainer" show={showModal}
        onHide={() => setShowModal(false)}>
                    <Link to="/signin">
                        <button className="signinBtn" onClick={() => setShowModal(true)}>Signup/Sign in</button>
                        </Link>
                        </div>}


                </div>
                </nav>
                    <div className="navbar navbar-expand-lg filterContainer">
                        <div className="container-fluid filtersContainer">
                            <ul className="filters">
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white firstLink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Genres
                                </a>
                                <ul className="dropdown-menu text-white">
                                    <li><Link to={`/genres`} className="dropdown-item text-white">All Genres</Link></li>
                                    <li><a className="dropdown-item text-white" href="#">Rock</a></li>
                                    <li><a className="dropdown-item text-white" href="#">Pop</a></li>
                                    <li><a className="dropdown-item text-white" href="#">Jazz</a></li>
                                    <li><a className="dropdown-item text-white" href="#">Hip Hop</a></li>
                                    <li><a className="dropdown-item text-white" href="#">Classical</a></li>
                                </ul>
                                </li>
                                <li className="nav-item">
                                <Link to={`/general-discussion`} className="nav-link active  text-white" aria-current="page">General Discussion</Link>
                                </li>
                                <li className="nav-item">
                                <Link to={`/off-topic`} className="nav-link text-white" >Off-Topic</Link>
                                </li>
                                <li className="nav-item">
                                <Link to={`/username`} className="nav-link text-white" >My Threads</Link>
                                </li>

                            </ul>
                            </div>
                        </div>

                </>
            );
        }

export default Navbar;