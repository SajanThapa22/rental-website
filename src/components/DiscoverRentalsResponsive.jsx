// import React, { useState } from "react";
// import background from "../assets/background.png";
// import Search from "../assets/search.svg?react";
// import Button from "./Button";

// const DiscoverRentalsResponsive = () => {
//   const [placeHolder, setPlaceHolder] = useState("places rides things");

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${background})`,
//       }}
//       className="relative bg-cover bg-center h-screen sm:h-dvh "
//     >
//       <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 flex flex-col gap-list-gap">
//         <div className="capitalize gap-gap-16px flex flex-col items-center">
//           <div className="flex flex-wrap items-center justify-center text-font-big gap-3 font-bold text-nowrap">
//             <span>discover your</span>
//             <span className="text-clr-primary">perfect rental</span>
//           </div>
//           <div className="text-font-regular capitalize font-regular">
//             rent cars, houses and items in just a few clicks
//           </div>
//         </div>

//         <div className="flex flex-col items-center gap-list-gap px-p-25px">
//           <div className="flex gap-gap-16px">
//             {buttonDetails.map((b) => (
//               <Button
//                 key={b.id}
//                 text={b.text}
//                 bgClr={b.bgClr}
//                 clr={b.clr}
//                 onFocus={() => setPlaceHolder(b.text)}
//                 onBlur={() => setPlaceHolder("places rides things")}
//               />
//             ))}
//           </div>
//           <div className="w-full h-14 gap-5 relative rounded-btn-radius justify-center flex items-center bg-clr-white px-p-25px">
//             <div className=" flex gap-2">
//               <Search className="text-clr-light" />
//               <input
//                 type="text"
//                 placeholder={`Search ${placeHolder}`}
//                 className=" focus:outline-none text-font-small bg-right-right"
//               />
//             </div>
//             <div className="h-full absolute w-width-1px bg-clr-very-light"></div>
//             <div className="h-full flex-1"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiscoverRentalsResponsive;
