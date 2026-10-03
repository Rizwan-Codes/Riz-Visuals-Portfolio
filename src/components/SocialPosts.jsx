
import { Link } from "react-router-dom";
import { motion } from "motion/react";


function SocialPosts() {

    return (
        <div className="md:max-w-7xl md:m-auto px-4 py-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="font-karla text-center md:text-start">
                <h1 className="text-5xl md:text-8xl font-extrabold text-secondary p-0">SOCIAL MEDIA <span className="text-primary">POSTS</span></h1>
                <p className="text-[14px] mt-4 md:text-[18px] px-4 md:p-0 text-primary/80 font-medium md:w-[80%]">From eye-catching feed graphics to high-converting promotional banners, I design custom social media posts that capture attention, engage your audience, and elevate your brand presence across every platform</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                // className="flex flex-col items-center justify-center gap-4 md:flex md:flex-row md:items-center md:justify-center md:gap-[51.296px] mt-15">
                className="w-full grid grid-cols-2 gap-7 md:grid-cols-5 mt-15 px-4 md:p-0">

                <div className="group overflow-hidden border border-secondary rounded-2xl">
                    <img className="w-fit h-fit object-contain transition-all duration-500 ease-in-out transform  group-hover:scale-105" src="/images/Posts/post-1.png" alt="" />
                </div>
                <div className="group overflow-hidden border border-secondary rounded-2xl">
                    <img className="w-fit h-fit object-contain transition-all duration-500 ease-in-out transform  group-hover:scale-105" src="/images/Posts/post-2.png" alt="" />
                </div>
                <div className="group overflow-hidden border border-secondary rounded-2xl">
                    <img className="w-fit h-fit object-contain transition-all duration-500 ease-in-out transform  group-hover:scale-105" src="/images/Posts/post-3.png" alt="" />
                </div>
                <div className="group overflow-hidden border border-secondary rounded-2xl">
                    <img className="w-fit h-fit object-contain transition-all duration-500 ease-in-out transform  group-hover:scale-105" src="/images/Posts/post-4.png" alt="" />
                </div>
                <div className="group overflow-hidden border border-secondary rounded-2xl">
                    <img className="w-fit h-fit object-contain transition-all duration-500 ease-in-out transform  group-hover:scale-105" src="/images/Posts/post-5.png" alt="" />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center mt-10 text-2xl md:text-xl md:text-end md:mt-3 md:mr-2">
                <Link
                    to="/Posts"
                    className="font-karla text-white font-medium m-auto group"
                >
                    <span className="group-hover:text-secondary">See More</span>

                </Link>
            </motion.div>
        </div>
    )
}

export default SocialPosts;




