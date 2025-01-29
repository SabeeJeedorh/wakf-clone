import React from "react";
import sdg1 from "../assets/sdg1.jpg";
import sdg2 from "../assets/sdg2.jpg";
import sdg3 from "../assets/sdg3.jpg";
import sdg4 from "../assets/sdg4.jpg";
import sdg5 from "../assets/sdg5.jpg";
import sdg6 from "../assets/sdg6.jpg";

function Goals() {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold text-center p-8 mt-6 ">
        Our Commitment to Sustainable Development Goals
      </h1>
      <p className="text-lg text-gray-500 text-center mt-4">
        At Wunti Al-Khair Foundation, we're dedicated to advancing these key <br />
        Sustainable Development Goals, working towards a better future for all.
      </p>
      <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
        <img
          src={sdg1}
          alt="sdgs logo"
          className="w-[120px] sm:w-[150px] h-[180px] sm:h-[200px] hover:scale-105 transition duration-300"
        />
        <img
          src={sdg2}
          alt="sdgs logo"
          className="w-[120px] sm:w-[150px] h-[180px] sm:h-[200px] hover:scale-105 transition duration-300"
        />
        <img
          src={sdg3}
          alt="sdgs logo"
          className="w-[120px] sm:w-[150px] h-[180px] sm:h-[200px] hover:scale-105 transition duration-300"
        />
        <img
          src={sdg4}
          alt="sdgs logo"
          className="w-[120px] sm:w-[150px] h-[180px] sm:h-[200px] hover:scale-105 transition duration-300"
        />
        <img
          src={sdg5}
          alt="sdgs logo"
          className="w-[120px] sm:w-[150px] h-[180px] sm:h-[200px] hover:scale-105 transition duration-300"
        />
        <img
          src={sdg6}
          alt="sdgs logo"
          className="w-[120px] sm:w-[150px] h-[180px] sm:h-[200px] hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  );
}

export default Goals;
