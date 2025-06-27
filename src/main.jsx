import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import HeroPage from "./pages/HeroPage/HeroPage.jsx";
import Root from "./Root.jsx";
import AboutUs from "./pages/NavPages/AboutUs.jsx";
import Service from "./pages/NavPages/Service.jsx";
import CarBooking from "./pages/NavPages/CarBooking.jsx";
import Gallery from "./pages/NavPages/Gallery.jsx";
import Contact from "./pages/NavPages/Contact.jsx";
import PrivacyPolicy from "./pages/FooterPages/PrivacyPolicy.jsx";
import TermsService from "./pages/FooterPages/TermsService.jsx";
import DetailsPage from "./pages/NavPages/DetailsPage.jsx";
import Testimonials from "./pages/NavPages/Testimonials.jsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HeroPage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="service" element={<Service />} />
      <Route path="carBooking" element={<CarBooking />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact" element={<Contact />} />
      <Route path="detail/:id" element={<DetailsPage />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms-of-service" element={<TermsService />} />
      <Route path="testimonials" element={<Testimonials />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
