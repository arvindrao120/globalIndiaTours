import React, { useEffect } from "react";
import Meet from "../HeroPage/Meet";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function AboutUs() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <main
        className="bg-white text-black w-full"
        aria-labelledby="aboutus-heading"
      >
        <Helmet>
          <title>
            About - Global India Tours | Trusted India Travel Experts
          </title>
          <meta
            name="description"
            content="Learn about Global India Tours, a leading travel company based in New Delhi with 25+ years of experience. Discover our story, mission, and commitment to customer satisfaction in Rajasthan and across India."
          />
        </Helmet>
        <motion.section
          className="max-w-6xl mx-auto shadow-xl px-4 sm:px-8 py-8 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label="About Us Introduction"
        >
          <Meet heading={"About Us"} />
        </motion.section>
        <motion.section
          className="max-w-6xl mx-auto shadow-2xl px-4 sm:p-8 py-8 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-labelledby="aboutus-heading"
        >
          <motion.h1
            id="aboutus-heading"
            className="text-3xl md:text-4xl lg:text-5xl text-[#4245AD] font-bold text-center"
            variants={itemVariants}
          >
            About Global India Tours
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-justify"
            variants={itemVariants}
          >
            Welcome to <strong>Global India Tours</strong>. Based in New Delhi,
            India, Global India Tours is a tourist vehicles transport company
            that has been in business for almost 25 years. Operations commenced
            in 1996, with just two dedicated personnel and a single car. Now, we
            operate a fleet of nearly 100 cars, tempos, and buses, with a
            dedicated team based at our headquarters in New Delhi.
          </motion.p>

          <motion.p
            className="pb-8 text-lg md:text-xl text-justify"
            variants={itemVariants}
          >
            Additionally, Global India Tours has representatives and local
            offices across Rajasthan, Himachal Pradesh, Uttarakhand, Uttar
            Pradesh, and Madhya Pradesh. Our mission remains{" "}
            <strong>“total customer satisfaction.”</strong> We focus on
            delivering exceptional value and unmatched service quality. Constant
            service upgrades and benchmarking against top industry standards
            drive our continuous improvement efforts.
          </motion.p>
        </motion.section>
      </main>
    </>
  );
}

export default AboutUs;
