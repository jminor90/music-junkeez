import { FaSearch } from 'react-icons/fa';
import "./Navbar.css";

        function Navbar() {

            return (
                <nav className="navbar bg-body-tertiary">
                <div className="container-fluid navContainer">

                    <img src={require("../../assets/images/MusicJunkeez.png")} alt="Logo" className="navImg"></img>
                    <img src={require("../../assets/images/MusicJunkeezShort.png")} alt="Logo" className="navImg2"></img>

                    <form className="content" role="search">
                        <div className='search-bar'>

                            <input className="search-bar__input" type="text" placeholder="Search" aria-label="Search"></input>

                            <button className="search-bar__submit" type="submit">
                                <FaSearch className='FaSearch'/>
                            </button>

                            </div>
                    </form>

                    <div className="d-flex loginContainer">
                        <button className="signupBtn">Signup</button>
                        <h6 className="loginh6">OR</h6>
                        <button className="loginBtn">Login</button>
                    </div>

                </div>
                </nav>
            );
        }

export default Navbar;