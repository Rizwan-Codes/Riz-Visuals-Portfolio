
import { Link } from "react-router-dom";
import { motion } from "motion/react";


function Brands() {

    return (
        <div className="md:max-w-7xl md:m-auto px-4 py-10">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="font-karla text-center md:text-start">
                <h1 className="text-5xl md:text-8xl font-extrabold text-secondary p-0">BRANDING <span className="text-primary">DESIGN</span></h1>
                <p className="text-[14px] mt-4 md:text-[18px] px-4 md:p-0 text-primary/80 font-medium md:w-[70%]">From high-click-through-rate YouTube covers to engaging video thumbnails, I design custom visuals built to grab attention, drive clicks, and make your content stand out in a crowded feed.</p>
            </motion.div>

            <motion.div

                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}

                className="w-full max-w-350 mx-auto py-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-5 lg:gap-7">

                    {/* ROW 1  */}

                    {/* Main Logo */}
                    <div className="sm:col-span-1 lg:col-span-2 h-65 sm:h-55 overflow-hidden border border-secondary">
                        <img
                            src="/images/Brandings/MAIN-LOGO.jpg"
                            alt="Main Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>


                    {/* Horizontal Logo */}
                    <div className="sm:col-span-2 lg:col-span-4 h-55 overflow-hidden border border-secondary">
                        <img
                            src="/images/Brandings/horizontal-design.jpg"
                            alt="Horizontal Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>


                    {/* Colors */}
                    <div className="sm:col-span-1 lg:col-span-1 flex flex-col gap-5 lg:gap-7 ">

                        <div className="h-25 sm:h-23.75 overflow-hidden border border-secondary bg-[#00153F]">

                        </div>

                        <div className="h-25 sm:h-23.75 overflow-hidden border border-secondary bg-[#1560FF]">

                        </div>

                    </div>


                    {/* Mobile App Icon */}
                    <div className="sm:col-span-1 lg:col-span-3 h-55 overflow-hidden border border-secondary">
                        <img
                            src="/images/Brandings/mobile-app.png"
                            alt="Mobile App Icon"
                            className="w-full h-full object-cover"
                        />
                    </div>


                    {/*  ROW 2 */}

                    {/* Shopping Label */}
                    <div className="sm:col-span-1 lg:col-span-2 h-75 sm:h-85 overflow-hidden border border-secondary">
                        <img
                            src="/images/Brandings/Shoping-Label.png"
                            alt="Shopping Label"
                            className="w-full h-full object-cover"
                        />
                    </div>


                    {/* Business Card + Another Mockup */}
                    <div className="sm:col-span-1 lg:col-span-2 flex flex-col gap-5 lg:gap-7">

                        <div className="h-35 sm:h-38.75 overflow-hidden border border-secondary">
                            <img
                                src="/images/Brandings/Card.png"
                                alt="Business Card"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="h-35 sm:h-38.75 overflow-hidden border border-secondary">
                            <img
                                src="/images/Brandings/offive-wall.png"
                                alt="Another Mockup"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>


                    {/* Delivery Drone */}
                    <div className="sm:col-span-1 lg:col-span-3 h-75 sm:h-85 overflow-hidden border border-secondary">
                        <img
                            src="/images/Brandings/drone-delivery.png"
                            alt="Delivery Drone"
                            className="w-full h-full object-cover"
                        />
                    </div>


                    {/* Delivery Packaging */}
                    <div className="sm:col-span-2 lg:col-span-3 h-75 sm:h-85 overflow-hidden border border-secondary">
                        <img
                            src="/images/Brandings/delivery-box.png"
                            alt="Delivery Packaging"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>

            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true,}}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center mt-10 text-2xl md:text-xl md:text-end md:mt-3 md:mr-2">
                <Link
                    to="/Thumbnails"
                    className="font-karla text-white font-medium m-auto group"
                >
                    <span className="group-hover:text-secondary">See More</span>

                </Link>
            </motion.div>
        </div>
    )
}

export default Brands;
