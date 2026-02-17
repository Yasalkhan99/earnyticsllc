"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl font-bold text-white">
              Earnytics <span className="text-orange-500">LLC</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-3 text-sm">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-5 py-2 rounded-full text-white hover:bg-white/10 hover:text-orange-500 transition-all duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-5 py-2 rounded-full text-white hover:bg-white/10 hover:text-orange-500 transition-all duration-300 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-5 py-2 rounded-full text-white hover:bg-white/10 hover:text-orange-500 transition-all duration-300 font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="px-5 py-2 rounded-full text-white hover:bg-white/10 hover:text-orange-500 transition-all duration-300 font-medium"
            >
              Pricing
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <a href="tel:+18472087685">
              <button className="bg-transparent border-2 border-white/50 hover:border-white text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>📞</span>
                <span>Call Now</span>
              </button>
            </a>
            <a href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
