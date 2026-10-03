
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"

const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/About" },
    { label: "Contact", to: "/Contact" },
]

function Navbar() {
    const [open, setOpen] = useState(false)

    const style = {
        hidden: { opacity: 0, y: 5 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
        },
    }

    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false)
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [])

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)")
        const onChange = (e) => e.matches && setOpen(false)
        mq.addEventListener("change", onChange)
        return () => mq.removeEventListener("change", onChange)
    }, [])

    return (
        <div className="sticky top-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
            <motion.nav
                variants={style}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto relative flex items-center justify-between px-4 py-2 md:px-3"
            >
                {/* Logo */}
                <div className="flex items-center justify-center gap-2">
                    <div className="bg-transparent w-7 h-7 border border-secondary rounded-full">
                        <img src="/images/Logo.png" alt="" />
                    </div>
                    <span className="font-bold tracking-wider font-karla text-[18px] text-white">
                        RIZ VISUALS
                    </span>
                </div>

                {/* Desktop links */}
                <div className="hidden font-karla md:flex md:items-center md:justify-center md:gap-10">
                    {links.map((l) => (
                        <NavLink
                            key={l.label}
                            to={l.to}
                            className="font-medium text-primary/70 hover:text-secondary"
                        >
                            {l.label}
                        </NavLink>
                    ))}
                </div>

                {/* Desktop badge */}
                <div className="hidden border border-secondary/70 px-3 py-1 md:flex md:items-center md:gap-2 rounded-full bg-black">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="font-karla font-medium text-[16px] text-white">Open to Work</span>
                </div>

                {/* Mobile toggle button */}
                <button
                    type="button"
                    onClick={() => setOpen((o) => !o)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.25 cursor-pointer"
                >
                    <span
                        className={`block h-0.5 w-6 bg-primary rounded transition-transform duration-300 ${open ? "translate-y-1.75 rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-primary rounded transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-primary rounded transition-transform duration-300 ${open ? "-translate-y-1.75 -rotate-45" : ""
                            }`}
                    />
                </button>

                {/* Mobile menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            id="mobile-menu"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden absolute top-full left-0 w-full z-50 flex flex-col gap-4 px-4 py-5 font-karla bg-black/90 backdrop-blur border-t border-white/10"
                        >
                            {links.map((l) => (
                                <NavLink
                                    key={l.label}
                                    to={l.to}
                                    onClick={() => setOpen(false)}
                                    className="font-medium text-lg text-primary/70 hover:text-secondary"
                                >
                                    {l.label}
                                </NavLink>
                            ))}
                            <div className="self-start flex items-center gap-2 border border-white/20 px-3 py-1 rounded-full bg-black">
                                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                                <span className="font-medium text-[16px] text-white">Open to Work</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    )
}

export default Navbar