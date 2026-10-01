import Home from "./Home";
import { Outlet } from "react-router-dom";


function Layout() {
    return (
        <div className="min-h-screen bg-[#1d1c1c]">
            <Home />
            <Outlet />
        </div>
    )
}

export default Layout;