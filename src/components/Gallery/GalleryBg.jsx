import React, { useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const galleryImages = [
  "/images/gallery/g1.jpg",
  "/images/gallery/g2.jpg",
  "/images/gallery/g3.jpg",
  "/images/gallery/g4.jpg",
  "/images/gallery/g5.jpg",
  "/images/gallery/g6.jpg",
  "/images/gallery/g7.jpg",
  "/images/gallery/g8.jpg",
  "/images/gallery/g9.jpg",
  "/images/gallery/g10.jpg",
  "/images/gallery/g11.jpg",
  "/images/gallery/g12.jpg",
  "/images/gallery/g13.jpg",
  "/images/gallery/g14.jpg",
  "/images/gallery/g15.jpg",
  "/images/gallery/g16.jpg",
  "/images/gallery/g18.jpg",
];

const GalleryBg = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <img
          src="/images/gallery/galleryBg.jpg"
          alt="good food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow mt-36"
            data-aos="fade-down"
          >
            Our Gallery
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
              href="/gallery"
              className="text-white text-sm md:text-base hover:text-[#d3a971] transition-colors"
            >
              Gallery
            </a>
          </div>
        </div>
      </div>

      {/* //Gallery images  */}
      <div className="mt-20 flex flex-wrap justify-center gap-4 px-4">
        {galleryImages.map((src, index) => (
          <div key={index} className="sm:w-1/2  lg:w-1/4 flex justify-center">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="h-32 sm:h-40 md:h-48 lg:h-64 object-cover rounded-lg shadow-md w-full max-w-[300px]"
            />
          </div>
        ))}
      </div>

      <div className="mt-10"></div>
    </>
  );
};

export default GalleryBg;
