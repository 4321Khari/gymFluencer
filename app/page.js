"use client";
import NavBar from "./components/NavBar";
import { useState } from "react";

const scrollData1 = ["Fitness", "Transformation", "Motivation", "Proqress "];
const scrollData2 = ["Work", "Community", "Strength", "Proqress "];

export default function Home() {
  const [videoPlayer, setVideoPlayer] = useState(false);
  return (
    <div className=" bg-black h-[100rem]">
      <div className="  h-screen  w-full relative ">
        <div
          className="absolute  inset-0   bg-cover bg-center opacity-40"
          style={{
            boxShadow: "0 -60px 60px 60px rgba(0, 0, 0, 1.1) inset",
            backgroundImage:
              "url('https://framerusercontent.com/images/SGmk37b8TDX43mcsVuBwFTVon0Y.jpg')",
          }}
        >
          {" "}
        </div>
        <NavBar />
        <div className="flex  tracking-wider justify-center items-center text-7xl font-black text-red-600 relative ">
          Track Your Fitness
        </div>
        <div className="flex tracking-wider justify-center items-center text-7xl font-black text-red-600 relative ">
          Journey
        </div>
        <div className=" text-white relative  flex  justify-center">
          <div className=" w-[48%] text-sm mt-10  text-center">
            Discover the ultimate fitness companion with GymFluencer.
            Effortlessly log your workouts, count reps, and track calories
            burned. Stay motivated and achieve your goals with ease.
          </div>
        </div>
      </div>
      <div className=" overflow-hidden relative">
        <ul className=" animate-infinite-scroll   text-6xl font-bold space-x-4 text-white flex">
          {[...scrollData1, ...scrollData1, ...scrollData1].map((item) => (
            <li className=" whitespace-nowrap" key={Math.random()}>
              {`${item}    /`}
            </li>
          ))}
        </ul>
      </div>
      <div className=" overflow-hidden">
        <ul className=" animate-reverse-infinite-scroll text-6xl font-bold text-red-600 space-x-4  flex">
          {[
            ...scrollData2,
            ...scrollData2,
            ...scrollData2,
            ...scrollData2,
            ...scrollData2,
          ].map((item) => (
            <li className=" whitespace-nowrap" key={Math.random()}>
              {`${item}    /`}
            </li>
          ))}
        </ul>
      </div>
      <div className="   text-7xl font-bold text-red-600 flex items-center justify-center">
        {" "}
        Your Fitness.{" "}
      </div>
      <div className=" text-7xl font-bold text-red-600 flex items-center justify-center">
        {" "}
        Our Mission.{" "}
      </div>
      <div className=" flex justify-center items-center text-center text-white">
        At GymFluencer, our mission is simple: to provide the tools and support
        you need to <br /> reach your fitness goals. We combine innovative
        technology with personalized guidance <br /> to make fitness easier,
        more accessible, and more motivating. Join us as we help you <br />{" "}
        transform your fitness journey, one workout at a time.
      </div>

      <div className=" w-full ">
        <div className=" text-white flex  w-[90%]   mx-auto    ">
          <div className=" flex flex-col items-center border-r-[1px] px-4">
            <div className=" text-4xl font-bold">463 k+</div>
            <div className=" text-center">
              Workouts logged and progress tracked every <br /> month
            </div>
          </div>
          <div className=" flex flex-col items-center border-r-[1px] px-4">
            <div className=" text-4xl font-bold">163 k+</div>
            <div className=" text-center ">
              Fitness enthusiasts connected through our <br /> platform
            </div>
          </div>
          <div className=" flex flex-col items-center px-4 ">
            <div className=" text-4xl font-bold">13 +</div>
            <div>Countries where GymFluencer is making an impact</div>
          </div>
        </div>
      </div>
      <div className=" text-white " onClick={() => setVideoPlayer(true)}>
        play video
      </div>
      {videoPlayer && (
        <div
          onClick={() => setVideoPlayer(false)}
          className=" z-50  fixed h-screen top-0 left-0 w-full    flex items-center justify-center video-container"
        >
          <div className="absolute -z-10 inset-0 bg-black bg-opacity-60"></div>

          <iframe
            width="900"
            height="500"
            src="https://www.youtube.com/embed/pznrAWMhahA?start=8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
