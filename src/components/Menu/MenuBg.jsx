import React, { useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const MenuBg = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <img
          src="/images/Menu/MENU.jpg"
          alt="good food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow mt-36"
            data-aos="fade-down"
          >
            Our Menu
          </h2>

          <div
            className="flex justify-center items-center gap-1 mt-28"
            data-aos="fade-up"
          >
            <a
              href="/"
              className="text-white text-sm md:text-base hover:text-[#d3a971] transition-colors"
            >
              Home
            </a>
            <span className="text-white text-lg">
              <MdKeyboardArrowRight />
            </span>
            <a
              href="/menu"
              className="text-white text-sm md:text-base hover:text-[#d3a971] transition-colors"
            >
              Menu
            </a>
          </div>
        </div>
      </div>

      {/* Menu Heading Section */}
      <div className="flex flex-col items-center justify-center px-4 py-12">
        <div
          className="w-full max-w-2xl text-center space-y-6"
          data-aos="fade-up"
        >
          <p className="text-md text-[#d3a971] tracking-wider">
            Taste The Best
          </p>

          <h1 className="text-3xl sm:text-4xl text-gray-900 font-semibold">
            Discover Our Menu
          </h1>

          <img
            src="/images/shape(welcome).png"
            alt="MyRestaurant Logo"
            className="h-4 w-12 mx-auto"
          />

          <p className="text-gray-500 leading-relaxed tracking-wide text-sm sm:text-base">
            Even if you're not a great chef, there's nothing to stop you
            understanding the difference between what tastes good and what
            doesn't.
          </p>
        </div>
      </div>
    </>
  );
};

export default MenuBg;
