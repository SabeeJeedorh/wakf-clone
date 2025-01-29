import React from "react";
import flowerImage from "../assets/flower.jpg";

function Hero() {
  return (
    <div
      className="h-screen p-6 md:p-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${flowerImage})` }}
    >
      <div className="flex flex-grow items-center mt-9 text-left pt-24">
        <div className=" max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 leading-tight text-white">
            Empowering Communities
          </h1>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight text-white">
            Igniting Hope.
          </h2>
          <p className="text-base sm:text-lg text-gray-100">
            We are dedicated to driving lasting change through education,
            healthcare, community development, and economic empowerment.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-5 mt-6 space-y-4 sm:space-y-0">
            <button className="text-white bg-purple-900 transition duration-200 px-10 sm:px-20 py-3 sm:py-4 font-medium rounded-lg">
              GET INVOLVED
            </button>
            <button className="bg-white text-purple-900 transition duration-200 px-10 sm:px-20 py-3 sm:py-4 font-medium rounded-lg">
              LEARN MORE
            </button>
          </div>

         
          <div className="bg-white mt-6 flex flex-wrap justify-center space-y-6 sm:space-y-0 sm:space-x-10 py-7 px-6 sm:px-11 rounded-lg">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-purple-900">
                1000+
              </h2>
              <p className="text-purple-900">Scholarship</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-purple-900">
                500+
              </h2>
              <p className="text-purple-900">Healthcare Outreach</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-purple-900">
                10,000+
              </h2>
              <p className="text-purple-900">People Empowered</p>
            </div>
          </div>
        </div>
      </div>
      <marquee className="text-white text-sm sm:text-lg mt-10">
<p>   <i class="fa-solid fa-volume-high"></i>     Wunti Alkhair Foundation remains committed to uplifting the community
        with transparency and integrity. Wunti Alkhair Foundation remains
        committed to uplifting the community with transparency and integrity.</p>
      </marquee>
    </div>
  
  );
}

export default Hero;
