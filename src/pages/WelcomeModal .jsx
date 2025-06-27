import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const modalVariants = {
  hidden: { y: "-60%", opacity: 0, scale: 0.7 },
  visible: {
    y: "0%",
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
  exit: { y: "60%", opacity: 0, scale: 0.7, transition: { duration: 0.25 } },
};

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // Always open on mount
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-[#0000]/60 backdrop-blur-sm z-50"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleClose}
          aria-modal="true"
          role="dialog"
          aria-labelledby="welcome-modal-title"
        >
          <motion.div
            className="relative bg-white rounded-2xl shadow-lg w-[90vw] max-w-md sm:max-w-lg md:max-w-xl p-4 sm:p-8 text-center border-t-4 border-orange-400 mx-2"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-3xl text-orange-400 font-semibold p-2 rounded-xl transition duration-300 hover:bg-orange-100 focus:outline-none"
              aria-label="Close welcome modal"
              title="Close"
            >
              <RxCrossCircled className="cursor-pointer" />
            </button>
            <motion.h2
              id="welcome-modal-title"
              className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4"
              itemProp="headline"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            >
              Welcome!
            </motion.h2>
            <motion.p
              className="text-gray-700 mb-6 text-base sm:text-lg"
              itemProp="description"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              Welcome To Global India Tours . Explore our amazing destinations
              With Us
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row w-full justify-center gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="https://api.whatsapp.com/send?phone=9873545322&text=Hello%20I%20want%20to%20book%20a%20tour"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Global India Tours on WhatsApp"
                title="Chat with Global India Tours on WhatsApp"
                className="w-full sm:w-auto"
              >
                <div className="bg-green-700 flex items-center justify-center gap-3 cursor-pointer p-3 sm:p-4 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300">
                  <span>
                    <FaWhatsapp
                      className="text-2xl sm:text-3xl"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="font-semibold text-base sm:text-lg">
                    WhatsApp
                  </span>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;
