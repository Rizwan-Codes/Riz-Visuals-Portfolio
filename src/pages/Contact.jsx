import { useState } from "react";
import { motion } from "motion/react";


const EMAIL = "rizsvisuals@gmail.com"; 
const WHATSAPP = "923284057164"; 
const LOCATION = "Lahore, Punjab, Pakistan";

// Form delivery: paste your Formspree endpoint (https://formspree.io/f/xxxx).
// If left empty, the form falls back to opening the visitor's email app (mailto).
const FORM_ENDPOINT = "https://formspree.io/f/xzeznzlp";

const socials = [
    { label: "GitHub", icon: "ri-github-fill", href: "https://github.com/Rizwan-Codes" },
    { label: "LinkedIn", icon: "ri-linkedin-fill", href: "https://www.linkedin.com/in/rizwan-ali-web-dev/" }, // TODO
    { label: "Instagram", icon: "ri-instagram-line", href: "https://www.instagram.com/riz_visuals/" }, // TODO
    { label: "Behance", icon: "ri-behance-fill", href: "https://www.behance.net/gallery/234767751/Portfolio" }, // TODO
];

const projectTypes = ["Logo Design", "Branding", "Social Posts", "Thumbnails", "Posters", "Something else"];

const tips = [
    "Your brand or channel name",
    "Where the design will be used",
    "Your deadline, if you have one",
    "Any references or styles you like",
];


const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: "easeInOut" },
};

