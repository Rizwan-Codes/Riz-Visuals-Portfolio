
import { useState, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export const brands = [
    {
        id: "orbita", 
        name: "ORBITA",
       
        summary:
            "Orbita revolutionizes modern logistics through lightning-fast autonomous drone deliveries, bridging distances instantly with secure, cutting-edge aerial technology for seamless supply chains.",
        deliverables: [
            "Primary logo",
            "Horizontal logo",
            "Colour palette",
            "App icon",
            "Business card",
            "Hang tag",
            "Packaging",
            "Environment mockups",
        ],
        // weight = how much width a logo gets on desktop (default 1)
        logos: [
            { src: "/images/Brandings/MAIN-LOGO.jpg", label: "Primary Logo", weight: 2 },
            { src: "/images/Brandings/horizontal-design.jpg", label: "Horizontal Logo", weight: 3 },
        ],
        palette: [
            { name: "Deep Navy", hex: "#00153F" },
            { name: "Electric Blue", hex: "#1560FF" },
            { name: "White", hex: "#FFFFFF" },
        ],
        applications: [
            { src: "/images/Brandings/Card.png", label: "Business Card" },
            { src: "/images/Brandings/mobile-app.png", label: "Mobile App Icon" },
            { src: "/images/Brandings/Shoping-Label.png", label: "Hang Tag" },
            { src: "/images/Brandings/delivery-box.png", label: "Delivery Packaging" },
            { src: "/images/Brandings/drone-delivery.png", label: "Delivery Drone" },
            { src: "/images/Brandings/offive-wall.png", label: "Office Wall" },
        ],
    },

    {
        id: "kavaro", 
        name: "KAVARO",
        // TODO: apni 2-3 lines likho: brief kya tha, brand kis ke liye hai, concept/idea kya thi
        summary:
            "Kavaro Roasters is coffee brand, it delivers exceptional, freshly roasted coffee beans crafted to elevate your daily ritual with rich aromas, bold flavors, and unmatched artisanal quality",
        deliverables: [
            "Primary logo",
            "Horizontal logo",
            "Colour palette",
            "Business Card",
            "Takeaway Cup",
            "Shipping Box",
            "StoreFront Signage",
            "Cheff Aprun",
        ],
        // weight = how much width a logo gets on desktop (default 1)
        logos: [
            { src: "/images/Brandings/vertical-kavaro.jpg", label: "Primary Logo", weight: 2 },
            { src: "/images/Brandings/horizontal-kavaro.jpg", label: "Horizontal Logo", weight: 3 },
        ],
        palette: [
            { name: "Dark Gold", hex: "#AD885C" },
            { name: "White", hex: "#ffffff" },
            { name: "black", hex: "#000000" },
        ],
        applications: [
            { src: "/images/Brandings/kavaro-coffee-bags.png", label: "Coffee Bags" },
            { src: "/images/Brandings/kavaro-business.png", label: "Business Card" },
            { src: "/images/Brandings/kavaro-cup.png", label: "Takeaway Cup" },
            { src: "/images/Brandings/kavaro-box.png", label: "Shipping Box" },
            { src: "/images/Brandings/Kavaro-shop.png", label: "Shop Storefront Signage" },
            { src: "/images/Brandings/kavaro-aprun.png", label: "cheff Aprun" },
        ],
    },

];



const otherWork = [
    { label: "Logo Design", to: "/Logos", icon: "ri-pen-nib-line" },
    { label: "Posters", to: "/Posters", icon: "ri-image-line" },
    { label: "Thumbnails", to: "/Thumbnails", icon: "ri-youtube-line" },
    { label: "Social Posts", to: "/Posts", icon: "ri-instagram-line" },
];

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.5, ease: "easeInOut" },
};

const pad = (n) => String(n).padStart(2, "0");

