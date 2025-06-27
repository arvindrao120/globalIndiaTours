import React from "react";
import { FaUserFriends, FaSuitcase, FaGasPump, FaCog } from "react-icons/fa";
import PopularDestinationBtn from "../Button/PopularDestinationBtn";
import { Link } from "react-router";

const CarCard = ({ item }) => {
  return (
    <article
      className="w-[320px] bg-white rounded-3xl shadow-xl overflow-hidden transition duration-300 hover:shadow-2xl p-4"
      itemScope
      itemType="https://schema.org/Product"
      aria-labelledby={`car-title-${item.id}`}
    >
      {/* Image and badge */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 rounded-2xl object-cover transition-transform duration-300 hover:scale-110"
          itemProp="image"
      
        />
        <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full" itemProp="category">
          {item.category}
        </span>
        <span className="absolute bottom-[-16px] right-4 bg-orange-400 text-white font-bold text-lg px-4 py-1 rounded-full shadow-md">
          <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <span itemProp="price">{item.pricePerKm}</span> /Km
          </span>
        </span>
      </div>

      {/* Content */}
      <div className="mt-8 px-2 text-center">
        <h1
          className="text-lg font-bold text-gray-800 mb-4"
          id={`car-title-${item.id}`}
          itemProp="name"
        >
          {item.name}
        </h1>
        <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-2 justify-center">
            <FaUserFriends className="text-purple-600" aria-hidden="true" />
            <span itemProp="seatingCapacity">{item.seats}</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaSuitcase className="text-purple-600" aria-hidden="true" />
            <span>{item.airbags} Bags</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaGasPump className="text-purple-600" aria-hidden="true" />
            <span itemProp="fuelType">{item.fuelType}</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaCog className="text-purple-600" aria-hidden="true" />
            <span itemProp="vehicleTransmission">{item.transmission}</span>
          </div>
        </div>

        {/* Reserve Button */}
        <div>
          <Link to={"/contact"} aria-label={`Reserve ${item.name} now`}>
            <PopularDestinationBtn text={"Reserve Now"} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CarCard;