import React from "react";
import SeeMoreBtn from "../../Components/Button/SeeMoreBtn";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import ContactForm from "../../Components/ContactForm/ContactForm";
import SocialMedia from "../../Components/SocialMedia";
import { motion } from "framer-motion";

function HeroForm() {
  return (
    <section
      className="text-black"
      aria-labelledby="contact-us-heading"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="relative w-full pb-16 py-5">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        </div>

        <header className="container lg:px-20 text-center pt-3 m-auto">
          <p className="text-orange-400 text-xl">Get In Touch</p>
          <h1
            id="contact-us-heading"
            className="text-4xl lg:text-5xl font-bold text-[#4245AD] w-full md:pt-5 "
          >
            Contact Us
          </h1>
          <motion.div
            className="mx-auto w-24 h-[2px] bg-orange-400 mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            style={{ originX: 0.5 }}
          />
        </header>
        <div className="flex justify-center items-center lg:px-10 p-5 w-full">
          <p className="text-gray-500 text-center md:max-w-1/2">
            Contact us with your questions or to book your next adventure. Our
            team is here to assist you.
          </p>
        </div>

        <div className="lg:flex px-4 lg:px-10 justify-center items-center gap-10 w-full">
          {/* Contact Info */}
          <address
            className="not-italic"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <div>
              <div className="rounded-lg lg:max-w-4/5 bg-white my-5">
                <div className="flex items-center bg-white justify-start gap-10 border-gray-300 p-4 rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-110">
                  <div className="bg-[#EFEAF7] p-4 rounded-md">
                    <IoLocationOutline className="text-4xl cursor-pointer text-[#5E35B1]" />
                  </div>
                  <div className="max-w-2/3">
                    <h2 className="text-2xl font-extrabold">Location</h2>
                    <p className="text-gray-500" itemProp="address">
                      B-1, near Jal Board, Sector B, Vasant Kunj, New Delhi,
                      Delhi 110070
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <a href="mailto:globalindiatours27@gmail.com" itemProp="email">
                <div className="rounded-lg lg:max-w-4/5 bg-white my-5">
                  <div className="flex items-center bg-white justify-start gap-10 border-gray-300 p-4 rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-110">
                    <div className="bg-[#EFEAF7] p-4 rounded-md">
                      <MdOutlineMail className="text-4xl cursor-pointer text-[#5E35B1]" />
                      {/* <p className="text-sm text-orange-400"> Click me</p> */}
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold">Mail</h2>
                      <p className="text-gray-500">
                        globalindiatours27@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div>
              <a href="tel:+919873545322" itemProp="telephone">
                <div className="rounded-lg lg:max-w-4/5 bg-white my-5">
                  <div className="flex items-center bg-white justify-start gap-10 border-gray-300 p-4 rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-110">
                    <div className="bg-[#EFEAF7] p-4 flex flex-col items-center justify-around rounded-md">
                      <LuPhone className="text-4xl cursor-pointer text-[#5E35B1]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold">
                        Phone{" "}
                        {/* <span className="text-orange-400 text-sm px-3">
                          (Click me)
                        </span> */}
                      </h2>
                      <span>+91 9873545322</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="flex py-6 items-center justify-start">
              <SocialMedia />
            </div>
          </address>
          <div className="lg:hidden w-full h-[2px] bg-[#5E35B1] mb-10"></div>
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroForm;
