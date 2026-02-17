"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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
      const offset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleNavClick = (sectionId: string | null) => {
    if (isHomePage) {
      if (sectionId) scrollToSection(sectionId);
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinkClass =
    "px-5 py-2 rounded-full text-white hover:bg-white/10 hover:text-orange-500 transition-all duration-300 font-medium";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {isHomePage ? (
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src="/images/arnytics llc (1).png"
                alt="Earnytics LLC"
                className="h-16 md:h-20 w-auto"
              />
            </div>
          ) : (
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/images/arnytics llc (1).png"
                alt="Earnytics LLC"
                className="h-16 md:h-20 w-auto"
              />
            </Link>
          )}
          <div className="hidden md:flex space-x-3 text-sm">
            {isHomePage ? (
              <>
                <button
                  onClick={() => handleNavClick(null)}
                  className={navLinkClass}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick("services")}
                  className={navLinkClass}
                >
                  Services
                </button>
                <button
                  onClick={() => handleNavClick("portfolio")}
                  className={navLinkClass}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => handleNavClick("pricing")}
                  className={navLinkClass}
                >
                  Pricing
                </button>
              </>
            ) : (
              <>
                <Link href="/" className={navLinkClass}>
                  Home
                </Link>
                <Link href="/#services" className={navLinkClass}>
                  Services
                </Link>
                <Link href="/#portfolio" className={navLinkClass}>
                  Portfolio
                </Link>
                <Link href="/#pricing" className={navLinkClass}>
                  Pricing
                </Link>
              </>
            )}
          </div>
          <div className="flex items-center space-x-3">
            <a href="tel:+18472087685">
              <button className="bg-transparent border-2 border-white/50 hover:border-white text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>📞</span>
                <span>Call Now</span>
              </button>
            </a>
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
