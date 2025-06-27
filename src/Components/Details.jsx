import React, { useEffect } from "react";
import { exploreTour, tourData } from "../assets/assets";
import { Helmet } from "react-helmet-async";

function Details({ tourId = 0 }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Find the tour by id (or fallback to first)
  const tour =
    exploreTour.find((t) => t.id === Number(tourId)) || exploreTour[0];
  const image =
    tourData.find((img) => img.id === tour.id)?.image || tourData[0].image;

  return (
    <article
      className="w-full  pb-10"
      itemScope
      itemType="https://schema.org/TouristTrip"
      aria-labelledby="tour-title"
    >
      <Helmet>
        <title>
          {tour.title
            ? `${tour.title} | Global India Tours`
            : "Tour Details | Global India Tours"}
        </title>
        <meta
          name="description"
          content={
            tour.overview ||
            "Explore detailed information about this tour package from Global India Tours. Discover itinerary, inclusions, pricing, and more for your next adventure in India."
          }
        />
        <meta
          name="keywords"
          content="tour details, India tour, Rajasthan tour, package details, Global India Tours"
        />
        <meta
          property="og:title"
          content={
            tour.title
              ? `${tour.title} | Global India Tours`
              : "Tour Details | Global India Tours"
          }
        />
        <meta
          property="og:description"
          content={
            tour.overview ||
            "Explore detailed information about this tour package from Global India Tours. Discover itinerary, inclusions, pricing, and more for your next adventure in India."
          }
        />
        
      </Helmet>
      <header className="w-full flex lg:py-6 pb-6 justify-center">
        <img
          className="max-w-1/2 shadow-xl max-h-96 rounded-md object-cover"
          src={image}
          alt={tour.title}
          itemProp="image"
        />
      </header>
      <div className="container space-y-6 xl:max-w-2/3 py-12 shadow-2xl px-6 rounded-2xl md:px-20 mx-auto bg-white">
        <h1 id="tour-title" className="text-4xl py-5 font-bold" itemProp="name">
          {tour.title}
        </h1>
        <div className="px-4 lg:px-16 w-full h-[4px] bg-orange-400"></div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700" itemProp="description">
              {tour.overview}
            </p>
          </section>
          {/* Render all days dynamically */}
          {Object.keys(tour)
            .filter((key) =>
              key.match(
                /^(first|sec|third|fourth|fifth|sixth|seventh|eightth|last)$/
              )
            )
            .map((dayKey, idx) => (
              <section key={dayKey} className="space-y-4">
                <h3 className="text-2xl font-bold">{tour[dayKey]}</h3>
                {tour[`${dayKey}desc`] && (
                  <p className="text-black">{tour[`${dayKey}desc`]}</p>
                )}
              </section>
            ))}
          <div className="px-4 lg:px-16 w-full h-[4px] bg-orange-400"></div>

          <section className="flex flex-col items-start gap-6 mt-8">
            <div className="font-semibold text-xl lg:flex-row flex-col flex gap-4 lg:gap-10">
              <span className="text-2xl">Departure:</span>{" "}
              <span itemProp="departureLocation">{tour.departure}</span>
            </div>
            <div className="px-4 lg:px-16 w-full opacity-30 h-[1px] bg-orange-400"></div>
            <div className="font-semibold text-xl lg:flex-row flex-col flex gap-4 lg:gap-10">
              <span className="text-2xl">Departure Time:</span>{" "}
              <span itemProp="departureTime">{tour.departureTime}</span>
            </div>
            <div className="px-4 lg:px-16 w-full opacity-30 h-[1px] bg-orange-400"></div>
            <div className="font-semibold text-xl lg:flex-row flex-col flex gap-4 lg:gap-10">
              <span className="text-2xl">Return Time:</span>{" "}
              <span itemProp="returnTime">{tour.returnTime}</span>
            </div>
          </section>
          <div className="px-4 lg:px-16 w-full h-[4px] bg-orange-400"></div>

          <section className="flex flex-wrap justify-between gap-10 mt-8">
            <div>
              <h4 className="font-semibold text-2xl mb-2">Included</h4>
              <ul className="list-disc text-xl ml-6 decoration-amber-500 text-green-700">
                {tour.included?.map((item, i) => (
                  <li key={i} itemProp="includes">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-2xl mb-2">Not Included</h4>
              <ul className="list-disc text-xl ml-6 text-red-700">
                {tour.notIncluded?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}

export default Details;
