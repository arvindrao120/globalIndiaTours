import React, { useEffect } from "react";
import Showcars from "../HeroPage/ShowCars";
import { Helmet } from "react-helmet-async";

function CarBooking() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <main
        className="w-full bg-white text-black"
        aria-labelledby="car-booking-heading"
      >
        <Helmet>
          <title>
            Car Booking | Global India Tours – Luxury Car Rental & Rajasthan
            Tour Experts
          </title>
          <meta
            name="description"
            content="Book your luxury or budget car with Global India Tours. Choose from a wide range of vehicles for Rajasthan and all India tours. Safe, comfortable, and reliable car rental service with 24/7 support."
          />
          <meta
            name="keywords"
            content="car booking, car rental, luxury cars, tempo traveller, Rajasthan, India, Global India Tours"
          />
          <link rel="canonical" href="https://yourdomain.com/carBooking" />
        </Helmet>
        <Showcars data={true} />
      </main>
    </>
  );
}

export default CarBooking;
