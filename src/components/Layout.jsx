
import Navbar from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
    return (
        <div className="min-h-screen bg-[#1d1c1c]">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;