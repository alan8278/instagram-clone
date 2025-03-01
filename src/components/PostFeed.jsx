import React, { useState } from "react";
import "./PostFeed.scss";
import { FaHeart, FaRegHeart, FaComment, FaShare } from "react-icons/fa";
import messip from "../assets/messiprofile.jpg";
import messi1 from "../assets/messi.jpg";
import user2 from "../assets/alanprofile.jpg"
import user21 from "../assets/alan1.jpg"
import user3 from "../assets/mohanlalprofile.jpg"
import user31 from "../assets/mohanlal.jpg"
import user4 from "../assets/marvelprofile.jpg"
import user41 from "../assets/marvel.jpg"
import user5 from "../assets/dcprofile.jpg"
import user51 from "../assets/dc.jpg"
import user6 from "../assets/Mammoottyprofile.jpg"
import user61 from "../assets/mammootty.jpg"

// Dummy Posts
const initialPosts = [
  {
    id: 1,
    username: "Lionel_messi",
    userProfile: messip,
    imageUrl: messi1,
    caption: "Hey fam 🌍✨",
    likes: 12,
    comments: ["Awesome!", "Where is this?", "Amazing pic!"],
  },
  {
    id: 2,
    username: "a.l_x_n",
    userProfile: user2,
    imageUrl: user21,
    caption: "chillin!",
    likes: 64,
    comments: ["Awesome!", "Where is this?", "Amazing pic!"],
  },
  {
    id: 3,
    username: "mohanlal",
    userProfile: user3,
    imageUrl: user31,
    caption: "Legacy",
    likes: 964,
    comments: ["Awesome!", "Where is this?", "Amazing pic!"],
  },
  {
    id: 4,
    username: "marvel",
    userProfile: user4,
    imageUrl: user41,
    caption: "Ironman arrives!",
    likes: 738,
    comments: ["Awesome!", "Where is this?", "Amazing pic!"],
  },
  {
    id: 5,
    username: "dc",
    userProfile: user5,
    imageUrl: user51,
    caption: "Batman",
    likes: 84,
    comments: ["Awesome!", "Where is this?", "Amazing pic!"],
  },
  {
    id: 6,
    username: "mammootty",
    userProfile: user6,
    imageUrl: user61,
    caption: " from Brahmayugam",
    likes: 504,
    comments: ["Awesome!", "Where is this?", "Amazing pic!"],
  },
];

const PostFeed = () => {
  const [posts, setPosts] = useState(initialPosts);

  // Function to handle like toggle
  const toggleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );
  };

  return (
    <div className="post-feed">
      {posts.map((post) => (
        <div key={post.id} className="post">
          {/* User Profile & Name */}
          <div className="post-header">
            <img src={post.userProfile} alt="profile" className="profile-pic" />
            <p className="username">{post.username}</p>
          </div>

          {/* Post Image (Click to Like) */}
          <img
            src={post.imageUrl}
            alt="post"
            className="post-image"
            onDoubleClick={() => toggleLike(post.id)}
          />

          {/* Like, Comment, Share Buttons */}
          <div className="post-actions">
            <button onClick={() => toggleLike(post.id)} className="action-btn">
              {post.liked ? <FaHeart className="liked" /> : <FaRegHeart />}
            </button>
            <button className="action-btn">
              <FaComment />
            </button>
            <button className="action-btn">
              <FaShare />
            </button>
          </div>

          {/* Likes & Caption */}
          <p className="likes">{post.likes} likes</p>
          <p className="caption">
            <span className="caption-username">{post.username}</span> {post.caption}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostFeed;
