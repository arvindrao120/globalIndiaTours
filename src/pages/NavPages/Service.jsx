import React, { useEffect } from "react";
import ShowTour from "../HeroPage/ShowTour";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const sectionVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

function Service() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <main
        className="w-full min-h-screen bg-white text-black"
        aria-labelledby="service-heading"
      >
        {" "}
        <Helmet>
          <title>
            Tour Packages & Services | Global India Tours – Rajasthan & India
            Travel Experts
          </title>
          <meta
            name="description"
            content="Explore our curated tour packages and travel services across Rajasthan and India. Book with Global India Tours for a seamless, memorable, and safe travel experience."
          />
          <meta
            name="keywords"
            content="tour packages, travel services, Rajasthan, India, Global India Tours, luxury tours, group tours"
          />
          <link rel="canonical" href="https://yourdomain.com/service" />
        </Helmet>
        <motion.section
          className="w-full"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          aria-label="All Tour Packages"
        >
          <ShowTour data={"true"} />
        </motion.section>
      </main>
    </>
  );
}

export default Service;
