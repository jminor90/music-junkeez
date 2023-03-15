import { Outlet } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

function AppContainer() {

    return (
        <>
            <Navbar classname="navbarZindex"/>
            <Outlet classname="outletZindex"/>
            <Footer classname="footerZindex"/>
        </>
    );
}

export default AppContainer;