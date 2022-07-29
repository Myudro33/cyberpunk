import React, { useState, useRef } from "react";
import heroVideo from "../assets/heroVideo.mp4";
import { FaPauseCircle, FaPlayCircle, faPlayCircle } from "react-icons/fa";
import GradientBtn from "./GradientBtn";

const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setisVideoPlaying] = useState(true);
  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setisVideoPlaying(false);
  };
  const handleVideoPlay = () => {
    videoRef.current.play();
    setisVideoPlaying(true);
  };
  return (
    <div className="flex items-end justify-center w-full h-screen text-center">
      <video
        ref={videoRef}
        src={heroVideo}
        loop
        autoPlay
        muted
        className="object-cover h-full w-full absolute -z-10"
      />
      <div
        className={`p-8 flex flex-col items-center justify-center w-full duration-500 ${
          isVideoPlaying ? "" : "bg-black/80"
        } ${isMenuShown ? "opacity-20" : "opacity-100"} `}
      >
        <h1 className="text-5xl lg:text-7xl">Web 3.0</h1>
        <h1 className="text-5xl lg:text-7xl capitalize mb-12">
          the<span className="text-thBlue font-bold">future</span>is here
        </h1>
        <div className="flex flex-row justify-center items-center">
          <GradientBtn className="capitalize" title="get anton" />
          <GradientBtn className="capitalize mx-12" title="products" />
          {isVideoPlaying ? (
            <FaPauseCircle
              className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
              size={30}
              onClick={handleVideoPause}
            />
          ) : (
            <FaPlayCircle className="cursor-pointer hover:scale-110 duration-200 text-thBlue" onClick={handleVideoPlay} size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
