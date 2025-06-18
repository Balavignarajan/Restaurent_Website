import React from "react";

const MenuItems = () => {
  return (
    <>
      {/* Menu Navbar section  */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14 text-sm sm:text-base md:text-lg font-bold cursor-pointer">
        {[
          "All",
          "Our Speciality",
          "Soups",
          "Snacks",
          "Tandoori & Kebab",
          "Kebab in Butter Masala",
          "Biryani",
        ].map((item, index) => (
          <div
            key={index}
            className="relative group transition-colors duration-300"
          >
            <label className="text-gray-800  transition-colors duration-300">
              {item}
            </label>
            <span className="pointer-events-none absolute left-1/2 bottom-0 top-7 h-[4px] w-full max-w-0 bg-[#d3a971] transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:max-w-full"></span>
          </div>
        ))}
      </div>

      <br></br>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14 text-sm sm:text-base md:text-lg font-bold cursor-pointer">
        {[
          "Mutton in Gravy",
          "Chicken in Gravy",
          "Vegetarian",
          "Rice, Roti & Naan",
          "Chinese",
          "Deserts",
          "Mocktails",
        ].map((item, index) => (
          <div
            key={index}
            className="relative group transition-colors duration-300"
          >
            <label className="text-gray-800  transition-colors duration-300">
              {item}
            </label>
            <span className="pointer-events-none absolute left-1/2 bottom-0 top-7 h-[4px] w-full max-w-0 bg-[#d3a971] transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:max-w-full"></span>
          </div>
        ))}
      </div>

      {/* Menu Images  */}

      <div className="mt-10 py-10 flex flex-col gap-10 items-center">
        <div>
          <img
            src="/images/Menu/menu1.webp"
            alt="Menu Item"
            className="h-auto w-1/2 mx-auto"
          />
        </div>
        <div>
          <img
            src="/images/Menu/menu2.webp"
            alt="Menu Item"
            className="h-auto w-1/2 mx-auto"
          />
        </div>
        <div>
          <img
            src="/images/Menu/menu3.webp"
            alt="Menu Item"
            className="h-auto w-1/2 mx-auto"
          />
        </div>
        <div>
          <img
            src="/images/Menu/menu-4.webp"
            alt="Menu Item"
            className="h-auto w-1/2 mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default MenuItems;
