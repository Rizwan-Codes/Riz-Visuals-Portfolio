import { Link } from "react-router-dom";
import { motion } from "motion/react";

// ====== EDIT CONTENT HERE ======
const stats = [
    { value: "20+", label: "Client Orders" },
    { value: "5", label: "Design Categories" },
    { value: "2025", label: "Riz Visuals Est." },
];

const services = [
    { icon: "ri-pen-nib-line", title: "Logo Design", text: "Custom marks and monograms built to work across digital and print." },
    { icon: "ri-vip-diamond-line", title: "Branding", text: "Logo systems, colors and mockups that give a brand one consistent look." },
    { icon: "ri-instagram-line", title: "Social Posts", text: "Feed graphics and promo banners made to stop the scroll." },
    { icon: "ri-youtube-line", title: "Thumbnails", text: "High-contrast thumbnails designed to earn the click." },
    { icon: "ri-image-line", title: "Posters", text: "Bold poster layouts for events, promotions and campaigns." },
];

const tools = [
    { icon: "ri-shapes-line", name: "Adobe Illustrator", use: "Logos, vectors & posters" },
    { icon: "ri-image-edit-line", name: "Adobe Photoshop", use: "Photo editing, thumbnails & social posts" },
    { icon: "ri-pencil-ruler-2-line", name: "Figma", use: "UI/UX & layouts" },
];

const steps = [
    { no: "01", title: "Brief", text: "We talk through your brand, audience and what the design needs to achieve." },
    { no: "02", title: "Concept", text: "I sketch directions and share the strongest ideas with you." },
    { no: "03", title: "Design", text: "The chosen concept is refined into a clean, polished final design." },
    { no: "04", title: "Delivery", text: "You receive all files in the formats you need, with revisions included." },
];
// ===============================

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: "easeInOut" },
};

function SectionTitle({ first, second, sub }) {
    return (
        <motion.div {...fadeUp} className="font-karla text-center md:text-start">
            <h2 className="text-4xl md:text-6xl font-extrabold text-secondary">
                {first} <span className="text-primary">{second}</span>
            </h2>
            {sub && (
                <p className="mt-4 text-[14px] md:text-[18px] text-primary/80 font-medium md:max-w-[70%] px-4 md:px-0">
                    {sub}
                </p>
            )}
        </motion.div>
    );
}

