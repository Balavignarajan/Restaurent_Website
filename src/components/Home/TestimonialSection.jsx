import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Jithes Media",
    review: "This food was awesome! The flavors were spot on.",
    image: "/images/review-1.png",
  },
  {
    id: 2,
    name: "Anya Thomas",
    review: "Great experience! Loved the ambiance and the food.",
    image: "/images/review-2.png",
  },
  {
    id: 3,
    name: "Rahul Menon",
    review: "Excellent service and delicious meals. Highly recommended!",
    image: "/images/review-1.png",
  },
  {
    id: 4,
    name: "Sophia Alex",
    review: "The spices were perfect and service was top-notch!",
    image: "/images/review-2.png",
  },
  {
    id: 5,
    name: "Mohan Das",
    review: "Absolutely loved it. Coming back again!",
    image: "/images/review-1.png",
  },
];

const TestimonialSection = () => {
  return (
    <>
      <div>
        <div className="relative w-full h-[90vh]">
          <img
            src="/images/TESTIMONIAL.jpg"
            alt="good food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 "></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-[#d3a971] pb-2">People Talk</p>
            <h2 className="text-white text-xl md:text-5xl  mb-4 drop-shadow">
              Our Testimonial
            </h2>
            <img
              src="/images/shape(welcome).png"
              alt="MyRestaurant Logo"
              className="h-4 w-12 mx-auto lg:mx-0 text-center"
            />
            {/* Review Section  */}
            <div className="w-full px-4 py-10 ">
              <div className="max-w-4xl mx-auto">
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={3}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="rounded-xl"
                >
                  {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                      <div className="bg-gray-100 rounded-lg shadow-md p-6 h-64 flex flex-col justify-between items-center text-center">
                        <div className="text-yellow-400 flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-4">{review.review}</p>
                        <img
                          src={review.image}
                          alt={review.name}
                          className="h-12 w-12 rounded-full mb-2"
                        />
                        <span className="font-semibold text-gray-900 text-lg">
                          {review.name}
                        </span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
