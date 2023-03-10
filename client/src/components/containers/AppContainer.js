import { Outlet } from 'react-router-dom';
import Navbar from "../Navbar"
import Footer from "../Footer"

function AppContainer() {

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default AppContainer;