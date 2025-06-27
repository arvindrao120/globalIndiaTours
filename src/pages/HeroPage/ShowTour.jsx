import React from "react";
import { tourData } from "../../assets/assets.js";
import TourCard from "../../Components/TourCard/TourCard.jsx";
import SeeMoreBtn from "../../Components/Button/SeeMoreBtn.jsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function ShowTour({ data }) {
  return (
    <section
      className="text-black w-full bg-white"
      id="ShowTour"
      aria-labelledby="tours-heading"
    >
      <div className="relative w-full">
        {/* Decorative background */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <div className="container py-10 m-auto">
          <motion.p
            className="text-xl text-center py-4 text-orange-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
            itemProp="description"
          >
            Popular Destinations
          </motion.p>
          <motion.h1
            id="testimonials-heading"
            className="text-[#5539AF] text-center font-bold text-4xl xl:text-6xl  md:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            itemProp="name"
          >
            Extraordinary Journeys
            <motion.div
              className="px-4 mx-auto lg:px-16 w-28 h-[2px] items-center bg-orange-400 mb-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
              style={{ originX: 0.5 }}
            ></motion.div>
          </motion.h1>

          <motion.p
            className="text-lg p-4 text-center text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            itemProp="about"
          >
            Embark on unforgettable adventures with our exclusive tour packages
            to the world's most captivating destinations.
          </motion.p>
        </div>

        <div className="flex justify-center w-full">
          <div
            className="grid grid-cols-1 gap-10 lg:gap-20 w-full xl:max-w-3/4 p-10 place-items-center sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 "
            aria-label="Tour packages"
          >
            {data === "true"
              ? tourData.map((item) => <TourCard key={item.id} item={item} />)
              : tourData
                  .slice(0, 3)
                  .map((item) => <TourCard key={item.id} item={item} />)}
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center py-10">
          {!data && (
            <Link to="/service" aria-label="See more about our services">
              <span><SeeMoreBtn/></span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default ShowTour;