const fieldClass =
    "w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-[15px] font-medium text-primary placeholder:text-primary/40 outline-none transition-colors focus:border-secondary";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", type: projectTypes[0], message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const onSubmit = async (e) => {
        e.preventDefault();
        if (status === "sending") return;

        // Fallback: no endpoint configured -> open email app
        if (!FORM_ENDPOINT) {
            const subject = encodeURIComponent(`${form.type} inquiry from ${form.name}`);
            const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
            window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
            return;
        }

        setStatus("sending");
        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    project_type: form.type,
                    message: form.message,
                }),
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("success");
            setForm({ name: "", email: "", type: projectTypes[0], message: "" });
        } catch {
            setStatus("error");
        }
    };

    const infoCards = [
        { icon: "ri-mail-line", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
        { icon: "ri-whatsapp-line", label: "WhatsApp", value: `+${WHATSAPP}`, href: `https://wa.me/${WHATSAPP}` },
        { icon: "ri-map-pin-line", label: "Based in", value: LOCATION },
    ];

    return (
        <div className="font-karla">
            {/* ---------- Heading ---------- */}
            <section className="max-w-7xl mx-auto px-4 pt-10 md:pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className="flex flex-col items-center text-center"
                >
                    <span className="text-[12px] md:text-[16px] font-bold tracking-widest text-white/70">
                        CONTACT
                    </span>
                    <h1 className="mt-2 text-5xl sm:text-7xl md:text-8xl font-extrabold leading-none text-primary">
                        GET IN <span className="text-secondary">TOUCH</span>
                    </h1>
                    <span className="mt-3 text-3xl md:text-4xl font-serif italic text-secondary">
                        Tell me about your project
                    </span>
                    <p className="mt-6 max-w-2xl text-[14px] md:text-xl text-primary/70">
                        Fill in the form or message me directly. The more detail you share, the
                        easier it is for me to suggest the right direction.
                    </p>
                </motion.div>
            </section>

            {/* ---------- Form + Info ---------- */}
            <section className="max-w-7xl mx-auto px-4 mt-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
                    {/* Form */}
                    <motion.form
                        {...fadeUp}
                        onSubmit={onSubmit}
                        className="rounded-2xl border border-secondary/60 bg-black/40 p-6 md:p-8 lg:col-span-3"
                    >
                        <h2 className="text-3xl font-extrabold text-primary">
                            SEND A <span className="text-secondary">MESSAGE</span>
                        </h2>

                        {/* honeypot for spam bots */}
                        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

                        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                            <label className="flex flex-col gap-2">
                                <span className="text-[13px] font-bold tracking-widest text-white/70">YOUR NAME</span>
                                <input
                                    required
                                    name="name"
                                    value={form.name}
                                    onChange={onChange}
                                    placeholder="Rizwan Ali"
                                    className={fieldClass}
                                />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-[13px] font-bold tracking-widest text-white/70">YOUR EMAIL</span>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={onChange}
                                    placeholder="you@example.com"
                                    className={fieldClass}
                                />
                            </label>
                        </div>

                        <label className="mt-5 flex flex-col gap-2">
                            <span className="text-[13px] font-bold tracking-widest text-white/70">PROJECT TYPE</span>
                            <div className="relative">
                                <select
                                    name="type"
                                    value={form.type}
                                    onChange={onChange}
                                    className={`${fieldClass} cursor-pointer appearance-none pr-10`}
                                >
                                    {projectTypes.map((t) => (
                                        <option key={t} value={t} className="bg-[#1d1c1c]">
                                            {t}
                                        </option>
                                    ))}
                                </select>
                                <i className="ri-arrow-down-s-line pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-secondary" />
                            </div>
                        </label>

                        <label className="mt-5 flex flex-col gap-2">
                            <span className="text-[13px] font-bold tracking-widest text-white/70">YOUR MESSAGE</span>
                            <textarea
                                required
                                name="message"
                                rows={6}
                                value={form.message}
                                onChange={onChange}
                                placeholder="Tell me what you need, who it's for and when you need it."
                                className={`${fieldClass} resize-none`}
                            />
                        </label>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={status === "sending"}
                            className="mt-6 w-full cursor-pointer rounded-full border border-secondary bg-secondary px-6 py-3 text-center font-bold text-black transition-all disabled:cursor-not-allowed disabled:opacity-60 md:w-auto md:px-10"
                        >
                            {status === "sending" ? "Sending..." : "Send Message"} <i className="ri-send-plane-line" />
                        </motion.button>

                        {status === "success" && (
                            <p className="mt-4 text-[15px] font-medium text-green-400" role="status">
                                <i className="ri-checkbox-circle-line" /> Message sent. Thanks for reaching out!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="mt-4 text-[15px] font-medium text-red-400" role="alert">
                                <i className="ri-error-warning-line" /> Something went wrong. Please try again or email me directly.
                            </p>
                        )}
                    </motion.form>

                    {/* Info */}
                    <div className="flex flex-col gap-5 lg:col-span-2">
                        {infoCards.map((c, i) => {
                            const Tag = c.href ? "a" : "div";
                            return (
                                <motion.div
                                    key={c.label}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: i * 0.08, ease: "easeInOut" }}
                                >
                                    <Tag
                                        {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
                                        className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-black/30 p-4 transition-colors hover:border-secondary"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-secondary text-2xl text-secondary transition-all group-hover:bg-secondary group-hover:text-black">
                                            <i className={c.icon} />
                                        </div>
                                        <div className="min-w-0">
                                            <span className="block text-[12px] font-bold tracking-widest text-white/70">
                                                {c.label.toUpperCase()}
                                            </span>
                                            <span className="block break-all text-[16px] font-bold text-primary">{c.value}</span>
                                        </div>
                                    </Tag>
                                </motion.div>
                            );
                        })}

                        {/* Tips */}
                        <motion.div {...fadeUp} className="rounded-2xl border border-white/15 bg-black/30 p-5">
                            <h3 className="text-[13px] font-bold tracking-widest text-secondary">HELPFUL TO INCLUDE</h3>
                            <ul className="mt-3 flex flex-col gap-2">
                                {tips.map((t) => (
                                    <li key={t} className="flex items-start gap-2 text-[15px] font-medium text-primary/70">
                                        <i className="ri-check-line mt-0.5 text-secondary" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Socials */}
                        <motion.div {...fadeUp} className="flex items-center gap-3">
                            <span className="text-[13px] font-bold tracking-widest text-white/70">FIND ME ON</span>
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xl text-primary/70 transition-all hover:border-secondary hover:bg-secondary hover:text-black"
                                >
                                    <i className={s.icon} />
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;