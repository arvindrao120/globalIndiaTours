import React, { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "Can I book at the last minute?",
    answer:
      "Yes, we accommodate same-day bookings based on vehicle availability.",
  },
  {
    question: "Do you provide drivers?",
    answer: "Absolutely, all rentals come with the option of a professional chauffeur.",
  },
  {
    question: "Is there a cancellation fee?",
    answer:
      "Cancellations made 12 hours prior to the scheduled time are free of charge.",
  },
  {
    question: "Are the vehicles suitable for long trips?",
    answer:
      "Yes, all our vehicles are well-maintained and ideal for long-distance travel.",
  },
  {
    question: "Do you operate outside Rajasthan?",
    answer:
      "Yes, we offer services across India, including inter-state travel.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="bg-white flex items-center justify-center py-16 px-4"
      aria-labelledby="faq-heading"
    >
      <div className="w-full max-w-2xl mx-auto p-4 sm:p-8">
        <header>
          <h1
            id="faq-heading"
            className="text-3xl md:text-5xl font-bold text-[#4642AD]  text-center"
          >
            Frequently Asked Questions
          </h1>
          <motion.div
            className="mx-auto w-32 h-[2px] bg-orange-400 mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            style={{ originX: 0.5 }}
          />
          <p className="text-center text-gray-500 mb-8 text-base md:text-lg">
            Find answers to the most common questions about our travel and car rental services.
          </p>
        </header>
        <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
          {faqData.map((item, idx) => (
            <article
              key={idx}
              className="border-b cursor-pointer px-4 shadow-2xl rounded-lg bg-white"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full text-left py-4 focus:outline-none flex justify-between items-center"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span className="text-lg font-semibold text-black" itemProp="name">
                  {item.question}
                </span>
                <span className="text-[#4642AD] text-3xl" aria-hidden="true">
                  {openIndex === idx ? "-" : "+"}
                </span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden`}
                style={{
                  maxHeight: openIndex === idx ? "200px" : "0",
                  opacity: openIndex === idx ? 1 : 0,
                }}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="pb-4 text-gray-700 text-base" itemProp="text">
                  {item.answer}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;