function About() {
    return (
        <div className="font-karla">
            {/* ---------- Intro (story-focused, differs from Hero) ---------- */}
            <section className="max-w-7xl mx-auto px-4 pt-10 md:pt-20">
                <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
                    {/* Framed photo card (left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
                        className="w-full max-w-sm md:w-[38%] md:max-w-none"
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-secondary bg-linear-to-b from-secondary/25 via-black/40 to-black">
                            <img
                                src="/images/Dp.png"
                                alt="Rizwan Ali"
                                className="aspect-4/5 w-full object-cover object-top"
                            />
                            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/70 px-4 py-3 backdrop-blur-sm">
                                <span className="text-[14px] font-bold tracking-widest text-white">RIZWAN ALI</span>
                                <span className="flex items-center gap-2 text-[13px] font-medium text-primary/70">
                                    <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
                                    Open to Work
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Story (right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
                        className="text-center md:w-[62%] md:text-start"
                    >
                        <span className="text-[12px] md:text-[16px] font-bold tracking-widest text-white/70">
                            MY STORY
                        </span>
                        <h1 className="mt-2 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] text-primary">
                            THE DESIGNER BEHIND <span className="text-secondary">RIZ VISUALS</span>
                        </h1>

                        {/* TODO: yahan apni personal story likho (kab/kyun design shuru kia, kin clients ke saath kaam kia) */}
                        <p className="mt-6 text-[14px] md:text-xl text-primary/70">
                            Riz Visuals is my freelance design studio, where I work with clients on
                            logos, branding, posters, social posts and thumbnails.
                        </p>
                        <p className="mt-4 text-[14px] md:text-xl text-primary/70">
                            Every project starts with questions: who is the audience, what should
                            people feel, and where will the design be used. The answers decide the
                            layout, colours and type, so the result fits the brand instead of
                            following a trend.
                        </p>
                        <p className="mt-4 text-[14px] md:text-xl text-primary/70">
                            I also hold a BSCS degree and build websites with React, so I think about
                            how a design behaves on a real screen, not only in a mockup.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                            {["Punjab, Pakistan", "Freelance Designer", "Web Developer"].map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-[13px] font-medium text-primary/80"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ---------- Stats ---------- */}
            <section className="max-w-7xl mx-auto px-4 mt-20">
                <motion.div
                    {...fadeUp}
                    className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-secondary/60 bg-black/40 py-6 md:py-10"
                >
                    {stats.map((s) => (
                        <div key={s.label} className="flex flex-col items-center gap-1 px-2 text-center">
                            <span className="text-3xl md:text-6xl font-extrabold text-secondary">{s.value}</span>
                            <span className="text-[11px] md:text-lg font-medium tracking-wide text-primary/70">{s.label}</span>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* ---------- What I Do ---------- */}
            <section className="max-w-7xl mx-auto px-4 mt-24">
                <SectionTitle
                    first="WHAT I"
                    second="DO"
                    sub="Five areas of design, each one built around making your brand easier to recognise and remember."
                />
                <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeInOut" }}
                            className="group rounded-2xl border border-white/15 bg-black/30 p-6 transition-colors hover:border-secondary"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-secondary text-2xl text-secondary transition-all group-hover:bg-secondary group-hover:text-black">
                                <i className={s.icon} />
                            </div>
                            <h3 className="mt-5 text-2xl font-bold text-primary">{s.title}</h3>
                            <p className="mt-2 text-[15px] font-medium text-primary/70">{s.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ---------- Process ---------- */}
            <section className="max-w-7xl mx-auto px-4 mt-24">
                <SectionTitle
                    first="HOW I"
                    second="WORK"
                    sub="A simple four-step process so you always know what's happening and what comes next."
                />
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.no}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeInOut" }}
                            className="text-center md:text-start"
                        >
                            <span className="text-6xl font-extrabold text-secondary/80">{s.no}</span>
                            <div className="mt-2 h-px w-full bg-primary/20" />
                            <h3 className="mt-4 text-2xl font-bold text-primary">{s.title}</h3>
                            <p className="mt-2 text-[15px] font-medium text-primary/70">{s.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ---------- Tools + Background ---------- */}
            <section className="max-w-7xl mx-auto px-4 mt-24">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div>
                        <SectionTitle first="MY" second="TOOLS" />
                        <div className="mt-8 flex flex-col gap-4">
                            {tools.map((t) => (
                                <motion.div
                                    key={t.name}
                                    {...fadeUp}
                                    className="flex items-center gap-4 rounded-2xl border border-white/15 bg-black/30 p-4 transition-colors hover:border-secondary"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-secondary text-2xl text-secondary">
                                        <i className={t.icon} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary">{t.name}</h3>
                                        <p className="text-[14px] font-medium text-primary/70">{t.use}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <SectionTitle first="MY" second="BACKGROUND" />
                        <motion.div
                            {...fadeUp}
                            className="mt-8 rounded-2xl border border-white/15 bg-black/30 p-6"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-secondary text-2xl text-secondary">
                                    <i className="ri-graduation-cap-line" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary">BS Computer Science</h3>
                                    <p className="text-[14px] font-medium text-secondary/80">
                                        Government College University Faisalabad
                                    </p>
                                </div>
                            </div>
                            <p className="mt-4 text-[15px] font-medium text-primary/70">
                                Alongside design, I build responsive websites with React and
                                Tailwind CSS, including this portfolio.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ---------- Closing line ---------- */}
            <section className="max-w-7xl mx-auto px-4 mt-24">
                <motion.div
                    {...fadeUp}
                    className="flex flex-col items-center gap-4 border-y border-white/10 py-14 text-center"
                >
                    <span className="font-serif italic text-3xl md:text-5xl text-secondary">
                        Good design is clear, bold and made with purpose.
                    </span>
                    <Link
                        to="/Contact"
                        className="text-xl font-medium text-white hover:text-secondary transition-colors"
                    >
                        Tell me about your project <i className="ri-arrow-right-line" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}

export default About;