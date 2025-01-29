import React from "react";
import chairman from "../assets/chairman.webp";

const founder = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-gray-50">
    
      <div className="relative">

        <img
          src={chairman}
          alt="founder"
          className="w-80 h-auto rounded-md object-cover z-100000"
        />
     
        <div className="absolute top-4 left-4 w-80 h-auto bg-purple-100 rounded-md z-0"></div>
      </div>

      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">
          Word From our Founder
        </h2>
        <p className="text-gray-600 italic mb-6">
          “I envision a future where every individual regardless of their
          socio-economic background has unrestricted access to quality
          education, comprehensive healthcare, and meaningful economic
          opportunities. Our goal is to create thriving, empowered communities
          where everyone can live with dignity and achieve their full
          potential.“
        </p>
        <div>
          <p className="font-semibold text-lg text-gray-800">Dr. Bala Wunti</p>
          <p className="text-purple-600">
            Chairman of Wunti Al-Khair Foundation
          </p>
        </div>
      </div>
    </div>
  );
};

export default founder;
