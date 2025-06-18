import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-8 py-16 lg:py-2">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo and Description */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center">
              <div className="relative">
                <img
                  src="/images/logo.png"
                  alt="MyRestaurant Logo"
                  className="h-40 w-40"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0 pb-2">
              India Restaurant is known for creating unforgettable food
              experiences. We believe that food is therapy and try to put up a
              smile on your face with our culinary skills.
            </p>
            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start space-x-4 pb-10">
              <a
                href="#"
                className="w-8 h-8  hover:bg-orange-400 transition-colors duration-300 rounded flex items-center justify-center"
              >
                <FaInstagram className="text-white text-sm" />
              </a>
              <a
                href="#"
                className="w-8 h-8  hover:bg-orange-400 transition-colors duration-300 rounded flex items-center justify-center"
              >
                <FaFacebookF className="text-white text-sm" />
              </a>
              <a
                href="#"
                className="w-8 h-8  hover:bg-orange-400 transition-colors duration-300 rounded flex items-center justify-center"
              >
                <FaTwitter className="text-white text-sm" />
              </a>
            </div>
          </div>

          {/* Our Addresses */}
          <div className="text-center lg:text-left mt-16">
            <h3 className="text-xl font-semibold mb-8 text-white">
              Our Addresses
            </h3>
            <div className="space-y-8">
              <div className="text-sm text-gray-300 leading-relaxed">
                <p>34, Karl Marx Sarani, Khidderpore,</p>
                <p>Kolkata - 700023</p>
              </div>
              <div className="text-sm text-gray-300 leading-relaxed">
                <p>9, Kazi Nazrul Islam Avenue</p>
                <p>Kaikhali Crossing,</p>
                <p>Kolkata- 700052</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="text-center lg:text-left mt-16">
            <h3 className="text-xl font-semibold mb-8 text-white">
              Business Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center max-w-xs mx-auto lg:mx-0">
                <span className="text-gray-300">Mon:</span>
                <span className="text-gray-300">11:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center max-w-xs mx-auto lg:mx-0">
                <span className="text-gray-300">Tue:</span>
                <span className="text-gray-300">11:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center max-w-xs mx-auto lg:mx-0">
                <span className="text-gray-300">Wed:</span>
                <span className="text-gray-300">11:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center max-w-xs mx-auto lg:mx-0">
                <span className="text-gray-300">Thu:</span>
                <span className="text-gray-300">11:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center max-w-xs mx-auto lg:mx-0">
                <span className="text-gray-300">Fri:</span>
                <span className="text-gray-300">11:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center max-w-xs mx-auto lg:mx-0">
                <span className="text-gray-300">Sat:</span>
                <span className="text-gray-300">11:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center max-w-xs mx-auto lg:mx-0">
                <span className="text-gray-300">Sun:</span>
                <span className="text-gray-300">11:00 AM – 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="text-center lg:text-left mt-16">
            <h3 className="text-xl font-semibold mb-8 text-white">
              Contact Details
            </h3>
            <div className="space-y-4">
              {/* Khidderpore */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg">
                  Khidderpore
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-center lg:justify-start items-center">
                    <FaPhoneAlt className="text-gray-400 mr-3 text-xs" />
                    <span className="text-gray-300">+91 8481848484</span>
                  </div>
                  <div className="flex justify-center lg:justify-start items-center">
                    <FaPhoneAlt className="text-gray-400 mr-3 text-xs" />
                    <span className="text-gray-300">+91 8420533005</span>
                  </div>
                </div>
              </div>

              {/* Kaikhali */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg">
                  Kaikhali
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-center lg:justify-start items-center">
                    <FaPhoneAlt className="text-gray-400 mr-3 text-xs" />
                    <span className="text-gray-300">+033 4804 9142</span>
                  </div>
                  <div className="flex justify-center lg:justify-start items-center">
                    <FaPhoneAlt className="text-gray-400 mr-3 text-xs" />
                    <span className="text-gray-300">+91 99039 80011</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation and Copyright */}
      <div className="border-t bord bg-balck">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center space-x-8 lg:space-x-12 mb-4">
            <a
              href="#"
              className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm font-medium"
            >
              About Us
            </a>
            <a
              href="/menu"
              className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm font-medium"
            >
              Menu
            </a>
            <a
              href="/gallery"
              className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm font-medium"
            >
              Gallery
            </a>
            <a
              href="/contact"
              className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm font-medium"
            >
              Contact Us
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2022 India Restaurant. | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
