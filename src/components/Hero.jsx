
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

export default function Hero() {
    // Container variant for staggering children animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    // Item variant for individual text elements
    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
        },
    };

    return (
        <div className="max-w-7xl m-auto px-4 md:p-0">
            <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:items-center md:gap-3 md:px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-8 md:mt-20 lg:mt-0 z-0 relative md:flex md:flex-col md:gap-2"
                >
                    <motion.span
                        variants={itemVariants}
                        className="font-karla tracking-widest font-bold text-white/70 block text-center text-[12px] md:text-[16px] md:text-start"
                    >
                        RIZ VISUALS - EST. 2026
                    </motion.span>

                    <motion.span
                        variants={itemVariants}
                        className="text-6xl text-center sm:text-8xl md:text-10xl lg:text-9xl md:text-start font-karla font-bold mt-2 block md:-ml-2.5 text-primary"
                    >
                        RIZWAN ALI
                    </motion.span>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center md:flex-row md:items-center md:gap-4 md:w-[90%]"
                    >
                        <span className="whitespace-nowrap text-4xl font-normal font-serif text-secondary">
                            <i>Graphic Designer</i>
                        </span>
                        <div className="mt-3 h-px w-20 bg-primary/50 md:mt-5 md:flex-1 md:w-auto"></div>
                        <span className="text-[12px] text-center whitespace-nowrap font-karla font-medium mt-3 md:text-[14px] text-secondary/70">
                            BRAND IDENTITY . POSTER DESIGN . THUMBNAIL DESIGN
                        </span>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-4 px-2 text-center md:text-start md:p-0"
                    >
                        <span className="text-[14px] md:text-xl font-karla text-primary/70 block">
                            I create bold visuals with purpose, helping brands build a distinct identity.
                            From logos and brand systems to social media graphics, posters and thumbnails,
                            I turn ideas into visuals that make brands stand out.
                        </span>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center gap-4 px-3 md:px-0 md:flex-row md:items-center md:gap-5 mt-4"
                    >
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full md:w-auto"
                        >
                            <a
                                href="#work-section"
                                className="block w-full md:w-auto px-5 py-3 border border-secondary text-black bg-secondary rounded-full text-center font-karla font-bold transition-all"
                            >
                                View My Work
                            </a>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full md:w-auto"
                        >
                            <NavLink
                                to="/Contact"
                                className="block w-full md:w-auto px-4 py-3 border-2 border-secondary text-secondary rounded-full text-center font-karla font-bold hover:bg-secondary hover:text-black transition-colors"
                            >
                                Let's Work Together
                            </NavLink>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/*image section*/}
                <div className="relative flex items-end justify-center z-10">
                    {/*Background Glow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-110 md:h-110 bg-secondary/40 rounded-full blur-[100px] pointer-events-none -z-10"
                    />

                    {/* Profile Image  */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                        src="/images/Dp.png"
                        alt="Rizwan Ali"
                        className="relative z-10 flex max-h-auto w-75 md:max-h-auto md:w-325 object-contain md:object-contain ml-5"
                    />
                </div>

            </div>
        </div>
    );
}