import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom'; // Use react-router-dom for web apps
import WhatsAppBtn from './Components/WhatsAppBtn/WhatsAppBtn';

function Root() {
  return (
    <>
      {/* Semantic header for SEO */}
      <header>
        <Navbar />
      </header>
      {/* Main content area */}
      <main aria-label="Main Content">
        <Outlet />
      </main>
      {/* WhatsApp floating button (aria-hidden for screen readers) */}
      <div aria-hidden="true">
        <WhatsAppBtn />
      </div>
      {/* Semantic footer for SEO */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Root;