// Picks black or white text so any brand colour stays readable
function readableText(hex) {
    const h = hex.replace("#", "");
    const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
    const r = parseInt(full.slice(0, 2), 16);
    const g = parseInt(full.slice(2, 4), 16);
    const b = parseInt(full.slice(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? "#0b0b0b" : "#ffffff";
}

function SectionTitle({ no, first, second }) {
    return (
        <motion.div {...fadeUp} className="text-center md:text-start">
            <span className="text-[13px] font-bold tracking-widest text-secondary/80">{no}</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-secondary">
                {first} <span className="text-primary">{second}</span>
            </h2>
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/* One brand's full case study. Rendered with key={brand.id}, so its   */
/* lightbox / copy state resets automatically when the brand changes.  */
/* ------------------------------------------------------------------ */
function CaseStudy({ brand }) {
    const apps = brand.applications ?? [];
    const logos = brand.logos ?? [];
    const palette = brand.palette ?? [];

    const [selected, setSelected] = useState(null);
    const [copied, setCopied] = useState(null);

    const close = useCallback(() => setSelected(null), []);
    const prev = useCallback(
        () => setSelected((i) => (i === null ? i : (i - 1 + apps.length) % apps.length)),
        [apps.length]
    );
    const next = useCallback(
        () => setSelected((i) => (i === null ? i : (i + 1) % apps.length)),
        [apps.length]
    );

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

    const copyHex = async (hex) => {
        try {
            await navigator.clipboard.writeText(hex);
            setCopied(hex);
            setTimeout(() => setCopied(null), 1500);
        } catch {
            /* clipboard unavailable, ignore */
        }
    };

    // Only sections that have data are shown, numbered in order (01, 02, 03...)
    const sections = [
        logos.length > 0 && "logos",
        palette.length > 0 && "palette",
        apps.length > 0 && "apps",
    ].filter(Boolean);
    const no = (key) => pad(sections.indexOf(key) + 1);

    return (
        <>
            {/* ---------- Case study intro ---------- */}
            <section className="max-w-7xl mx-auto px-4 mt-14">
                <motion.div
                    {...fadeUp}
                    className="rounded-2xl border border-secondary/60 bg-black/40 p-6 md:p-10"
                >
                    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                        <div className="text-center md:text-start md:w-[55%]">
                            <span className="text-[12px] md:text-[14px] font-bold tracking-widest text-white/70">
                                BRAND IDENTITY PROJECT
                            </span>
                            <h2 className="mt-2 text-6xl md:text-8xl font-extrabold leading-none text-primary wrap-break-word">
                                {brand.name}
                            </h2>
                            {brand.summary && (
                                <p className="mt-5 text-[14px] md:text-xl text-primary/70">{brand.summary}</p>
                            )}
                        </div>

                        {brand.deliverables?.length > 0 && (
                            <div className="md:w-[40%]">
                                <span className="block text-center text-[13px] font-bold tracking-widest text-secondary md:text-start">
                                    WHAT'S INCLUDED
                                </span>
                                <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                                    {brand.deliverables.map((d) => (
                                        <span
                                            key={d}
                                            className="rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[13px] font-medium text-primary/80"
                                        >
                                            {d}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </section>

            {/* ---------- Logo ---------- */}
            {logos.length > 0 && (
                <section className="max-w-7xl mx-auto px-4 mt-24">
                    <SectionTitle no={no("logos")} first="LOGO" second="SYSTEM" />
                    <div className="mt-8 flex flex-col gap-5 md:flex-row">
                        {logos.map((l, i) => (
                            <motion.figure
                                key={l.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeInOut" }}
                                style={{ flexGrow: l.weight ?? 1, flexBasis: 0 }}
                                className="min-w-0 overflow-hidden rounded-2xl border border-secondary"
                            >
                                <div className="flex h-64 items-center justify-center md:h-80" style={{ backgroundColor: brand.palette[2].hex }}>
                                    <img
                                        src={l.src}
                                        alt={`${brand.name} ${l.label.toLowerCase()}`}
                                        className="max-h-full max-w-full  object-cover"
                                    />
                                </div>
                                <figcaption className="bg-black/60 px-4 py-2 text-[12px] font-bold tracking-widest text-white/70">
                                    {l.label.toUpperCase()}
                                </figcaption>
                            </motion.figure>
                        ))}
                    </div>
                </section>
            )}

            {/* ---------- Colour ---------- */}
            {palette.length > 0 && (
                <section className="max-w-7xl mx-auto px-4 mt-24">
                    <SectionTitle no={no("palette")} first="COLOUR" second="PALETTE" />
                    <div
                        className="mt-8 grid gap-5"
                        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
                    >
                        {palette.map((c, i) => (
                            <motion.button
                                key={c.hex}
                                type="button"
                                onClick={() => copyHex(c.hex)}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.5, delay: (i % 4) * 0.1, ease: "easeInOut" }}
                                whileTap={{ scale: 0.98 }}
                                aria-label={`Copy ${c.name} colour code ${c.hex}`}
                                style={{ backgroundColor: c.hex, color: readableText(c.hex) }}
                                className="flex h-40 cursor-pointer flex-col justify-between rounded-2xl border border-secondary p-5 text-start md:h-52"
                            >
                                <span className="text-[13px] font-bold tracking-widest opacity-80">
                                    {c.name.toUpperCase()}
                                </span>
                                <div className="flex items-end justify-between gap-2">
                                    <span className="text-3xl font-extrabold md:text-4xl">{c.hex.toUpperCase()}</span>
                                    <span className="flex shrink-0 items-center gap-1 text-[13px] font-medium opacity-80">
                                        {copied === c.hex ? (
                                            <>
                                                <i className="ri-check-line" /> Copied
                                            </>
                                        ) : (
                                            <>
                                                <i className="ri-file-copy-line" /> Copy
                                            </>
                                        )}
                                    </span>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </section>
            )}

            {/* ---------- Applications ---------- */}
            {apps.length > 0 && (
                <section className="max-w-7xl mx-auto px-4 mt-24">
                    <SectionTitle no={no("apps")} first="BRAND" second="IN USE" />
                    <div className="mt-8 columns-1 gap-5 md:columns-2">
                        {apps.map((a, i) => (
                            <motion.div
                                key={a.src}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="mb-5 break-inside-avoid"
                            >
                                <button
                                    type="button"
                                    onClick={() => setSelected(i)}
                                    aria-label={`View ${a.label}`}
                                    className="group relative block w-full cursor-pointer overflow-hidden rounded-2xl border border-secondary"
                                >
                                    <img
                                        src={a.src}
                                        alt={`${brand.name} ${a.label.toLowerCase()} mockup`}
                                        loading="lazy"
                                        className="h-auto w-full transition-all duration-500 ease-in-out group-hover:scale-105"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <span className="absolute bottom-3 left-4 text-[13px] font-bold tracking-widest text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        {a.label.toUpperCase()}
                                    </span>
                                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-secondary bg-black/70 text-lg text-secondary opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                                        <i className="ri-expand-diagonal-line" />
                                    </span>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* ---------- Lightbox ---------- */}
            <AnimatePresence>
                {selected !== null && apps[selected] && (
                    <motion.div
                        key="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={close}
                        role="dialog"
                        aria-modal="true"
                        aria-label={apps[selected].label}
                        className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative flex max-h-full w-full max-w-5xl flex-col items-center gap-4"
                        >
                            <div className="flex w-full items-center justify-between">
                                <div>
                                    <span className="block text-[12px] font-bold tracking-widest text-secondary">
                                        {pad(selected + 1)} / {pad(apps.length)}
                                    </span>
                                    <span className="text-xl font-extrabold text-primary md:text-3xl">
                                        {apps[selected].label}
                                    </span>
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

                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={selected}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                    src={apps[selected].src}
                                    alt={`${brand.name} ${apps[selected].label.toLowerCase()} mockup`}
                                    className="max-h-[70vh] w-auto max-w-full rounded-2xl border border-secondary object-contain"
                                />
                            </AnimatePresence>

                            {apps.length > 1 && (
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
        </>
    );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
function BrandingPage() {
    const [params, setParams] = useSearchParams();
    const brand = brands.find((b) => b.id === params.get("brand")) ?? brands[0];
    const hasMany = brands.length > 1;

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
                        <i className="ri-arrow-left-line" /> BACK TO WORK
                    </Link>

                    <h1 className="mt-4 text-5xl md:text-8xl font-extrabold text-secondary leading-none">
                        BRANDING <span className="text-primary">DESIGN</span>
                    </h1>
                    <p className="mt-4 text-[14px] md:text-[18px] px-4 md:px-0 text-primary/80 font-medium md:w-[70%]">
                        From the logo to the packaging, I build brand identities that look consistent
                        everywhere they appear: on a business card, a product box or a phone screen.
                    </p>

                    {/* Brand switcher: only appears once there is more than one brand */}
                    {hasMany && (
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                            <span className="text-[13px] font-bold tracking-widest text-white/70">PROJECTS</span>
                            {brands.map((b) => {
                                const active = b.id === brand.id;
                                return (
                                    <button
                                        key={b.id}
                                        type="button"
                                        onClick={() => setParams({ brand: b.id }, { replace: true })}
                                        aria-pressed={active}
                                        className={`cursor-pointer rounded-full border px-5 py-2 text-[14px] font-bold transition-all ${active
                                                ? "border-secondary bg-secondary text-black"
                                                : "border-white/20 bg-black/40 text-primary/80 hover:border-secondary hover:text-secondary"
                                            }`}
                                    >
                                        {b.name}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </motion.div>
            </section>

            {/* ---------- Selected brand ---------- */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={brand.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <CaseStudy brand={brand} />
                </motion.div>
            </AnimatePresence>

            {/* ---------- Explore other work ---------- */}
            <section className="max-w-7xl mx-auto px-4 mt-20">
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
        </div>
    );
}

export default BrandingPage;