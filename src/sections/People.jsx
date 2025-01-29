import React from "react";

function People() {
  return (
    <div className="text-center mt-48">
      <div className="border-t border-black-500 pt-4"></div>
      <h1 className="text-3xl font-bold text-xl sm:text-3xl lg:text-4xl">What People Say About Us</h1>
      <p className="text-purple-600 text-base sm:text-lg md:text-xl">
        Discover heartfelt stories and testimonials from individuals <br />
        whose lives we've touched.
      </p>

      <div className="mt-12 bg-gray-100 p-4 sm:p-6">
        <marquee behavior="scroll" direction="left">
          {Array.from({ length: 10 }, (_, i) => (
            <span
              key={i}
              className="inline-block bg-white text-purple-800 font-bold mx-2 shadow-md mt-7 w-[240px] sm:w-[280px] h-[220px] sm:h-[250px] text-center p-4"
            >
              <i className="fa-solid fa-user">sabee'a</i>
              <p className="text-xs sm:text-sm">Lorem ipsum dolor sit ame reac</p>
              <p className="text-xs sm:text-sm">Lorem ipsum dolor sit ame reac</p>
              <p className="text-xs sm:text-sm">Lorem ipsum dolor sit ame reac</p>
              <p className="text-xs sm:text-sm">Lorem ipsum dolor sit ame reac</p>
              <p className="text-xs sm:text-sm">Lorem ipsum dolor sit ame reac</p>
            </span>
          ))}
        </marquee>
      </div>
    </div>
  );
}

export default People;
