import React, { useEffect, useState } from "react";
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

// Mouse-following circle only, grows on hover
function AnimatedMouseCircle() {
  const [mouse, setMouse] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Only grow on interactive elements
    const interactiveSelector = "a, button, input, textarea, select, [tabindex]:not([tabindex='-1'])";
    const handleMouseOver = (e) => {
      if (e.target.closest("#mouse-follow-circle")) return;
      if (e.target.closest(interactiveSelector)) setHovering(true);
    };
    const handleMouseOut = (e) => {
      if (e.target.closest("#mouse-follow-circle")) return;
      if (e.target.closest(interactiveSelector)) setHovering(false);
    };
    document.body.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      id="mouse-follow-circle"
      style={{
        position: "fixed",
        left: mouse.x - (hovering ? 40: 20),
        top: mouse.y - (hovering ? 40: 20),
        width: hovering ? 80 : 80,
        height: hovering ? 80 : 80,
        borderRadius: "50%",
    
        border:  "2px solid #CB8723",
        zIndex: 9999,
        pointerEvents: "none",
        mixBlendMode: "multiply",
        transition: "width 0.15s, height 0.15s, left 0.15s, top 0.15s",
      }}
      animate={{
        left: mouse.x - (hovering ? 40 : 20),
        top: mouse.y - (hovering ? 40 : 20),
        width: hovering ? 80 : 40,
        height: hovering ? 80 : 40,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      aria-hidden="true"
    />
  );
}

function HeroPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {/* Only mouse-following circle */}
      <AnimatedMouseCircle />

      <main className="w-full" aria-label="Global India Travels Home">
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

        <motion.section
          aria-labelledby="journey-mission-heading"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Meet heading={"Our Journey & Mission"} />
        </motion.section>

        <motion.section
          aria-labelledby="tours-heading"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ShowTour />
        </motion.section>

        <motion.section
          aria-labelledby="cars-heading"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ShowCars />
        </motion.section>

        <motion.section
          aria-labelledby="working-heading"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Working />
        </motion.section>

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

        <motion.section
          aria-labelledby="faq-heading"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Faq />
        </motion.section>

        <div aria-hidden="true">
          <WhatsAppBtn />
        </div>
      </main>
    </>
  );
}

export default HeroPage;