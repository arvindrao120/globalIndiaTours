import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";

function SocialMedia() {
  return (
    <nav
      className="flex justify-center items-center gap-4"
      aria-label="Social Media Links"
    >
      <a
        href="https://www.facebook.com/globalindiatravel"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our Facebook page"
        title="Facebook"
      >
        <div className="text-2xl bg-[#5E35B1] p-4 cursor-pointer rounded-full text-white transition-transform duration-300 shadow-lg hover:rotate-[30deg] hover:shadow-2xl">
          <span>
            <FaFacebookF aria-hidden="true" />
          </span>
        </div>
      </a>
      <a
        href="https://www.instagram.com/globalindiatravel/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our Instagram profile"
        title="Instagram"
      >
        <div className="text-xl bg-[#5E35B1] p-4 cursor-pointer rounded-full text-white transition-transform duration-300 shadow-lg hover:rotate-[30deg] hover:shadow-2xl">
          <span>
            <FaInstagram aria-hidden="true" />
          </span>
        </div>
      </a>
      <a
        href="https://x.com/globalintravel"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our X (Twitter) profile"
        title="X (Twitter)"
      >
        <div className="text-xl bg-[#5E35B1] p-4 cursor-pointer rounded-full text-white transition-transform duration-300 shadow-lg hover:rotate-[30deg] hover:shadow-2xl">
          <span>
            <BsTwitterX aria-hidden="true" />
          </span>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/company/globalindiatravel/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our LinkedIn page"
        title="LinkedIn"
      >
        <div className="text-xl bg-[#5E35B1] p-4 cursor-pointer rounded-full text-white transition-transform duration-300 shadow-lg hover:rotate-[30deg] hover:shadow-2xl">
          <span>
            <FaLinkedinIn aria-hidden="true" />
          </span>
        </div>
      </a>
    </nav>
  );
}

export default SocialMedia;
