import { FaGithub } from 'react-icons/fa';
import "./Footer.css";

function Footer() {

    return (
        <div className="footerContainer">

            <a className="footerIcon" href="https://github.com/jminor90/music-junkeez" target="_blank">
                <FaGithub />
            </a>

            <h6 className='footerText'> &copy; Music Junkeez | Developed by Joshua Minor, Adam Hovda, Evan Towelerton and Anthony Frederick </h6>

        </div>
    );
}

export default Footer;