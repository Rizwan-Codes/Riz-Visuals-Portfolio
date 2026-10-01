
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function LogosSec() {

  return (
    <div className="md:max-w-7xl md:m-auto px-4 py-15">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="font-karla text-center md:text-start ">
       <h1 className="text-5xl md:text-8xl font-extrabold text-secondary">LOGO <span className="text-primary">DESIGNS</span></h1>
        <p className="text-[14px] mt-4 md:text-[18px] px-4 md:p-1 text-primary/80 font-medium md:w-[70%]">From minimalist monograms to full brand symbols, I create custom logo designs built to leave a lasting impression across all digital and print mediums.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        // className="flex flex-col items-center justify-center gap-4 md:flex md:flex-row md:items-center md:justify-center md:gap-4 px-5 md:p-0 mt-15">
        className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4  px-5 md:p-0 mt-15">

        {/* Item 1*/}
        <Link
          to="/projects/venguard-apex"
          className="relative group block md:max-w-75 overflow-hidden cursor-pointer rounded-2xl border border-secondary"
        >
          <img
            className="hidden md:block object-contain w-fit h-fit object-center transition-all duration-500 ease-in-out transform md:group-hover:scale-110 group-hover:opacity-0"
            src="/images/VA-BW.jpg"
            alt="Venguard Apex BW"
          />
          <img
            className="md:absolute md:inset-0 w-fit h-fit object-contain object-center md:opacity-0 scale-100 transition-all duration-500 ease-in-out transform group-hover:opacity-100 group-hover:scale-110"
            src="/images/VA.jpg"
            alt="Venguard Apex Color"
          />
        </Link>
         {/* Logo 2*/}
        <Link
          to="/projects/Kyro-Audios"
          className="relative group block md:max-w-75 overflow-hidden cursor-pointer rounded-2xl border border-secondary"
        >
          <img
            className="hidden md:block object-contain w-fit h-fit object-center transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:opacity-0"
            src="./src/assets/Logos/KYRO AUDIOS/KABW.jpg"
            alt="Kyro audios BW"
          />
          <img
            className="md:absolute md:inset-0 w-fit h-fit object-contain object-center md:opacity-0 scale-100 transition-all duration-500 ease-in-out transform group-hover:opacity-100 group-hover:scale-110"
            src="./src/assets/Logos/KYRO AUDIOS/KA COL.jpg"
            alt="kyro audios Color"
          />
        </Link>
         {/* Logo 3*/}
        <Link
          to="/projects/OverDrive"
          className="relative group block md:max-w-75 overflow-hidden cursor-pointer rounded-2xl border border-secondary"
        >
          <img
            className="hidden md:block object-contain w-fit h-fit object-center transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:opacity-0"
            src="./src/assets/Logos/OverDrive/Overdrive BW.jpg"
            alt="OverDrive BW"
          />
          <img
            className="md:absolute md:inset-0 w-fit h-fit object-contain object-center md:opacity-0 scale-100 transition-all duration-500 ease-in-out transform group-hover:opacity-100 group-hover:scale-110"
            src="./src/assets/Logos/OverDrive/Overdrive Col.jpg"
            alt="OverDrive Color"
          />
        </Link>
         {/* Logo 4*/}
        <Link
          to="/projects/Spectre"
          className="relative group block md:max-w-75 overflow-hidden cursor-pointer rounded-2xl border border-secondary"
        >
          <img
            className="hidden md:block object-contain w-fit h-fit object-center transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:opacity-0"
            src="./src/assets/Logos/Spectre/Spectre BW.jpg"
            alt="Spectre BW"
          />
          <img
            className="md:absolute md:inset-0 w-fit h-fit object-contain object-center md:opacity-0 scale-100 transition-all duration-500 ease-in-out transform group-hover:opacity-100 group-hover:scale-110"
            src="./src/assets/Logos/Spectre/Spectre Col.jpg"
            alt="Spectre Color"
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
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

export default LogosSec;













