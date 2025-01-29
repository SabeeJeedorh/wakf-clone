import React from "react";
import mosque from "../assets/mosque.webp";
import mosque2 from "../assets/mosque2.webp";

function Press() {
  const pressItems = [
    {
      image: mosque,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: mosque2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: mosque2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: mosque,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: mosque,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: mosque2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: mosque2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: mosque2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="p-[40px] ">
      <hr />
      <h1 className="text-3xl font-bold mt-8">From the Press</h1>
      <p className="text-right font-bold text-xl text-purple-700">
        Discover more <i className="fa-solid fa-arrow-right"></i>
      </p>
      {/* Marquee for scrolling effect */}
      <marquee direction="right" scrollamount="20" className="w-full h-[400px]">
        <div className="flex gap-8 justify-start items-center">
          {/* Loop through press items */}
          {pressItems.map((item, index) => (
            <div
              key={index}
              className="bg-slate-200 p-6 rounded-lg shadow-lg w-[500px]"
            >
              <img
                src={item.image}
                alt="Islamic Center"
                className="w-full h-auto rounded-md hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-4 text-justify text-black break-words overflow-hidden w-[400px] line-clamp-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </marquee>
    </div>
  );
}

export default Press;
