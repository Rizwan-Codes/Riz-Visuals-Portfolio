import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

// ====== ADD NEW LOGOS HERE (one object per logo) ======
const logos = [
    {
        name: "Venguard Apex",
        bw: "/images/Logos/Venguard-Apex/VA-BW.jpg",
        color: "/images/Logos/Venguard-Apex/VA.jpg",
    },
    {
        name: "Kyro Audios",
        bw: "/images/Logos/Kyro/KABW.jpg",
        color: "/images/Logos/Kyro/KA-COL.jpg",
    },
    {
        name: "OverDrive",
        bw: "/images/Logos/Overdrive/Overdrive-BW.jpg",
        color: "/images/Logos/Overdrive/Overdrive-Col.jpg",
    },
    {
        name: "Spectre",
        bw: "/images/Logos/Spectre/Spectre-BW.jpg",
        color: "/images/Logos/Spectre/spectre-Col.jpg",
    },
     {
        name: "AR Perfumes",
        bw: "/images/Logos/AR/ARW.png",
        color: "/images/Logos/AR/ARB.png",
    },
     {
        name: "Auralis",
        bw: "/images/Logos/Auralis/Auralis-B.jpg",
        color: "/images/Logos/Auralis/Auralis-C.png",
    },
     {
        name: "Vaynex",
        bw: "/images/Logos/Vaynex/vaynex-b.png",
        color: "/images/Logos/Vaynex/vaynex-c.jpg",
    },
     {
        name: "Startos",
        bw: "/images/Logos/Startos/Startos-b.png",
        color: "/images/Logos/Startos/Startos-c.png",
    },

];

// Other work categories shown at the bottom (routes are the ones used in the Footer)
const otherWork = [
    { label: "Branding", to: "/Brandings", icon: "ri-vip-diamond-line" },
    { label: "Posters", to: "/Poster", icon: "ri-image-line" },
    { label: "Thumbnails", to: "/Thumbnails", icon: "ri-youtube-line" },
    { label: "Social Posts", to: "/Posts", icon: "ri-instagram-line" },
];
// ======================================================

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: "easeInOut" },
};

const pad = (n) => String(n).padStart(2, "0");

