import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/bundle";

const slides = [
  {
    image: "baneer-1.jpg",
    title: "Delicious South Indian Meals",
    button: "View Menu",
    link: "/menu",
  },
  {
    image: "baneer-2.jpg",
    title: "Authentic Taste of Spices",
    button: "Explore Dishes",
    link: "#dishes",
  },
  {
    image: "baneer-3.jpg",
    title: "Experience Fine Dining",
    button: "Reserve Table",
    link: "#reservation",
  },
  {
    image: "baneer-4.jpg",
    title: "Traditional & Modern Fusion",
    button: "See Specials",
    link: "#specials",
  },
  {
    image: "baneer-5.jpg",
    title: "Welcome to Our Family Restaurant",
    button: "Order Now",
    link: "#order",
  },
];

const HomeSwiper = () => {
  return (
    <div className="relative w-full h-[100vh]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[100vh]">
              <img
                src={`/images/${slide.image}`}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/50 "></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-white text-2xl md:text-5xl font-bold mb-4 drop-shadow">
                  {slide.title}
                </h2>
                <a
                  href={slide.link}
                  className="bg-white text-black px-6 py-2 rounded-full text-sm md:text-base font-semibold hover:bg-yellow-400 transition"
                >
                  {slide.button}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
