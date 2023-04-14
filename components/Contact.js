import React from "react";

function Contact({ src, name }) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <img
        src={src}
        alt="sport"
        width={60}
        height={60}
        className="rounded-full object-cover"
      />
      <p>{name}</p>
      <div className="absolute rounded-full bg-green-400 w-3 h-3 left-9 bottom-2 animate-bounce" />
    </div>
  );
}

export default Contact;
