import React from "react";
import CarCard from "../../Components/CardCards/CarCard";
import { carsData } from "../../assets/assets";
import SeeMoreBtn from "../../Components/Button/SeeMoreBtn";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

function Showcars({ data }) {
  const carList = data === true ? carsData : carsData.slice(0, 3);

  return (
    <section
      className="py-10 text-black bg-[#EEECFB] w-full"
      aria-labelledby="luxury-car-collection"
    >
      <div className="container mx-auto px-4">
        <motion.header
          className="max-w-2xl mx-auto text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-orange-400 text-xl" aria-label="Premium Fleet">
            Premium Fleet
          </p>
          <h1
            id="luxury-car-collection"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4245AD] w-full md:py-5 py-3"
          >
            Luxury Car Collection
            <motion.div
              className="px-4 mx-auto lg:px-16 w-28 h-[2px] items-center bg-orange-400 mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
              style={{ originX: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500">
            Experience the thrill of driving premium vehicles with our exclusive
            car rental service. Choose from our impressive fleet of luxury,
            sports, and SUV models to elevate your journey.
          </p>
        </motion.header>

        <motion.div
          className="w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div
            className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
            aria-label="Luxury cars available for rent"
          >
            {carList.map((item) => (
              <motion.div key={item.id} variants={cardVariants}>
                <CarCard item={item} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center py-10">
          {data === true ? null : (
            <Link to="/carBooking" aria-label="See more about car booking">
              <span>
                <SeeMoreBtn />
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default Showcars;
