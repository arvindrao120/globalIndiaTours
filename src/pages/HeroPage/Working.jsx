import React from "react";
import { BsCarFrontFill, BsPersonFill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { motion } from "framer-motion";


const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { delay: 0.4, duration: 0.5, type: "spring" }, originX: 0.5 },
};

function Working() {
  return (
    <section
      className="w-full bg-white p-10 text-black"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="container lg:px-20 text-center pt-3 m-auto">
        <h1
          id="why-choose-us-heading"
          className="text-3xl lg:text-4xl  font-bold text-[#4245AD] w-full md:py-5 py-3"
        >
          Why Choose Us?
            <motion.div
              className="mx-auto w-24 h-[2px] bg-orange-400 mb-4"
              variants={dividerVariants}
              initial="hidden"
              animate="visible"
              style={{ originX: 0.5 }}
            />
        </h1>
      </div>
      <div className="flex justify-center px-4 md:px-10 w-full">
        <p className="text-gray-500 text-center md:max-w-2xl mb-8">
          Here are reasons you should plan your trip with us.
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-8 place-items-center md:grid-cols-2 2xl:grid-cols-3 py-10"
        aria-label="Key benefits of our travel service"
      >
        <article
          className="w-full max-w-lg flex items-center gap-5 border-gray-300 rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105 p-5 bg-white"
          itemScope
          itemType="https://schema.org/Service"
        >
          <BsCarFrontFill
            className="text-7xl text-[#4245AD]"
            aria-hidden="true"
          />
          <div>
            <h2 className="text-lg font-extrabold" itemProp="name">
              Clean & Well-Maintained Vehicles
            </h2>
            <p  className="text-sm text-gray-600" itemProp="description">
              Our fleet includes sanitized, GPS-enabled vehicles that are
              regularly serviced to ensure your safety and comfort.
            </p>
          </div>
        </article>
        <article
          className="w-full max-w-lg flex items-center gap-5 border-gray-300 rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105 p-5 bg-white"
          itemScope
          itemType="https://schema.org/Service"
        >
          <BsPersonFill
            className="text-7xl text-[#4245AD]"
            aria-hidden="true"
          />
          <div>
            <h2 className="text-lg font-extrabold" itemProp="name">
              Experienced & Verified Drivers
            </h2>
            <p className="text-sm text-gray-600" itemProp="description">
              Our professional drivers are trained, courteous, and knowledgeable
              about various routes and destinations.
            </p>
          </div>
        </article>
        <article
          className="w-full max-w-lg flex items-center gap-5 border-gray-300 rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105 p-5 bg-white"
          itemScope
          itemType="https://schema.org/Service"
        >
          <FaRupeeSign className="text-5xl text-[#4245AD]" aria-hidden="true" />
          <div>
            <h2 className="text-lg font-extrabold" itemProp="name">
              Transparent Pricing
            </h2>
            <p className="text-sm text-gray-600" itemProp="description">
              We believe in honest pricing with no hidden charges, ensuring you
              get the best value for your money.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Working;
