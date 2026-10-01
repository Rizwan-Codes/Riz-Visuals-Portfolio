import { NavLink } from "react-router-dom"
import { motion } from "motion/react"

function Navbar() {

    const style = {
        hidden: { opacity: 0, y: 5 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
        },
    }

    return (
        <div className="bg-white/3">
            <motion.nav
                variants={style}
                initial="hidden"
                animate="visible"
                className="max-w-7xl m-auto  flex items-center justify-between px-4 py-2 md:max-w-7xl md:px-3 md:m-auto md:flex md:items-center md:justify-between md:py-2 md:p-0">
                <div
                    className="flex items-center justify-center gap-2"
                >
                    <div
                        className=" bg-transparent w-7 h-7 border border-primary/60 rounded-full"
                    >
                        <img src="./src/assets/Logo.png" alt="" />
                    </div>
                    <span className="font-bold tracking-wider font-karla text-[18px] text-white">RIZ VISUALS</span>
                </div>
                <div className="hidden font-karla md:flex md:items-center md:justify-center md:gap-10  ">
                    <NavLink
                        to="/"
                        className="font-medium text-primary/70 hover:text-secondary"
                    >
                        Work
                    </NavLink>
                    <NavLink
                        to="/"
                        className="font-medium text-primary/70 hover:text-secondary"
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/"
                        className="font-medium text-primary/70 hover:text-secondary"
                    >
                        Contact
                    </NavLink>
                </div>
                <div className="hidden border border-black px-3 py-1 md:flex md:items-center md:gap-2 rounded-full bg-black">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="font-karla font-medium text-[16px] text-white">Open to Work</span>
                </div>
                <div className=" md:hidden lg:hidden cursor-pointer">
                    <span className="text-2xl text-primary">☰</span>
                </div>
            </motion.nav>
        </div>
    )
}

export default Navbar