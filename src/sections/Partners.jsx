import React from 'react';
import altschool from "../assets/altschool.jpg";
import ate from "../assets/ate.png";
import pen from "../assets/pen.png";
import wunti from "../assets/wunti.png";

function Partners() {
  return (
    <div className="mt-16 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Partners</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
        <img 
          src={altschool} 
          alt="altschool logo" 
          className="w-full max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto object-contain" 
        />
        <img 
          src={pen} 
          alt="pen promise logo" 
          className="w-full max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto object-contain" 
        />
        <img 
          src={ate} 
          alt="ate logo" 
          className="w-full max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto object-contain" 
        />
        <img 
          src={wunti} 
          alt="wma logo" 
          className="w-full max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto object-contain" 
        />
      </div>
    </div>
  );
}

export default Partners;
