import React, { useEffect } from "react";
import HeroForm from "../HeroPage/HeroForm";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <main
        className="w-full bg-white text-black min-h-screen"
        aria-labelledby="contact-heading"
      >
        <Helmet>
          <title>
            Contact Us | Global India Tours – 24/7 Travel Support & Booking
          </title>
          <meta
            name="description"
            content="Contact Global India Tours for bookings, queries, or custom travel plans. Reach us by phone, email, or our online form. Our team is available 24/7 to assist you with Rajasthan and India tours."
          />
          <meta
            name="keywords"
            content="contact, travel support, booking, Rajasthan, India, Global India Tours"
          />
          <link rel="canonical" href="https://yourdomain.com/contact" />
        </Helmet>
        <motion.section
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full"
          aria-label="Contact Global India Travels"
        >
          <HeroForm />
        </motion.section>
      </main>
    </>
  );
}

export default Contact;
