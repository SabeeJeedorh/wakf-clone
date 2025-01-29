import React from "react";

function People() {
  return (
    <div className="text-center mt-48">
      <div className="border-t border-black-500 pt-4 "></div>
      <h1 className="text-3xl font-bold">What People Say About Us</h1>
      <p className="text-purple-600 text-xl">
        Discover heartfelt stories and testimonials from individuals <br />{" "}
        whose lives we've touched.
      </p>

      <div className="mt-12 bg-gray-100 p-6">
        <marquee behavior="scroll" direction="left">
          {Array.from({ length: 10 }, (_, i) => (
            <span
              key={i}
              className="inline-block bg-white  text-purple-800 font-bold mx-2 shadow-md mt-7 w-[280px] h-[250px] text-center"
            >
              <i class="fa-solid fa-user">sabee'a</i>
              <p>Lorem ipsum dolor sit ame reac</p>
              <p>Lorem ipsum dolor sit ame reac</p>
              <p>Lorem ipsum dolor sit ame reac</p>
              <p>Lorem ipsum dolor sit ame reac</p>
              <p>Lorem ipsum dolor sit ame reac</p>
            </span>
          ))}
        </marquee>
      </div>
    </div>
  );
}

export default People;
