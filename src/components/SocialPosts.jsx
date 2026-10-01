// import { Link } from "react-router-dom";
// import { motion } from "motion/react";

// function SocialPosts() {

//     return (
//         <div className="md:max-w-7xl md:m-auto pb-15">
//             <div className="flex flex-col gap-8 items-center md:flex md:flex-row md:items-center md:justify-between md:gap-4 mt-25">
//                 <motion.div
//                     initial={{ opacity: 0, x: -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true, amount: 0.2 }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}
//                     className="text-white font-karla md:w-[55%] text-center md:text-start">
//                     <span className="text-7xl text-secondary block md:text-9xl font-extrabold">SOCIAL</span>
//                     <span className="text-7xl text-primary block md:text-9xl font-extrabold">POSTS</span>
//                     <span className="text-[16px] mt-2 px-3 md:px-2 text-primary/70 block md:text-xl">From minimalist monograms to full brand symbols, I create custom logo designs built to leave a lasting impression across all digital and print mediums.</span>
//                 </motion.div>
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true, amount: 0.2 }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}
//                     className="flex flex-col gap-4 items-center px-10 md:p-0 md:flex md:flex-row md:items-center md:justify-center md:gap-4 md:max-w-175">

//                     <Link
//                         to="/projects/venguard-apex"
//                         className="relative group block h-full overflow-hidden cursor-pointer"
//                     >
//                         <img
//                             className="object-contain object-center transition-all duration-500 ease-in-out transform md:grayscale group-hover:scale-105 md:group-hover:grayscale-1"
//                             src="./src/assets/Posts/post 1.png"
//                             alt="post 1"
//                         />

//                     </Link>


//                     <Link
//                         to="/projects/venguard-apex"
//                         className="relative group block  h-full overflow-hidden cursor-pointer"
//                     >
//                         <img
//                             className="object-contain object-center transition-all duration-500 ease-in-out transform md:grayscale group-hover:scale-105 md:group-hover:grayscale-1"
//                             src="./src/assets/Posts/post 5.png"
//                             alt="post 5"
//                         />

//                     </Link>


//                     <Link
//                         to="/projects/venguard-apex"
//                         className="relative group block  overflow-hidden cursor-pointer"
//                     >
//                         <img
//                             className="object-contain object-center transition-all duration-500 ease-in-out transform md:grayscale group-hover:scale-105 md:group-hover:grayscale-1"
//                             src="./src/assets/Posts/post 3.png"
//                             alt="post 4"
//                         />

//                     </Link>
//                 </motion.div>
//             </div>
//             <motion.div
//                 initial={{ opacity: 0, y: -5 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 className="text-center mt-10 text-2xl md:text-xl md:text-end md:mt-3 md:mr-2">
//                 <Link
//                     to="/Logos"
//                     className="font-karla text-white font-medium m-auto group"
//                 >
//                     <span className="group-hover:text-secondary">See More</span>

//                 </Link>
//             </motion.div>

//         </div>
//     )
// }

// export default SocialPosts;

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
                    <img className="w-fit h-fit object-contain transition-all duration-500 ease-in-out transform  group-hover:scale-105" src="./src/assets/Posts/post 1.png" alt="" />
                </div>
                <div className="group overflow-hidden border border-secondary rounded-2xl">
                    <img className="w-fit h-fit object-contain transition-all duration-500 ease-in-out transform  group-hover:scale-105" src="./src/assets/Posts/post 2.png" alt="" />
                </div>
                <div className="group overflow-hidden border border-secondary rounded-2xl">
                    <img className="w-fit h-fit object-contain transition-all duration-500 ease-in-out transform  group-hover:scale-105" src="./src/assets/Posts/post 4.png" alt="" />
                </div>
                <div className="group overflow-hidden border border-secondary rounded-2xl">
                    <img className="w-fit h-fit object-contain transition-all duration-500 ease-in-out transform  group-hover:scale-105" src="./src/assets/Posts/post 3.png" alt="" />
                </div>
                <div className="group overflow-hidden border border-secondary rounded-2xl">
                    <img className="w-fit h-fit object-contain transition-all duration-500 ease-in-out transform  group-hover:scale-105" src="./src/assets/Posts/post 5.png" alt="" />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center mt-10 text-2xl md:text-xl md:text-end md:mt-3 md:mr-2">
                <Link
                    to="/Logos"
                    className="font-karla text-white font-medium m-auto group"
                >
                    <span className="group-hover:text-secondary">See More</span>

                </Link>
            </motion.div>
        </div>
    )
}

export default SocialPosts;




// w-[224.088px] h-[322.687px]
// w-[224.088px] h-[322.687px]
// w-[224.088px] h-[322.687px]
// w-[224.088px] h-[322.687px]
// w-[224.088px] h-[322.687px]