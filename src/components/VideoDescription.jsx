import React from "react";

const VideoDescription = ({ title, description }) => {
  return (
    <div className="width-screen aspect-video bg-gradient-to-r from-black flex flex-col justify-center items-start  text-white pl-8 absolute ">
      <span className="text-6xl font-bold">{title}</span>
      <span className="text-sm w-1/3 mt-4">{description}</span>
      <div className="flex items-center gap-4 mt-4">
        <button className="pl-6 pr-6 pt-2 pb-2 text-black rounded-md bg-white font-semibold hover:opacity-80">
          ▶ Play
        </button>
        <button className="pl-4 pr-4 pb-2 pt-2 text-white bg-gray-400 rounded-md font-semibold hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoDescription;
