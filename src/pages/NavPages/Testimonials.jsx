import React, { useEffect } from "react";
import TestimonialsCard from "../../Components/Testimonials/TestimonialsCard.jsx";
import { assets, testimonialsData } from "../../assets/assets.js";
import SeeMoreBtn from "../../Components/Button/SeeMoreBtn.jsx";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const videoVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 100,
      damping: 18,
    },
  }),
};

function Testimonials({ data,showTitle=true }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <section
        className="w-full text-black"
        aria-labelledby="testimonials-heading"
        itemScope
        itemType="https://schema.org/CollectionPage"
      >
        {showTitle && (
          <Helmet>
            <title>
              Testimonialss | Global India Tours – Client Reviews & Experiences
            </title>
            <meta
              name="description"
              content="Read real client testimonials and watch video reviews for Global India Tours. Discover why travelers trust us for Rajasthan and India tours, car rentals, and travel planning."
            />
            <meta
              name="keywords"
              content="testimonials, reviews, client feedback, Global India Tours, Rajasthan, India, travel experiences"
            />
            <link rel="canonical" href="https://yourdomain.com/testimonials" />
          </Helmet>
        )}
        <div className="container py-10 m-auto">
          <motion.p
            className="text-xl text-center py-4 text-orange-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
            itemProp="description"
          >
            Client Stories
          </motion.p>
          <motion.h1
            id="testimonials-heading"
            className="text-[#5539AF] text-center font-bold text-4xl xl:text-6xl  md:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            itemProp="name"
          >
            Voices of Experience
            <motion.div
              className="px-4 mx-auto lg:px-16 w-20 h-[2px] items-center bg-orange-400 mb-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
              style={{ originX: 0.5 }}
            ></motion.div>
          </motion.h1>

          <motion.p
            className="text-lg p-4 text-center text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            itemProp="about"
          >
            Discover what our clients have to say about their journeys with
            TravelEase.
          </motion.p>
        </div>
        <div className="lg:p-10 p-4">
          <motion.div
            className="flex justify-center gap-10 flex-wrap w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            itemProp="review"
          >
            {testimonialsData.map((item, idx) => (
              <motion.div key={item.id} variants={cardVariants}>
                <TestimonialsCard item={item} />
              </motion.div>
            ))}
          </motion.div>

          {data === true ? (
            <motion.div
              className="w-full flex justify-center py-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
            >
              <Link
                to="/testimonials"
                aria-label="See more client testimonials"
              >
                <span>
                  <SeeMoreBtn />
                </span>
              </Link>
            </motion.div>
          ) : (
            <div>
              <div className="m-10 mx-auto lg:px-16 w-full h-[2px] items-center bg-orange-400 mb-4"></div>

              <div className="w-full py-12 flex flex-wrap justify-around">
                <iframe
                  width="360"
                  height="640"
                  src="https://www.youtube.com/embed/wom53bc7zbQ"
                  title="Client testimonial video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl shadow-lg shadow-orange-600 object-cover w-full max-w-xs aspect-[9/16]"
                  loading="lazy"
                ></iframe>
                <iframe
                  width="360"
                  height="640"
                  src="https://www.youtube.com/embed/DTiSMus0dDc"
                  title="Client testimonial video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl shadow-lg shadow-orange-600  object-cover w-full max-w-xs aspect-[9/16]"
                  loading="lazy"
                ></iframe>
                <iframe
                  width="360"
                  height="640"
                  src="https://www.youtube.com/embed/v_IrcCBM-h4"
                  title="Client testimonial video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl shadow-lg shadow-orange-600  object-cover w-full max-w-xs aspect-[9/16]"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Testimonials;
