import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "sonny",
    src: "https://avatars.githubusercontent.com/u/24712956?v=4",
    profile:
      "https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg",
  },
  {
    name: "rafel",
    src: "http://static.pocketcasts.com/discover/images/400/7e5468d0-6b96-0136-4e65-69745d675bc7.jpg",
    profile: "https://www.filepicker.io/api/file/9GCYH9YQnyqu4Ymwmzu9",
  },
  {
    name: "sonny",
    src: "https://avatars.githubusercontent.com/u/24712956?v=4",
    profile:
      "https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg",
  },
  {
    name: "rafel",
    src: "http://static.pocketcasts.com/discover/images/400/7e5468d0-6b96-0136-4e65-69745d675bc7.jpg",
    profile: "https://www.filepicker.io/api/file/9GCYH9YQnyqu4Ymwmzu9",
  },
  {
    name: "rafel",
    src: "http://static.pocketcasts.com/discover/images/400/7e5468d0-6b96-0136-4e65-69745d675bc7.jpg",
    profile: "https://www.filepicker.io/api/file/9GCYH9YQnyqu4Ymwmzu9",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto ">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
