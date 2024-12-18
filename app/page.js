"use client";
import NavBar from "./components/NavBar";
import { useState } from "react";
import "./globals.css";
import CardComponent from "./components/CardComponent";

const scrollData1 = ["Fitness", "Transformation", "Motivation", "Proqress "];
const scrollData2 = ["Work", "Community", "Strength", "Proqress "];
const arrayImage = [
  {
    name: "TRACK",
    url: "https://framerusercontent.com/images/QCoTSMtHpimr9lp2CmaQOtriXU.png",
  },
  {
    name: "ANALYZE",
    url: "https://framerusercontent.com/images/LqURARtPkDasnz8xNZRw6V7LVc.png",
  },
  {
    name: "TRAIN",
    url: "https://framerusercontent.com/images/ZiSz1ONCwWlZSSTVgpW4sZm1hI.png",
  },
  {
    name: "CONNECT",
    url: "https://framerusercontent.com/images/H2mFADPlDeJZEZVhsqozg6Yc0.jpg",
  },
  {
    name: "CHALLENGE",
    url: "https://framerusercontent.com/images/JrDw3jtgKjcQOYfgKW5tggM5U.jpg",
  },
];

const cardDetails = [
  {
    url: "https://framerusercontent.com/images/AjjAxBc5v6SZHOkJzG2bwrSMk.svg",
    heading: "Effortless Workout Logging",
    description:
      "Easily log your workouts and monitor your progress over time with our intuitive logging feature.",
  },
  {
    url: "https://framerusercontent.com/images/rxSlFR0RyaC3WCayigHX4RPQZs.svg",
    heading: "Accurate Rep Counting",
    description:
      "Count your reps accurately with our app, ensuring consistency and improved performance.",
  },
  {
    url: "https://framerusercontent.com/images/pvxqwt0ZG86WIRPPnHxDCgV7rkQ.svg",
    heading: "Personalized Workout Plans",
    description:
      "AI-powered workout plans tailored to your fitness level, goals, and progress.",
  },
  {
    url: "https://framerusercontent.com/images/u8fjSIAgWQzhagulXkIoN7PzI.svg",
    heading: "Calorie Calculation & Personalized Diet Plans",
    description:
      "Calculate calories burned during workouts and AI-customized meal plans for optimal nutrition and wellness ",
  },
];

export default function Home() {
  const [videoPlayer, setVideoPlayer] = useState(false);
  return (
    <div className=" bg-black ">
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
        <div className="flex   tracking-wider justify-center items-center text-7xl font-black text-red-600 relative ">
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
      <div className=" text-red-600 text-4xl font-extrabold flex justify-center">
        {" "}
        Our servicess
      </div>
      <div className=" text-white flex text-center justify-center">
        GymFluencer offers 5 essential services to help you <br /> achieve your
        fitness goals with ease and flexibility.
      </div>
      <div className="  flex  overflow-hidden">
        {arrayImage.map((item, index) => (
          <div key={index} className="   relative">
            <img
              src={item.url}
              alt=""
              className=" opacity-65  w-[20.5rem] h-[50rem]  inset-0     object-cover"
            />{" "}
            <div className=" absolute w-full   inset-0   text-xl font-bold  text-white flex items-center justify-center">
              {item.name}
            </div>
          </div>
        ))}
      </div>
      <div className=" text-white flex items-center justify-center">
        Our Benefits
      </div>
      <div className=" text-red-600 text-5xl font-bold flex justify-center">
        Discover GymFluencer Benefits
      </div>
      <div className=" text-white flex text-center justify-center">
        Unlock your full potential with GymFluencer your personal fitness <br />
        partner for progress and motivation
      </div>
      <div className=" space-y-10 space-x-40 flex">
        <div className="space-y-10 ">
          <CardComponent
            heading={cardDetails[0].heading}
            description={cardDetails[0].description}
            url={cardDetails[0].url}
          />
          <CardComponent
            heading={cardDetails[1].heading}
            description={cardDetails[1].description}
            url={cardDetails[1].url}
          />
        </div>
        <div>
          <div className=" relative">
            <img
              src="https://framerusercontent.com/images/I9yRU9jEN2S2ol2M7kgT5c6zOrc.png"
              alt=""
              className="   inset-0 w-[20rem] h-[38rem]"
            />
            <img
              src=" https://framerusercontent.com/images/1UO4LCYbX6UQvXFCBXLY0dAOHU.png"
              alt=""
              className=" absolute inset-0 top-[.8rem] left-4 w-[18rem] h-[36.2rem]  rounded-3xl"
            />
          </div>
        </div>
        <div className="  space-y-10 ">
          <CardComponent
            heading={cardDetails[2].heading}
            description={cardDetails[2].description}
            url={cardDetails[2].url}
          />
          <CardComponent
            heading={cardDetails[3].heading}
            description={cardDetails[3].description}
            url={cardDetails[3].url}
          />
        </div>
      </div>
    </div>
  );
}
