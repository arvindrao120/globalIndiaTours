import React from "react";
import { motion } from "framer-motion";
import PopularDestinationBtn from "../Button/PopularDestinationBtn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [result, setResult] = React.useState("Send Message");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c9ec0209-eb0c-4cf4-a233-57551634bd88");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Send Message");
      event.target.reset();
      toast.success("Message sent successfully!");
    } else {
      setResult(data.message);
      toast.error(data.message || "Something went wrong.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 0.7 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center py-6 bg-white rounded-2xl shadow-2xl lg:px-10 w-full overflow-hidden"
      id="Contact"
      aria-labelledby="contact-form-heading"
    >
      <form
        onSubmit={onSubmit}
        className="max-w-lg mx-auto text-black px-4"
        aria-label="Contact Booking Form"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        <h1
          id="contact-form-heading"
          className="text-3xl text-[#4245AD] text-start pb-4"
        >
          Book Your Car Now
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full text-left">
            <label htmlFor="name" className="text-lg block">
              Your Name
            </label>
            <input
              className="w-full outline-none bg-[#EFEAF7] shadow-xl focus:bg-[#E9E1FF] rounded-xl py-3 px-4 mt-2"
              type="text"
              name="name"
              placeholder="Your Name"
              id="name"
              required
              autoComplete="name"
              itemProp="name"
            />
          </div>
          <div className="w-full pt-4 text-left">
            <label htmlFor="email" className="text-lg block">
              Your Email
            </label>
            <input
              className="w-full outline-none bg-[#EFEAF7] shadow-xl focus:bg-[#E9E1FF] rounded-xl py-3 px-4 mt-2"
              type="email"
              name="email"
              placeholder="Your Email"
              id="email"
              required
              autoComplete="email"
              itemProp="email"
            />
          </div>
          <div className="w-full pt-4 text-left">
            <label htmlFor="Mobile" className="text-lg block">
              Mobile
            </label>
            <input
              className="w-full outline-none bg-[#EFEAF7] shadow-xl focus:bg-[#E9E1FF] rounded-xl py-3 px-4 mt-2"
              type="tel"
              name="mobile"
              placeholder="Mobile"
              id="Mobile"
              required
              autoComplete="tel"
              pattern="[0-9]{10,15}"
              itemProp="telephone"
            />
          </div>
        </div>
        <div className="mb-6 pt-4 text-left">
          <label htmlFor="message" className="text-lg block">
            Message
          </label>
          <textarea
            className="w-full outline-none bg-[#EFEAF7] shadow-xl focus:bg-[#E9E1FF] rounded-xl py-3 px-4 mt-2 h-36 resize-none"
            name="message"
            placeholder="Enter Your Query"
            id="message"
            required
            itemProp="description"
          ></textarea>
        </div>

        <button>
          <PopularDestinationBtn
            text={result ? result : "Send Message"}
            type="submit"
            className="w-full"
          />
          <ToastContainer />
        </button>
      </form>
    </motion.div>
  );
}

export default ContactForm;
