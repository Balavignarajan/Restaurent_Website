import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Welcome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-10 max-w-7xl mx-auto">
        {/* Text & Logo Section */}
        <div
          className="flex flex-col justify-center items-center w-full lg:w-1/2 space-y-4 text-center lg:text-left"
          data-aos="fade-right"
        >
          <p className="text-lg text-[#d3a971]">Welcome to</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Indian Restaurant
          </h1>

          <img
            src="/images/shape(welcome).png"
            alt="MyRestaurant Logo"
            className="h-4 w-12 mx-auto lg:mx-0 text-center"
          />

          <p
            className="text-gray-500 leading-relaxed tracking-wide max-w-xl mx-auto my-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            India Restaurant has been serving delightful <br />
            experiences through the art of cooking for four <br />
            decades. A cozy, relaxing space combined with <br />
            flavourful dishes makes it a first choice for every foodie <br />
            in town. It provides a wide range of items to choose <br />
            from and lets everyone indulge in an experience of <br />
            pleasing their taste buds.
          </p>

          <p
            className="text-gray-500 leading-relaxed tracking-wide max-w-xl mx-auto my-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We provide a wide range of cuisines and dishes to <br />
            choose from so that every foodie in town has their best <br />
            experience here.
          </p>

          <p
            className="text-gray-500 leading-relaxed tracking-wide max-w-xl mx-auto my-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We are known to be the best Mughlai eatery in Kolkata. <br />
            We have always won the hearts of our customers with <br />
            appetizing dishes and friendly behaviour. It is the best <br />
            choice for everyone who wants to enjoy the best <br />
            quality food at reasonable prices.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 mt-8 lg:mt-0"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <img
            src="/images/INTERIOR(welcome).jpg"
            alt="Restaurant Interior"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* Memories Food section */}

      <div>
        <div className="relative w-full h-[40vh]">
          <img
            src="/images/eat-food(welcome).jpg"
            alt="good food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 "></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-white pb-2">We Create Delicious Memories</p>
            <h2 className="text-white text-2xl md:text-5xl font-bold mb-4 drop-shadow">
              Eat Good Feel Good
            </h2>
          </div>
        </div>
      </div>

      {/* Our speciality Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-10 max-w-7xl mx-auto">
        {/* Text & Logo Section */}
        <div
          className="flex flex-col justify-center items-center w-full lg:w-1/2 space-y-4 text-center lg:text-left"
          data-aos="fade-right"
        >
          <p className="text-lg text-[#d3a971]">India Restaurant</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Speciality
          </h1>

          <img
            src="/images/shape(welcome).png"
            alt="MyRestaurant Logo"
            className="h-4 w-12 mx-auto lg:mx-0 text-center"
          />

          <p className="text-gray-400 leading-relaxed tracking-wide max-w-xl mx-auto my-6 text-center">
            We provide a wide range of cuisines and dishes to choose from so
            that every foodie in town has their best experience with us.
          </p>
        </div>
      </div>
      {/* food cards */}
      <div className="flex justify-center items-center gap-7 relative">
        {/* Image 1 */}
        <div className="relative h-80 w-72 overflow-hidden">
          <img
            src="/images/MUGALI.jpg"
            alt="Mughlai"
            className="h-full w-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
          />

          <p className="absolute bottom-0 w-full text-center bg-gradient-to-t from-black/70 to-transparent font-bold text-2xl text-white py-2">
            Mughlai
          </p>
        </div>

        {/* Image 2 */}
        <div className="relative h-80 w-72 overflow-hidden">
          <img
            src="/images/INDIAN.jpg"
            alt="Indian"
            className="h-full w-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
          />
          <p className="absolute bottom-0 w-full text-center bg-gradient-to-t from-black/70 to-transparent font-bold text-2xl text-white py-2">
            Indian
          </p>
        </div>

        {/* Image 3 */}
        <div className="relative h-80 w-72 overflow-hidden">
          <img
            src="/images/CHINESE.jpg"
            alt="Chinese"
            className="h-full w-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
          />
          <p className="absolute bottom-0 w-full text-center bg-gradient-to-t from-black/70 to-transparent font-bold text-2xl text-white py-2">
            Chinese
          </p>
        </div>
      </div>
    </>
  );
};

export default Welcome;
