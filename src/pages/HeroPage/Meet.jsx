import React from "react";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";
import ContactBtn from "../../Components/Button/ContactBtn";

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } },
};

const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { delay: 0.4, duration: 0.5, type: "spring" }, originX: 0.5 },
};

const statsVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.1, duration: 0.5, type: "spring" },
  }),
};

function Meet({ heading }) {
  return (
    <section
      className="w-full py-7 px-7 md:py-10 lg:py-12 bg-white text-black"
      aria-labelledby="meet-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div>
        <div className="container text-center m-auto">
          <motion.h1
            id="meet-heading"
            className="text-4xl md:text-5xl font-extrabold text-[#4245AD]"
            itemProp="name"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {heading}
            <motion.div
              className="mx-auto w-24 h-[2px] bg-orange-400 mb-4"
              variants={dividerVariants}
              initial="hidden"
              animate="visible"
              style={{ originX: 0.5 }}
            />
          </motion.h1>
          <motion.p
            className="text-gray-500 text-center mb-8"
            itemProp="description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Plan your next journey today - I'm ready to explore!
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:gap-20">
          <motion.figure
            className="w-full sm:w-1/2 max-w-88 md:max-w-md lg:max-w-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <img
              src={assets.about_photo}
              alt="Manjeet Singh, founder of Global India Tour"
              className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-[_30px_30px_#5E35B1] w-full"
              placeholder="blur"
              itemProp="image"
            />
            <figcaption className="sr-only">
              Manjeet Singh, founder of Global India Tour
            </figcaption>
          </motion.figure>

          <div className="flex flex-col justify-center items-center md:items-start mt-20 text-gray-600">
            <div className="grid grid-cols-2 text-center place-items-center gap-6 md:gap-10 w-full 2xl:pr-28">
              {[
                { value: "20+", label: "Years of experience" },
                { value: "999+", label: "Tours Completed" },
                { value: "12000+", label: "Happy Clients" },
                { value: "99+", label: "Collection of Cars" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={statsVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  custom={i}
                >
                  <p className="text-4xl font-bold text-gray-950">{stat.value}</p>
                  <p className="text-xl">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <motion.article
              className="my-10 text-black text-xl max-w-lg"
              itemProp="description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              I'm{" "}
              <span className="text-2xl font-semibold text-yellow-700" itemProp="name">
                Manjeet Singh
              </span>
              , the founder of <span itemProp="worksFor">Global India Tour</span>. With over 25 years in the
              travel industry, we've been committed to delivering exceptional travel experiences across India. Our expertise
              lies in understanding your unique travel needs and providing solutions that ensure comfort, safety, and satisfaction.
            </motion.article>
            <motion.a
              href="tel:+919873545322"
              title="Call Manjeet Singh, Global India Tour"
              itemProp="telephone"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.4, type: "spring" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <ContactBtn />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Meet;
