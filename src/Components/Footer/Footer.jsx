import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router";
import SocialMedia from "../SocialMedia";
import { MdArrowForwardIos } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";


function Footer() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    
      <div>
        <div className="sticky bottom-0 w-full lg:h-[36vh] p-7 text-white bg-gradient-to-r from-[#5B37B1] to-[#3D47AB]">
          <div className=" flex lg:flex-row flex-col justify-center lg:items-center lg:px-20 px-4 lg:gap-40 gap-10 w-full lg:h-full">
            <div className="lg:max-w-88  space-y-4">
              <img className="w-40 " src={assets.logo} alt="Global India Tours Logo" itemProp="logo" />
              <p className="text-white text-lg" itemProp="description">
                Welcome to Global India Tours. Based in New Delhi, India, Global India Tours is a tourist vehicles transport company in business for almost 25 years.
              </p>
              <p className="flex text-lg items-center hover:text-[#FF8904] transition-transform duration-300 hover:scale-100">
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to="/about"
                  aria-label="Read more about Global India Tours"
                >
                  <span className="cursor-pointer">Read More</span>
                </Link>
              </p>
              <div className="flex items-center justify-start mt-4">
                <SocialMedia />
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-3xl font-bold ">Quick Links</h1>
                <div className=" space-y-3 text-lg py-6">
                  <div>
                    <span className="flex  items-center gap-2 hover:text-[#FF8904] transition-transform duration-300 hover:scale-110">
                      <MdArrowForwardIos />
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to={""}
                        aria-label="Go to Home page"
                      >
                        Home
                      </Link>
                    </span>
                  </div>
                  <div>
                    <p className="flex  max-w-auto  items-center gap-2 hover:text-[#FF8904] transition-transform duration-300 hover:scale-110">
                      <MdArrowForwardIos />
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to={"/privacy-policy"}
                        aria-label="Read our Privacy Policy"
                      >
                        Privacy & Policy
                      </Link>
                    </p>
                  </div>
                  <div>
                    <p className="flex  max-w-auto  items-center gap-2 hover:text-[#FF8904] transition-transform duration-300 hover:scale-110">
                      <MdArrowForwardIos />
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to={"/terms-of-service"}
                        aria-label="Read our Terms of Service"
                      >
                        Terms & Service
                      </Link>
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2  cursor-pointer hover:text-[#FF8904] transition-transform duration-300 hover:scale-110">
                      <MdArrowForwardIos />
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to={"/contact"}
                        aria-label="Contact Global India Tours"
                      >
                        Contact Us
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-3xl font-bold">Contact Info</h1>
                <div>
                  <div className="flex items-center gap-4 mt-6 lg:max-w-88">
                    <IoHome className="text-5xl" />
                    <p className="text-lg" itemProp="address">
                      Address: B-1, near Jal Board, Sector B, Vasant Kunj, New Delhi, Delhi 110070
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-6 max-w-88">
                    <FaPhoneFlip className="text-2xl" />
                    <p className="hover:text-[#FF8904] transition-transform duration-300 hover:scale-110">
                      <a href="tel:+91 9873545322" className="text-lg" itemProp="telephone">
                        +91 9873545322
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-6 max-w-88">
                    <IoMailSharp className="text-3xl" />
                    <span>
                      <p className="text-lg hover:text-[#FF8904] transition-transform duration-300 hover:scale-110">
                        <a href="mailto:globalindiatours27@gmail.com" itemProp="email">
                          globalindiatours27@gmail.com
                        </a>
                      </p>
                      <p className="text-lg hover:text-[#FF8904] transition-transform duration-300 hover:scale-110">
                        <a href="mailto:info@globalindiatravel.com" itemProp="email">
                          info@globalindiatravel.com
                        </a>
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#3D47AB] text-white text-center py-4">
          <p className="text-sm">
            © 2024 Global India Tours. All rights reserved. | Made By Empire-X
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
