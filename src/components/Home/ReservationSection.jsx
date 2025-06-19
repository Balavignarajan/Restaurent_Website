import React from "react";

const ReservationSection = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center w-full  space-y-4 text-center "
        data-aos="fade-right"
      >
        <p className="text-lg text-[#d3a971]">Book Your Table</p>
        <h1 className="text-3xl md:text-4xl text-gray-900">
          Make A Reservation
        </h1>

        <img
          src="/images/shape(welcome).png"
          alt="MyRestaurant Logo"
          className="h-4 w-12 mx-auto lg:mx-0 text-center"
        />

        <p className="text-gray-500 leading-relaxed tracking-wide max-w-xl mx-auto my-6">
          You can book your table online easily in just a couple of minutes.
          <br></br> We take reservations for lunch, just check the availability
          of your <br></br> table.
        </p>
      </div>
      <form className="max-w-4xl mx-auto p-6 bg-white border border-[#d3a971] rounded-md shadow-md mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full h-8 bg-gray-100 p-2 placeholder:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full h-8 bg-gray-100 p-2 placeholder:text-sm  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full h-8 p-2 placeholder:text-sm  border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
        </div>

        <div className="mt-4">
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            required
            className="w-full h-20 p-3 bg-gray-100  placeholder:text-sm  border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="w-full h-10  px-6 py-2 text-gray-200 font-bold text-sm bg-black hover:bg-[#d3a971] rounded-md transition-colors duration-300"
          >
            Find Table
          </button>
        </div>
      </form>

      {/* Excellence section  */}
      <div
        className="flex flex-col justify-center items-center w-full  space-y-4 text-center mt-10"
        data-aos="fade-right"
      >
        <h1 className="text-3xl md:text-4xl text-gray-900">Excellence</h1>

        <img
          src="/images/shape(welcome).png"
          alt="MyRestaurant Logo"
          className="h-4 w-12 mx-auto lg:mx-0 text-center"
        />

        <p className="text-gray-500 leading-relaxed tracking-wide max-w-xl mx-auto my-6">
          We are blessed enough to be honoured with great awards from <br></br>{" "}
          food critics and organizations all over the Universe.
        </p>
        <p className="text-lg text-[#d3a971]">Order Now</p>
      </div>

      {/* images  */}
      <div className="flex justify-center items-center gap-12">
        <img
          src="/images/zomato-logo.png"
          alt="MyRestaurant Logo"
          className=" mx-auto lg:mx-0 text-center"
        />
        <img
          src="/images/swiggy.png"
          alt="MyRestaurant Logo"
          className=" mx-auto lg:mx-0 text-center"
        />
        <img
          src="/images/Dineout-Logo.png"
          alt="MyRestaurant Logo"
          className=" mx-auto lg:mx-0 text-center"
        />
      </div>

      <div className="mt-20">

      </div>
    </>
  );
};

export default ReservationSection;
