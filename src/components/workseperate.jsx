
import { motion } from "motion/react";

function Seperator() {
    return (
        <div className="md:max-w-7xl md:m-auto">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 40
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut"
                }}
                className="text-center flex flex-col items-center gap-3 p-10 pt-25"
            >
                <span className="text-secondary font-karla font-bold text-6xl">MY WORK</span>
                <span className="text-primary/65 font-karla font-normal text-xl">Explore a selection of designs created to make brands stand out.</span>
                <div className="h-[0.1px] w-full bg-primary/50 mt-17"></div>
            </motion.div>
        </div>
    )
}

export default Seperator;