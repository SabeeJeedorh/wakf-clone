import React from "react";
import student from "../assets/student.webp";
import fellows from "../assets/fellows.webp";
import Header from "../components/Header";

function AboutUs() {
  return (
    <>
      <div className="about flex flex-col md:flex-row container mx-auto p-4 md:p-7 gap-5">

        <div className="pics flex flex-col items-center space-y-4 md:p-14">
          <img
            src={student}
            alt="students"
            className="w-full max-w-sm md:w-[500px] h-auto hover:scale-105 transition duration-300"
          />
          <img
            src={fellows}
            alt="fellows"
            className="w-full max-w-sm md:w-[500px] h-auto hover:scale-105 transition duration-300"
          />
        </div>

        
        <div className="aboutus bg-white p-6 rounded-lg shadow-md mt-8 md:mt-0 max-w-full md:max-w-screen-md">
          <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4 text-center md:text-left">
            About Us
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Our vision is to create a world where every individual, regardless
            of socio-economic status, has seamless access to quality education,
            comprehensive healthcare, and abundant economic opportunities.
            <br />
            <br />
            We strive to foster empowered, thriving communities that drive
            sustainable growth and progress.
            <br />
            <br />
            Our approach is rooted in collaboration and community engagement. We
            partner with local organizations to design and implement programs
            that deliver long-term, sustainable impact.
          </p>
          <button className="block w-full md:w-auto text-white bg-purple-900 px-7 py-2 mt-6 hover:scale-105 transition duration-300 rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
