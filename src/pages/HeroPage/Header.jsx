import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { motion } from "framer-motion";
import Hero1Btn from "../../Components/Button/Hero1Btn";
import Hero2Btn from "../../Components/Button/Hero2Btn";

function Header() {
  return (
    <>
      <header
        className="relative 2xl:py-32 py-8 min-h-screen 2xl:h-[96vh] w-full text-white overflow-hidden"
        id="Header"
        aria-labelledby="main-hero-heading"
      >
        {/* Background Layers */}
        <div
          className="absolute inset-0 bg-cover bg-center object-cover -z-20"
          style={{ backgroundImage: "url('car.png')" }}
          role="img"
          aria-label="Luxury car background"
        />

        <Navbar />

        <div
          className="flex flex-col 2xl:flex-row 
                justify-start 
                items-start lg:items-center 2xl:items-start 
                px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 
                w-full min-h-screen gap-10"
        >
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              id="main-hero-heading"
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold  text-center lg:text-left leading-tight"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              Discover The World With Us
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl font-medium text-center lg:text-left mt-4 lg:mt-6 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              Experience extraordinary journeys with our premium travel services
              and luxury car rentals. Your dream vacation starts here.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl font-semibold text-center lg:text-left mt-6 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            >
              Plan your next journey today&nbsp;–&nbsp;I'm ready to{" "}
              <span className="text-yellow-400">EXPLORE!</span>
            </motion.p>

            <motion.div
              className="flex flex-col w-full 2xl:items-start items-center 2xl:justify-start  justify-center sm:flex-row gap-4 sm:gap-6 mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <Hero1Btn />
              <Hero2Btn />
            </motion.div>
          </motion.div>

          {/* Right: Video (only on large screens and up) */}
          <motion.div
            className=" lg:flex lg:w-1/2 justify-center items-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2, type: "spring" }}
          >
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/D2LIXG_E4AM?si=ZEDu-QhXjbUD4ks3"
              title="Travel inspiration video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-3xl shadow-lg shadow-orange-200 object-cover w-full max-w-2xl aspect-video"
              loading="lazy"
              aria-label="Travel inspiration video"
            ></iframe>
          </motion.div>
        </div>
      </header>
    </>
  );
}

export default Header;
