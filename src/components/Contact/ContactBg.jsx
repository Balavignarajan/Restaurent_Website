import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactBg = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <img
          src="/images/gallery/CONTACT-1.jpeg"
          alt="good food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow mt-36"
            data-aos="fade-down"
          >
            Contact Us
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
              href="/contact"
              className="text-white text-sm md:text-base hover:text-[#d3a971] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      {/* Contact Section */}
      <div className="bg-white text-gray-700 py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            {/* Intro Text */}
            <div>
              <p className="text-md text-gray-500">Feel free to reach us.</p>
              <p className="text-gray-500 mt-2">
                We are all ears for your feedback and queries. Contact us now,
                <br className="hidden sm:block" /> and we will get back to you.
              </p>
            </div>

            {/* Addresses + Contact Info Row */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Our Addresses */}
              <div className="flex-1">
                <h4 className="font-bold text-black text-base mb-1">
                  Our Addresses
                </h4>
                <p className="text-gray-500">
                  34, Karl Marx Sarani, Khidderpore,
                  <br /> Kolkata - 700023
                </p>
                <p className="mt-2 text-gray-500">
                  9, Kazi Nazrul Islam Avenue,
                  <br /> Kaikhali Crossing, Kolkata - 700052
                </p>
                <br></br>
                {/* Social Icons */}
                <div>
                  <h4 className="font-semibold text-base mb-2">Follow Us</h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="p-2 bg-[#d3a971] rounded-full text-white"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-[#d3a971] rounded-full text-white"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-[#d3a971] rounded-full text-white"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>

              {/* Call Us Now */}
              <div className="flex-1">
                <h4 className="font-bold text-black text-base mb-1">
                  Email Id:
                </h4>
                <p className="text-gray-500 break-words">
                  info@indianrestaurant.in
                </p>

                <br></br>
                <h4 className="font-bold text-black text-base mb-1">
                  Call Us Now
                </h4>
                <p className="mt-2 font-bold text-black">Khidderpore</p>
                <p className="flex items-center gap-2 mt-2">
                  <FaPhoneAlt className="text-[#d3a971]" /> +91 8481848484
                </p>
                <p className="flex items-center gap-2">
                  <FaPhoneAlt className="text-[#d3a971]" /> +91 8420533005
                </p>

                <p className="mt-4 font-bold text-black">Kaikhali</p>
                <p className="flex items-center gap-2 mt-2">
                  <FaPhoneAlt className="text-[#d3a971]" /> +033 4804 9142
                </p>
                <p className="flex items-center gap-2">
                  <FaPhoneAlt className="text-[#d3a971]" /> +91 99039 80011
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Opening Times */}
          <div className="w-full lg:w-[320px] bg-[#1f1f1f] text-white rounded-lg border border-[#d3a971] p-6 shadow-md">
            <h3 className="text-xl font-bold border-b border-[#d3a971] pb-3 mb-4 text-center">
              Opening Times
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <li key={day} className="flex justify-between">
                  <span>{day}:</span>
                  <span>11:00 AM – 11:00 PM</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-center">
              <p className="text-sm text-[#d3a971] mb-1">Call Us Now</p>
              <p className="text-lg font-semibold text-[#d3a971]">8481848484</p>
            </div>
          </div>
        </div>
      </div>

      {/* // Form section  */}
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

      {/* Map Section */}
      <div className="mt-10">
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62197.03778352245!2d80.23555306948498!3d13.015610354811498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526730e2dd6dbb%3A0xcaca09067a304bf3!2sKailash%20Parbat-%20Pure%20Vegetarian%20Restaurant!5e0!3m2!1sen!2sin!4v1750244196916!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md shadow-md"
          ></iframe>
        </div>
      </div>

      <div className="mt-5"></div>
    </>
  );
};

export default ContactBg;
