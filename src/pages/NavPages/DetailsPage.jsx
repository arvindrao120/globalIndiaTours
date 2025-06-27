import React from "react";
import { useParams } from "react-router-dom";
import Details from "../../Components/Details";
import { Helmet } from "react-helmet-async";

function DetailsPage() {
  // Get the tour id from the URL params
  const { id } = useParams();

  return (
    <>
      

      <main
        className="w-full min-h-screen bg-white text-black"
        aria-labelledby="tour-details-heading"
      >
        <Helmet>
        <title>Tour Details | Global India Tours</title>
        <meta
          name="description"
          content="Explore detailed information about this tour package from Global India Tours. Discover itinerary, inclusions, pricing, and more for your next adventure in India."
        />
        <meta
          name="keywords"
          content="tour details, India tour, Rajasthan tour, package details, Global India Tours"
        />
        <link rel="canonical" href={`https://yourdomain.com/detail/${id}`} />
      </Helmet>
        <section
          className="max-w-full  mx-auto px-4 sm:px-8 py-4"
          aria-label="Tour Information"
        >
          <Details tourId={id} />
        </section>
      </main>
    </>
  );
}

export default DetailsPage;
