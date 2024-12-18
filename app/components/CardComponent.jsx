import React from "react";

export default function CardComponent({ heading, description, url }) {
  return (
    <div className=" w-[25rem] h-[15rem] bg-[#09090A] rounded-md px-5  opacity-75">
      <div className=" pt-5">
        <img src={url} alt="" />
      </div>
      <div className=" mt-10 text-xl font-semibold text-red-600">{heading}</div>
      <div className=" mt-1 text-[#94969D]">{description}</div>
    </div>
  );
}
