import { FaGithub } from 'react-icons/fa';
import "./Footer.css";

function Footer() {

    return (
        <div className="footerContainer">

            <a href="https://github.com/jminor90/music-junkeez" target="_blank">
                <FaGithub />
            </a>

            <h6>&copy; Music Junkeez | Designed by Joshua Minor, Adam Hovda, Evan Towelerton and Anthony Frederick </h6>

        </div>
    );
}

export default Footer;