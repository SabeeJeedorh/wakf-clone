import React from "react";
import shureim from "../assets/shureim.avif";

function blogs() {
  return (
    <div className="container mx-auto px-12 mt-12">
      <div className="border-b-neutral-950-r-emerald-200">
       


<div className="my-5 w-full items-center justify-between flex">

<h1 className="font-bold text-2xl lg:text-3xl">Our Blogs</h1>

<p className="text-right font-semi-bold text-purple-700 flex items-center text-primary text-base lg:text-lg  rounded-sm">
  View all <i className="fa-solid fa-arrow-right"></i>
</p>


</div>



       








        <div className="bg-white shadow-xl container px-4 py-8 rounded-lg w-[30rem]">
          <img src={shureim} alt="shureim" className=" w-[30rem] h-auto " />
          <a href="#" className="font-bold text-xl hover:text-purple-600">
            The Power of Yet: Embracing a Growth Mindset with @nshuraim
          </a>
          <ul className="mt-5 italic text-gray-500">
            <li>
              <i class="fa-regular fa-clock"></i> Thursday, 16th January 2025
            </li>
            <li>
              <i class="fa-solid fa-location-dot"></i> Online
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default blogs;
