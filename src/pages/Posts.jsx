import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";


const posts = [
    "/images/Posts/post-1.png",
    "/images/Posts/post-2.png",
    "/images/Posts/post-3.png",
    "/images/Posts/post-4.png",
    "/images/Posts/post-5.png",
    "/images/Posts/post-6.png",
];


const otherWork = [
    { label: "Logo Design", to: "/Logos", icon: "ri-pen-nib-line" },
    { label: "Branding", to: "/Brandings", icon: "ri-vip-diamond-line" },
    { label: "Posters", to: "/Poster", icon: "ri-image-line" },
    { label: "Thumbnails", to: "/Thumbnails", icon: "ri-youtube-line" },
];


const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: "easeInOut" },
};

const pad = (n) => String(n).padStart(2, "0");

function Posts() {
    const [selected, setSelected] = useState(null); // index of open post, or null

    const close = useCallback(() => setSelected(null), []);
    const prev = useCallback(
        () => setSelected((i) => (i === null ? i : (i - 1 + posts.length) % posts.length)),
        []
    );
    const next = useCallback(
        () => setSelected((i) => (i === null ? i : (i + 1) % posts.length)),
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
                        SOCIAL MEDIA <span className="text-primary">POSTS</span>
                    </h1>
                    <p className="mt-4 text-[14px] md:text-[18px] px-4 md:px-0 text-primary/80 font-medium md:w-[80%]">
                        From eye-catching feed graphics to high-converting promotional banners, I
                        design custom social media posts that capture attention, engage your
                        audience, and elevate your brand presence across every platform.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                        <span className="rounded-full border border-secondary/70 bg-black px-4 py-1.5 text-[13px] font-medium text-white">
                            {pad(posts.length)} Designs
                        </span>
                        <span className="rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-[13px] font-medium text-primary/80">
                            Feed graphics &amp; promo banners
                        </span>
                    </div>
                </motion.div>
            </section>

            {/* ---------- Gallery ---------- */}
            <section className="max-w-7xl mx-auto px-4 mt-14">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                    {posts.map((src, i) => (
                        <motion.div
                            key={src}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeInOut" }}
                        >
                            <button
                                type="button"
                                onClick={() => setSelected(i)}
                                aria-label={`View social media post ${i + 1}`}
                                className="group relative block w-full cursor-pointer overflow-hidden rounded-2xl border border-secondary"
                            >
                                <img
                                    src={src}
                                    alt={`Social media post design ${i + 1}`}
                                    loading="lazy"
                                    className="aspect-2/3 w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <span className="absolute bottom-3 left-3 text-[13px] font-bold tracking-widest text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    {pad(i + 1)}
                                </span>
                                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-secondary bg-black/70 text-lg text-secondary opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                                    <i className="ri-expand-diagonal-line" />
                                </span>
                            </button>
                        </motion.div>
                    ))}
                </div>

                <motion.p {...fadeUp} className="mt-6 text-center text-[13px] font-medium text-primary/50 md:text-start">
                    Click any design to view it full size.
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
                                <i className="ri-arrow-right-up-line text-xl text-primary/50 transition-colors group-hover:text-secondary" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ---------- Lightbox ---------- */}
            <AnimatePresence>
                {selected !== null && (
                    <motion.div
                        key="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={close}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Social media post ${selected + 1}`}
                        className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative flex max-h-full flex-col items-center gap-4"
                        >
                            <div className="flex w-full items-center justify-between">
                                <span className="text-[13px] font-bold tracking-widest text-secondary">
                                    {pad(selected + 1)} / {pad(posts.length)}
                                </span>
                                <button
                                    type="button"
                                    onClick={close}
                                    aria-label="Close"
                                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 text-xl text-primary/80 transition-all hover:border-secondary hover:bg-secondary hover:text-black"
                                >
                                    <i className="ri-close-line" />
                                </button>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={selected}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                    src={posts[selected]}
                                    alt={`Social media post design ${selected + 1}`}
                                    className="max-h-[70vh] w-auto max-w-full rounded-2xl border border-secondary object-contain"
                                />
                            </AnimatePresence>

                            {posts.length > 1 && (
                                <div className="flex w-full items-center justify-between">
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

export default Posts;