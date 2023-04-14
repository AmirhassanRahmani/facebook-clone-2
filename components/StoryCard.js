import Image from "next/image";
import React from "react";

function StoryCard({ src, name, profile }) {
  return (
    <div className="relative h-14 w-14  md:h-25 md:w-25 lg:h-56 lg:w-32 overflow-x p-3 cursor-pointer transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse ">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        width={40}
        height={40}
        src={profile}
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-xl h-full w-full"
        src={src}
        width={900}
        height={900}
      />
      <p className="absolute opacity-0 lg:opacity-100 bottom-4 p-2 w-5/6 text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>
  );
}

export default StoryCard;
