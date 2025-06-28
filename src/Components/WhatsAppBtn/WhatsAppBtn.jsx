import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

function WhatsAppBtn() {
  return (
    <>
      <div aria-label="Chat with us on WhatsApp">
        <a
          href="https://api.whatsapp.com/send?phone=9873545322&text=Hello%20I%20want%20to%20book%20a%20tour"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Global India Tours on WhatsApp"
          title="Chat with Global India Tours on WhatsApp"
        >
          <div className="fixed bottom-20 bg-green-700 cursor-pointer p-4 text-white rounded-full right-5 z-50">
            <FaWhatsapp className="text-3xl" />
          </div>
        </a>
      </div>
    </>
  );
}

export default WhatsAppBtn;
