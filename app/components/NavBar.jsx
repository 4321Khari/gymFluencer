import React from "react";

import "../globals.css"; // Import global Tailwind styles
import { Orbitron } from "next/font/google";

// Import the Orbitron font and configure its weights and subsets
const orbitron = Orbitron({
  subsets: ["latin"], // Specify the subset (e.g., 'latin', 'latin-ext')
  weight: ["400"], // Add the font weights you need
  display: "swap", // Ensure the font swaps in quickly
});

export default function NavBar() {
  return (
    <div className=" w-full z-20   relative   ">
      <div className=" w-full relative  h-36  items-center  flex justify-center">
        <div className=" w-[70%]  fixed backdrop-blur-xl  bg-black/60    flex items-center  px-3 rounded-full  h-[5.2rem]  ">
          <img
            src="https://framerusercontent.com/images/btsz5FjA3AvNFXvmH9iWv1xJd8.svg"
            alt=""
            className=" h-10 cursor-pointer "
          />
          <div className=" h-full  w-full  items-center text-lg  space-x-5 text-gray-100 flex">
            <div className=" hover:text-red-600 pl-10 cursor-pointer">Home</div>
            <div className=" hover:text-red-600 cursor-pointer">About</div>
            <div className="whitespace-nowrap  hover:text-red-600 cursor-pointer">
              Our Services
            </div>
            <div className=" hover:text-red-600 cursor-pointer">Benefits</div>
            <div className=" hover:text-red-600 cursor-pointer">Blogs</div>
            <div className=" hover:text-red-600 cursor-pointer">Contact</div>
            <div className=" w-[35%]   justify-end    h-full  flex items-center    ">
              <button className=" h-[65%] rounded-full bg-red-600 w-44">
                Join us now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
