import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/outline";
import Contact from "./Contact";
const contacts = [
  {
    src: "https://pbs.twimg.com/profile_images/1322781586513895425/G_stL2vh_400x400.jpg",
    name: "habib",
  },
  {
    src: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-156478862.jpg",
    name: "bruce",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1322781586513895425/G_stL2vh_400x400.jpg",
    name: "habib",
  },
  {
    src: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-156478862.jpg",
    name: "bruce",
  },
];
function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact src={contact.src} key={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
