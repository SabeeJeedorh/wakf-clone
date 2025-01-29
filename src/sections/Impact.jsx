// import React from "react";
// import patternimage from "../assets/pattern1.jpg";
// import student2 from "../assets/student2.jpg";

// function Impact() {
//   return (
//     <>
//     <div
//       className="h-screen p-10 px-8 text-center w-full "
//       style={{ backgroundImage: `url(${patternimage})` }}
//     >
//       <h2 className="font-bold text-3xl text-white m-4">
//         Our Key Impact Sectors
//       </h2>
//       <p className="font-bold text-white mb-6">
//         We are dedicated to transforming lives across various sectors by
//         <br />
//         providing essential resources and opportunities.
//       </p>
//       <div className="flex flex-wrap justify-center mt-8">
//         <div>
//           <div className="space-y-5 p-7 w-[40rem]">
//             <div
//               className="w-[500px] text-left bg-white text-purple-700 hover:bg-purple-700 
//             hover:text-white py-5 px-4 rounded"
//             >
//               <span className="mr-2">
//                 <i class="fa-solid fa-book"></i>
//               </span>
//               Education
//             </div>
//             <div
//               className="w-[500px] text-left bg-white text-purple-700 py-5 px-4 rounded-md  hover:bg-purple-700 
//             hover:text-white"
//             >
//               <span className="mr-2">
//                 <i class="fa-solid fa-notes-medical"></i>
//               </span>{" "}
//               Healthcare
//             </div>
//             <div
//               className="w-[500px] text-left bg-white text-purple-700 py-5 px-4 rounded-md  hover:bg-purple-700 
//             hover:text-white"
//             >
//               <span className="mr-2">
//                 <i class="fa-regular fa-star"></i>
//               </span>{" "}
//               Community Development
//             </div>
//             <div
//               className="w-[500px] text-left bg-white text-purple-700 py-5 px-4 rounded-md  hover:bg-purple-700 
//             hover:text-white"
//             >
//               <span className="mr-2">
//                 <i class="fa-solid fa-briefcase"></i>
//               </span>{" "}
//               Economic Empowerment
//             </div>
//           </div>
//         </div>
//         <img src={student2} alt="students" className="w-[500px]" />

//         <div className="w-full md:w-3/4">
//           <div className></div>
//         </div>
//       </div>
//     </div>
//     </>
    
//   );
// }

// export default Impact;


import React from "react";
import patternimage from "../assets/pattern1.jpg";
import student2 from "../assets/student2.jpg";

function Impact() {
  return (
    <>
      <div
        className="h-screen p-10 px-8 text-center w-full"
        style={{ backgroundImage: `url(${patternimage})` }}
      >
        <h2 className="font-bold text-3xl text-white m-4">
          Our Key Impact Sectors
        </h2>
        <p className="font-bold text-white mb-6">
          We are dedicated to transforming lives across various sectors by
          <br />
          providing essential resources and opportunities.
        </p>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="w-full md:w-auto">
            <div className="space-y-5 p-7 flex flex-col items-center md:items-start justify-center w-full md:w-[40rem]">
              <div
                className="w-full text-center md:text-left bg-white text-purple-700 hover:bg-purple-700 
                hover:text-white py-5 px-4 rounded mb-4"
              >
                <span className="mr-2">
                  <i className="fa-solid fa-book"></i>
                </span>
                Education
              </div>
              <div
                className="w-full text-center md:text-left bg-white text-purple-700 py-5 px-4 rounded-md mb-4 hover:bg-purple-700 
                hover:text-white"
              >
                <span className="mr-2">
                  <i className="fa-solid fa-notes-medical"></i>
                </span>{" "}
                Healthcare
              </div>
              <div
                className="w-full text-center md:text-left bg-white text-purple-700 py-5 px-4 rounded-md mb-4 hover:bg-purple-700 
                hover:text-white"
              >
                <span className="mr-2">
                  <i className="fa-regular fa-star"></i>
                </span>{" "}
                Community Development
              </div>
              <div
                className="w-full text-center md:text-left bg-white text-purple-700 py-5 px-4 rounded-md mb-4 hover:bg-purple-700 
                hover:text-white"
              >
                <span className="mr-2">
                  <i className="fa-solid fa-briefcase"></i>
                </span>{" "}
                Economic Empowerment
              </div>
            </div>
          </div>
          <img src={student2} alt="students" className="w-full md:w-[500px] mb-8 md:mb-0" />
        </div>
      </div>
    </>
  );
}

export default Impact;
