import React from "react";
import {
  FaExclamationTriangle,
  FaTaxi,
  FaMoneyBillWave,
  FaUserShield,
} from "react-icons/fa";
import { motion } from "framer-motion";

const painPoints = [
  {
    icon: (
      <FaTaxi className="text-3xl text-orange-400 mb-2" aria-hidden="true" />
    ),
    text: "Unreliable cab services disrupting your plans?",
  },
  {
    icon: (
      <FaMoneyBillWave
        className="text-3xl text-orange-400 mb-2"
        aria-hidden="true"
      />
    ),
    text: "Hidden charges and last-minute surprises?",
  },
  {
    icon: (
      <FaUserShield
        className="text-3xl text-orange-400 mb-2"
        aria-hidden="true"
      />
    ),
    text: "Difficulty in finding trustworthy travel partners?",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2 + i * 0.15,
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  }),
};

function PainPoint() {
  return (
    <section
      className="w-full bg-gradient-to-b from-white to-blue-50 space-y-8 py-10 px-4 text-black"
      aria-labelledby="painpoints-heading"
    >
      <header>
        <h2
          id="painpoints-heading"
          className="text-center text-3xl lg:text-4xl  text-[#5352C7] font-bold mb-6"
        >
          <div className=" items-center gap-2">
            
            <h1>
              Facing Travel Challenges ?
              <motion.div
                className="px-4 mx-auto lg:px-16 w-28 h-[2px] items-center bg-orange-400 mb-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                style={{ originX: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>
            </h1>
          </div>
        </h2>
      </header>
      <ul
        className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-5xl mx-auto"
        aria-label="Common travel pain points"
      >
        {painPoints.map((point, i) => (
          <motion.li
            key={i}
            className="bg-white shadow-2xl rounded-2xl text-center px-8 py-8 flex flex-col items-center w-full max-w-xs border-t-4 border-orange-400 hover:scale-105 transition-transform duration-300 focus-within:ring-2 ring-orange-400"
            tabIndex="0"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
          >
            {point.icon}
            <span className="text-lg font-medium text-gray-700">
              {point.text}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default PainPoint;
