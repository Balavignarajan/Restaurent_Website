import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });

    const handleScroll = () => {
      AOS.refresh();
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mapping labels to their respective hrefs
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white text-black shadow-lg" : " text-white "
      }`}
      data-aos="fade-down"
    >
      <nav className="px-2 py-4 flex justify-around items-center h-20">
        <div className="font-bold text-xl">
          <img
            src={scrolled ? "/images/white-black.png" : "/images/logo.png"}
            alt="MyRestaurant Logo"
            className="h-28 w-28 transition-all duration-300"
          />
        </div>
        <div className="space-x-10 text-center">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className={`relative inline-block font-bold text-xs group transition-colors duration-300 ${
                scrolled
                  ? "text-black hover:text-[#d3a971]"
                  : "text-white hover:text-[#d3a971]"
              }`}
            >
              {link.label}
              <span className="pointer-events-none absolute left-1/2 bottom-0 top-8 h-[2px] w-full max-w-0 bg-[#d3a971] transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:max-w-full"></span>
            </a>
          ))}
        </div>
      </nav>
      <hr></hr>
    </div>
  );
};

export default Navbar;
