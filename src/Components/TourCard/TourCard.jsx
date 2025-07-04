import React from "react";
import { FaMapMarkerAlt, FaUserFriends, FaClock, FaStar } from "react-icons/fa";
import PopularDestinationBtn from "../Button/PopularDestinationBtn";
import { Link } from "react-router-dom";

const TourCard = ({ item }) => {
  return (
   <article
  className="lg:w-[340px] md:w-[280px] min-w-[220px] h-[440px] bg-white rounded-2xl shadow-xl overflow-hidden transition duration-300 hover:shadow-2xl flex flex-col"
  itemScope
  itemType="https://schema.org/TouristTrip"
  aria-labelledby={`tour-title-${item.id}`}
>
  {/* Image with price tag */}
  <div className="relative">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      itemProp="image"
    />
  </div>

  {/* Card Content */}
  <div className="p-4 flex-1 flex bg-white flex-col justify-center">
    <div>
      <h1
        id={`tour-title-${item.id}`}
        className="text-lg font-bold text-gray-800"
        itemProp="name"
      >
        {item.title}
      </h1>
      <p
        className="text-gray-500 text-sm flex items-center mt-1"
        itemProp="touristType"
      >
        <FaMapMarkerAlt className="mr-1 text-yellow-500" aria-hidden="true" />
        {item.place}
      </p>

      {/* Details */}
      <div className="flex items-center justify-between text-sm text-gray-600 mt-3">
        <div className="flex items-center">
          <FaClock className="mr-1 text-purple-600" aria-hidden="true" />
          <span itemProp="itinerary">{item.days} days</span>
        </div>
        <div className="flex items-center">
          <FaUserFriends className="mr-1 text-purple-600" aria-hidden="true" />
          <span>max {item.people}</span>
        </div>
        <div className="flex items-center">
          <FaStar className="mr-1 text-yellow-500" aria-hidden="true" />
          <span itemProp="aggregateRating">{item.rating}/5</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[2px] bg-orange-400 mt-3" />
    </div>

    {/* Button at the bottom */}
    <div className="mt-3">
      <Link
        to={`/detail/${item.id}`}
        aria-label={`Explore details for ${item.title}`}
      >
        <button className="w-full">
          <PopularDestinationBtn text={"Explore Now"} />
        </button>
      </Link>
    </div>
  </div>
</article>
  );
};

export default TourCard;
