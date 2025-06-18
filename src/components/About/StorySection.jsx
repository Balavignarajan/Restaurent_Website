import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const StorySection = () => {
  return (
    <>
      <div>
        <div className="relative w-full h-[60vh]">
          <img
            src="/images/ABOUT-1.jpg"
            alt="good food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 "></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-white text-2xl md:text-5xl font-bold mt-44 drop-shadow">
              Our Story
            </h2>
            <div className="flex justify-center items-center gap-1 mt-28">
              <a
                href="/"
                className="text-white text-sm cursor-pointer hover:text-[#d3a971]"
              >
                Home
              </a>
              <span className="text-white text-lg">
                <MdKeyboardArrowRight />
              </span>
              <a
                href="/about"
                className="text-white text-sm cursor-pointer hover:text-[#d3a971]"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Welcome section  */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-10 max-w-7xl mx-auto">
        {/* Text & Logo Section */}
        <div
          className="flex flex-col justify-center items-center w-full lg:w-1/2 space-y-4 text-center lg:text-left"
          data-aos="fade-right"
        >
          <p className="text-lg text-[#d3a971]">Welcome To The India Restaurant</p>
          <h1 className="text-3xl md:text-4xl  text-gray-900 text-center">
            Delicious Food, Friendly Staff,<br></br> Cozy Atmosphere & <br></br> Positive Emotions!

          </h1>

          <img
            src="/images/shape(welcome).png"
            alt="MyRestaurant Logo"
            className="h-4 w-12 mx-auto lg:mx-0 text-center"
          />

        
        </div>
      </div>

      
    </>
  );
};

export default StorySection;
