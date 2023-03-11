import { Outlet } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

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