function Logos() {
    const [selected, setSelected] = useState(null); // index of open logo, or null

    const close = useCallback(() => setSelected(null), []);
    const prev = useCallback(
        () => setSelected((i) => (i === null ? i : (i - 1 + logos.length) % logos.length)),
        []
    );
    const next = useCallback(
        () => setSelected((i) => (i === null ? i : (i + 1) % logos.length)),
        []
    );

    // Keyboard controls + lock page scroll while lightbox is open
    useEffect(() => {
        if (selected === null) return;
        const onKey = (e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = original;
        };
    }, [selected, close, prev, next]);

    const active = selected !== null ? logos[selected] : null;

    return (
        <div className="font-karla">
            {/* ---------- Heading ---------- */}
            <section className="max-w-7xl mx-auto px-4 pt-10 md:pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className="text-center md:text-start"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-[13px] font-bold tracking-widest text-white/70 transition-colors hover:text-secondary"
                    >
                        <i className="ri-arrow-left-line" /> BACK TO HOME
                    </Link>

                    <h1 className="mt-4 text-5xl md:text-8xl font-extrabold text-secondary leading-none">
                        LOGO <span className="text-primary">DESIGNS</span>
                    </h1>
                    <p className="mt-4 text-[14px] md:text-[18px] px-4 md:px-0 text-primary/80 font-medium md:w-[70%]">
                        From minimalist monograms to full brand symbols, I create custom logo designs
                        built to leave a lasting impression across all digital and print mediums.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                        <span className="rounded-full border border-secondary/70 bg-black px-4 py-1.5 text-[13px] font-medium text-white">
                            {pad(logos.length)} Projects
                        </span>
                        <span className="rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-[13px] font-medium text-primary/80">
                            Colour &amp; Black/White versions
                        </span>
                    </div>
                </motion.div>
            </section>

            {/* ---------- Gallery ---------- */}
            <section className="max-w-7xl mx-auto px-4 mt-14">
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {logos.map((logo, i) => (
                        <motion.div
                            key={logo.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: "easeInOut" }}
                        >
                            <button
                                type="button"
                                onClick={() => setSelected(i)}
                                aria-label={`View ${logo.name} logo`}
                                className="group relative block w-full cursor-pointer overflow-hidden rounded-2xl border border-secondary text-start"
                            >
                                {/* Black/white (desktop default) */}
                                <img
                                    src={logo.bw}
                                    alt={`${logo.name} black and white logo`}
                                    loading="lazy"
                                    className="hidden aspect-square w-full object-cover transition-all duration-500 ease-in-out md:block md:group-hover:scale-110 md:group-hover:opacity-0"
                                />
                                {/* Colour (mobile default, desktop on hover) */}
                                <img
                                    src={logo.color}
                                    alt={`${logo.name} colour logo`}
                                    loading="lazy"
                                    className="aspect-square w-full object-cover transition-all duration-500 ease-in-out md:absolute md:inset-0 md:opacity-0 md:group-hover:scale-110 md:group-hover:opacity-100"
                                />
                                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-secondary bg-black/70 text-lg text-secondary opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                                    <i className="ri-expand-diagonal-line" />
                                </span>
                            </button>

                            <div className="mt-3 flex items-baseline justify-between px-1">
                                <span className="text-[16px] md:text-xl font-bold text-primary">{logo.name}</span>
                                <span className="text-[13px] font-bold tracking-widest text-secondary/80">{pad(i + 1)}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p {...fadeUp} className="mt-6 text-center text-[13px] font-medium text-primary/50 md:text-start">
                    Hover (desktop) or tap a logo to see both versions.
                </motion.p>
            </section>

            {/* ---------- Explore other work ---------- */}
            <section className="max-w-7xl mx-auto px-4 mt-24">
                <motion.div {...fadeUp} className="text-center md:text-start">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-secondary">
                        EXPLORE <span className="text-primary">MORE</span>
                    </h2>
                    <p className="mt-4 text-[14px] md:text-[18px] text-primary/80 font-medium">
                        See the rest of my design work.
                    </p>
                </motion.div>

                <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {otherWork.map((w, i) => (
                        <motion.div
                            key={w.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeInOut" }}
                        >
                            <Link
                                to={w.to}
                                className="group flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-black/30 p-4 transition-colors hover:border-secondary"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary text-xl text-secondary transition-all group-hover:bg-secondary group-hover:text-black">
                                        <i className={w.icon} />
                                    </div>
                                    <span className="text-[15px] md:text-lg font-bold text-primary">{w.label}</span>
                                </div>
                                <i className="ri-arrow-right-up-line hidden md:block text-xl text-primary/50 transition-colors group-hover:text-secondary" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ---------- Lightbox ---------- */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        key="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={close}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${active.name} logo`}
                        className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl rounded-2xl border border-secondary/60 bg-[#1d1c1c] p-4 md:p-6"
                        >
                            <div className="mb-4 flex items-center justify-between">
                                <div>
                                    <span className="block text-[12px] font-bold tracking-widest text-secondary/80">
                                        {pad(selected + 1)} / {pad(logos.length)}
                                    </span>
                                    <h3 className="text-2xl md:text-4xl font-extrabold text-primary">{active.name}</h3>
                                </div>
                                <button
                                    type="button"
                                    onClick={close}
                                    aria-label="Close"
                                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 text-xl text-primary/80 transition-all hover:border-secondary hover:bg-secondary hover:text-black"
                                >
                                    <i className="ri-close-line" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {[
                                    { src: active.color, label: "COLOUR" },
                                    { src: active.bw, label: "BLACK & WHITE" },
                                ].map((v) => (
                                    <figure key={v.label} className="overflow-hidden rounded-xl border border-white/15">
                                        <img
                                            src={v.src}
                                            alt={`${active.name} ${v.label.toLowerCase()} logo`}
                                            className="aspect-square max-h-[38vh] w-full object-cover sm:max-h-none"
                                        />
                                        <figcaption className="bg-black/60 px-3 py-2 text-[12px] font-bold tracking-widest text-white/70">
                                            {v.label}
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>

                            {logos.length > 1 && (
                                <div className="mt-4 flex items-center justify-between">
                                    <button
                                        type="button"
                                        onClick={prev}
                                        className="flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[14px] font-medium text-primary/80 transition-colors hover:border-secondary hover:text-secondary"
                                    >
                                        <i className="ri-arrow-left-line" /> Prev
                                    </button>
                                    <button
                                        type="button"
                                        onClick={next}
                                        className="flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[14px] font-medium text-primary/80 transition-colors hover:border-secondary hover:text-secondary"
                                    >
                                        Next <i className="ri-arrow-right-line" />
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Logos;