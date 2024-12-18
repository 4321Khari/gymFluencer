import Image from "next/image";
import NavBar from "./components/NavBar";

const scrollData1 = ["Fitness", "Transformation", "Motivation", "Proqress "];
const scrollData2 = ["Work", "Community", "Strength", "Proqress "];

export default function Home() {
  return (
    <div className=" bg-black w-full relative h-screen">
      <div
        className="absolute  inset-0  bg-cover bg-center opacity-40"
        style={{
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
        <div className=" w-[48%] text-sm mt-10">
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, count reps, and track calories burned. Stay
          motivated and achieve your goals with ease.
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
    </div>
  );
}
