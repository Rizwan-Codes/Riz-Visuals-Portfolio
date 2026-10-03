
import { useEffect } from "react";
import Navbar from "./header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

function Layout() {

    function ScrollToTop() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }


    return (
        <div className="min-h-screen bg-[#1d1c1c]">
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;