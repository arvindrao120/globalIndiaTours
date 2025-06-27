import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { galleryPhotos } from "../../assets/assets";
import { Helmet } from "react-helmet-async";

function Gallery() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <main
        className="min-h-screen bg-white text-black"
        aria-labelledby="gallery-heading"
      >
        <Helmet>
          <title>
            Car Gallery | Global India Tours – Luxury Car Rental & Tour Photos
          </title>
          <meta
            name="description"
            content="Browse our car gallery and see the fleet of luxury and budget vehicles available for your Rajasthan and India tours. Real photos from our journeys and happy customers."
          />
          <meta
            name="keywords"
            content="car gallery, travel photos, luxury cars, tempo traveller, Rajasthan, India, Global India Tours"
          />
          <link rel="canonical" href="https://yourdomain.com/gallery" />
        </Helmet>
        <div className="relative w-full py-10 lg:py-20">
          {/* Decorative background */}
          <div className="absolute inset-0 -z-10 w-full h-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
          </div>

          <div className="container mx-auto px-4">
            <motion.header
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h1
                id="gallery-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4245AD] text-center"
              >
                Car Gallery
                <motion.div
                  className="px-4 mx-auto lg:px-16 w-28 h-[2px] items-center bg-orange-400 mb-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                  style={{ originX: 0.5 }}
                ></motion.div>
              </h1>
              <p className="text-gray-500 text-center py-4 max-w-2xl mx-auto text-base md:text-lg">
                At{" "}
                <span className="text-lg text-orange-400">
                  Global India Travels
                </span>
                , we specialize in providing customized tour packages and
                dependable car rental services across India. Whether you're a
                solo traveler, a family on vacation, or a corporate group, we
                ensure a seamless and memorable travel experience tailored to
                your needs.
              </p>
            </motion.header>
            <section
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-4"
              aria-label="Car gallery images"
            >
              {galleryPhotos.map((item) => (
                <motion.figure
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-xl shadow-2xl  aspect-square bg-whit "
                  tabIndex={0}
                  aria-label={`Gallery image ${item.id}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt || `Car gallery image ${item.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {item.caption && (
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2 text-center">
                      {item.caption}
                    </figcaption>
                  )}
                </motion.figure>
              ))}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Gallery;
