import React from "react";
import "./Stories.scss";
import user1 from "../assets/barcaprofile.jpg";
import user2 from "../assets/messiprofile.jpg";
import user3 from "../assets/taylor.jpg";
import user4 from "../assets/mohanlalprofile.jpg"
import user5 from "../assets/Mammoottyprofile.jpg"
import user6 from "../assets/marvelprofile.jpg"
import user7 from "../assets/dcprofile.jpg"
import user8 from "../assets/alanprofile.jpg"

const stories = [
  { id: 1, username: "my story", profilePic: user8 },
  { id: 2, username: "lionel_messi", profilePic: user2 },
  { id: 3, username: "taylor_swift", profilePic: user3 },
  { id: 4, username: "mohanlal", profilePic: user4 },
  { id: 5, username: "mammootty", profilePic: user5 },
  { id: 6, username: "marvel", profilePic: user6 },
  { id: 7, username: "dc", profilePic: user7 },
  { id: 8, username: "barcelona", profilePic: user1 },
];

const Stories = () => {
  return (
    <div className="stories-container">
      {stories.map((story) => (
        <div key={story.id} className="story">
          <div className="story-ring">
            <img src={story.profilePic} alt={story.username} className="story-img" />
          </div>
          <p className="username">{story.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
