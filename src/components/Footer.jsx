import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";


const EMAIL = "rizsvisuals@gmail.com"; 
const socials = [
    { label: "GitHub", icon: "ri-github-fill", href: "https://github.com/Rizwan-Codes" },
    { label: "LinkedIn", icon: "ri-linkedin-fill", href: "#" },
    { label: "Instagram", icon: "ri-instagram-line", href: "#" }, 
    { label: "Behance", icon: "ri-behance-fill", href: "#" }, 
];


const navLinks = [
    { label: "Work", to: "/Work" },
    { label: "About", to: "/About" },
    { label: "Contact", to: "/Contact" },
];

const workLinks = [
    { label: "Logo Design", to: "/Logos" },
    { label: "Social Posts", to: "/Posts" },
    { label: "Thumbnails", to: "/Thumbnails" },
    { label: "Posters", to: "/Posters" },
    { label: "Branding", to: "/Branding" },
];

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: "easeInOut" },
};

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-20 border-t border-white/10 bg-black/40 font-karla">
            <div className="max-w-7xl mx-auto px-4">
                {/* CTA band */}
                <motion.div
                    {...fadeUp}
                    className="flex flex-col items-center gap-6 py-16 text-center md:flex-row md:items-end md:justify-between md:text-start"
                >
                    <div>
                        <span className="block text-[12px] md:text-[14px] font-bold tracking-widest text-white/70">
                            HAVE A PROJECT IN MIND?
                        </span>
                        <h2 className="mt-2 text-5xl md:text-8xl font-extrabold text-primary leading-none">
                            LET'S <span className="text-secondary">TALK</span>
                        </h2>
                        <p className="mt-4 text-[14px] md:text-xl text-primary/70 font-medium md:max-w-xl">
                            Logo, branding, posters or thumbnails, tell me what you need and
                            I'll turn it into a visual that stands out.
                        </p>
                    </div>

                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full md:w-auto">
                        <Link
                            to="/Contact"
                            className="block w-full md:w-auto px-6 py-3 border border-secondary bg-secondary text-black rounded-full text-center font-bold transition-all"
                        >
                            Start a Project
                        </Link>
                    </motion.div>
                </motion.div>

                <div className="h-px w-full bg-primary/20" />

                {/* Main columns */}
                <motion.div
                    {...fadeUp}
                    className="grid grid-cols-2 gap-10 py-12 md:grid-cols-4"
                >
                    {/* Brand */}
                    <div className="col-span-2 flex flex-col items-center text-center md:col-span-1 md:items-start md:text-start">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-7 h-7 border border-secondary rounded-full overflow-hidden">
                                <img src="/images/Logo.png" alt="Riz Visuals logo" />
                            </div>
                            <span className="font-bold tracking-wider text-[18px] text-white">
                                RIZ VISUALS
                            </span>
                        </Link>
                        <p className="mt-4 text-[14px] text-primary/70 font-medium max-w-xs">
                            Bold visuals with purpose. Brand identity, posters and thumbnails by Rizwan Ali.
                        </p>
                        <div className="mt-5 inline-flex items-center gap-2 border border-secondary/70 px-3 py-1 rounded-full bg-black">
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                            <span className="font-medium text-[14px] text-white">Open to Work</span>
                        </div>
                    </div>

                    {/* Navigate */}
                    <div>
                        <h3 className="mb-4 text-[14px] font-bold tracking-widest text-secondary">NAVIGATE</h3>
                        <ul className="flex flex-col gap-3">
                            {navLinks.map((l) => (
                                <li key={l.label}>
                                    <NavLink
                                        to={l.to}
                                        className="font-medium text-primary/70 hover:text-secondary transition-colors"
                                    >
                                        {l.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Work */}
                    <div>
                        <h3 className="mb-4 text-[14px] font-bold tracking-widest text-secondary">WORK</h3>
                        <ul className="flex flex-col gap-3">
                            {workLinks.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        to={l.to}
                                        className="font-medium text-primary/70 hover:text-secondary transition-colors"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="mb-4 text-[14px] font-bold tracking-widest text-secondary">CONNECT</h3>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="font-medium text-primary/70 hover:text-secondary transition-colors break-all"
                        >
                            {EMAIL}
                        </a>
                        <div className="mt-5 flex items-center gap-3">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-primary/70 text-xl transition-all hover:border-secondary hover:bg-secondary hover:text-black"
                                >
                                    <i className={s.icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Bottom bar */}
                <div className="flex flex-col items-center gap-3 border-t border-white/10 py-6 text-center md:flex-row md:justify-between md:text-start">
                    <span className="text-[13px] text-primary/60 font-medium">
                        © {year} Riz Visuals. All rights reserved.
                    </span>
                    <span className="font-serif italic text-xl text-secondary/80">
                        Designed &amp; built by Rizwan Ali
                    </span>
                    <button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex items-center gap-2 text-[13px] font-medium text-primary/60 hover:text-secondary transition-colors cursor-pointer"
                    >
                        Back to top <i className="ri-arrow-up-line" />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;