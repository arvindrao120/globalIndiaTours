import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import WhatsAppBtn from './Components/WhatsAppBtn/WhatsAppBtn';

// Animated Loader Component
function AnimatedLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#060C17] via-[#1D1C39] to-[#CB8723] transition-all duration-700">
      <div className="relative flex items-center justify-center">
        {/* Glowing animated border */}
        <div className="absolute w-40 h-40 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-400 to-purple-600 blur-3xl opacity-70 animate-pulse"></div>
        {/* Spinning loader with gradient */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-400 to-purple-600 flex items-center justify-center animate-spin shadow-2xl border-8 border-t-transparent border-b-transparent border-l-yellow-400 border-r-purple-600"></div>
        {/* Center logo/text */}
        <span className="absolute text-5xl font-extrabold text-white tracking-widest animate-bounce drop-shadow-lg select-none">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-600 bg-clip-text text-transparent"></span>
        </span>
      </div>
      <div className="mt-10 text-yellow-200 text-2xl tracking-widest font-semibold animate-pulse flex items-center gap-3">
        <svg className="w-7 h-7 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
        <span className="uppercase tracking-widest">Loading...</span>
      </div>
    </div>
  );
}

// Custom slow spin animation (add to your tailwind.config.js if not present)
// .animate-spin-slow { animation: spin 1.5s linear infinite; }

function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for at least 1.2s, then show content
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <AnimatedLoader />}
      <div className={loading ? 'opacity-0 pointer-events-none select-none' : 'opacity-100 transition-opacity duration-700'}>
        <header>
          <Navbar />
        </header>
        <main aria-label="Main Content">
          <Outlet />
        </main>
        <div aria-hidden="true">
          <WhatsAppBtn />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Root;