import React from "react";

const AboutSection2 = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6  max-w-7xl mx-auto">
        {/* Text & Logo Section */}
        <div
          className="flex flex-col justify-center items-center w-full lg:w-1/2 text-center lg:text-left"
          data-aos="fade-right"
        >
          <img
            src="/images/white-black.png"
            alt="MyRestaurant Logo"
            className="h-28 w-28  mx-auto lg:mx-0 mb-2"
          />

          <p
            className="text-gray-500 leading-relaxed tracking-wide max-w-md text-center text-sm mx-auto mb-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Haji Syed Mohammad Kalim built a small eatery more than 40 years ago
            to provide lip-smacking Mughlai dishes at pocket-friendly prices.
            The place garnered immense popularity in no time because they
            delivered palatable delicacies consistently at a very reasonable
            range. Today the proprietors of India Restaurant, Syed Anwar Azeem,
            Syed Misbah Kalim, and Syed Shahmeer Kalim, took forward the legacy
            of their father to a different dimension. They have collected their
            father’s dream and changed it into a beautiful reality. The India
            restaurant currently provides a delightful and vibrant ambiance
            having a seating arrangement for 300 people. The restaurant now has
            added heterogeneity in its menu with Indian and Chinese cuisine.
            This place still holds its roots and swears by serving the best
            biryani in town. It is also exploring and experimenting with other
            flavours and cuisines to give new aspects to the place.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="w-96 mt-8 lg:mt-0"
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

      {/* Mission section  */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6  max-w-4xl mx-auto">
        {/* Text & Logo Section */}
        <div
          className="flex flex-col justify-center items-center w-full lg:w-1/2 text-center lg:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-3xl md:text-4xl  text-gray-900">Our Mission</h1>

          <img
            src="/images/shape(welcome).png"
            alt="MyRestaurant Logo"
            className="h-2 w-10 mx-auto lg:mx-0 text-center mt-4"
          />

          <p
            className="text-gray-500 leading-relaxed tracking-wide max-w-xs text-sm mx-auto my-6 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            To help our customers enjoy simple edible pleasures and reach their
            hearts through their stomachs.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="w-96 mt-8 lg:mt-10"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <img
            src="/images/vision-banner.jpg"
            alt="Restaurant Interior"
            className="w-full h-auto  shadow-lg"
          />
        </div>
        <div
          className="flex flex-col justify-center items-center w-full lg:w-1/2 text-center lg:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-3xl md:text-4xl  text-gray-900">Our Vision</h1>

          <img
            src="/images/shape(welcome).png"
            alt="MyRestaurant Logo"
            className="h-2 w-10 mx-auto lg:mx-0 text-center mt-4"
          />

          <p
            className="text-gray-500 leading-relaxed tracking-wide max-w-xs text-sm mx-auto my-6 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            To create an ultimate destination for every food lover in town and
            lead them to an extraordinary food journey.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSection2;
