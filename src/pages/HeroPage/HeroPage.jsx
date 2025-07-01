import React, { useEffect } from "react";
import Header from "./Header";
import ShowTour from "./ShowTour";
import Meet from "./Meet";
import ShowCars from "./ShowCars";
import HeroForm from "./HeroForm";
import WhatsAppBtn from "../../Components/WhatsAppBtn/WhatsAppBtn";
import Working from "./Working";
import Faq from "./Faq";
import PainPoint from "./PainPoint";
import WelcomeModal from "../WelcomeModal ";
import Testimonials from "../NavPages/Testimonials";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } },
};

function HeroPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <main className="w-full" aria-label="Global India Travels Home">
        {/* Hero Section */}
        <Helmet>
          <title>
            Global India Tours – India Tour Packages, Luxury Car Rental & Travel
            Experts
          </title>
          <meta
            name="description"
            content="Discover  India with Global India Tours. Book curated tour packages, luxury car rentals, and get expert travel assistance for a seamless, memorable journey. Contact us for personalized travel planning and 24/7 support."
          />
        </Helmet>

        <Header />
        <WelcomeModal />

        {/* About / Mission Section */}
        <motion.section
          aria-labelledby="journey-mission-heading"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Meet heading={"Our Journey & Mission"} />
        </motion.section>

        {/* Tours Section */}
        <motion.section
          aria-labelledby="tours-heading"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ShowTour />
        </motion.section>

        {/* Cars Section */}
        <motion.section
          aria-labelledby="cars-heading"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ShowCars />
        </motion.section>

        {/* How it Works Section */}
        <motion.section
          aria-labelledby="working-heading"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Working />
        </motion.section>

        {/* Pain Points Section */}
        <motion.section
          aria-labelledby="painpoints-heading"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <PainPoint />
        </motion.section>

        <motion.section
          aria-labelledby="Testimonials-heading"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Testimonials data={true} showTitle={false} />
        </motion.section>

        <motion.section
          aria-labelledby="contact-heading"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <HeroForm />
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          aria-labelledby="faq-heading"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Faq />
        </motion.section>

        {/* Contact Section */}

        {/* Testimonials Section */}

        {/* WhatsApp Floating Button (aria-hidden for screen readers) */}
        <div aria-hidden="true">
          <WhatsAppBtn />
        </div>
      </main>
    </>
  );
}

export default HeroPage;
