import React from "react";
import Navbar from "../components/Navbar";
import Stories from "../components/Stories";
import PostFeed from "../components/PostFeed";
import Messages from "../components/Messages";
import "../pages/Home.scss";
import logo from "../assets/instagram-logo.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        {/* ✅ Left Section: Stories + Post Feed */}
              <div className="main-section">
                  <img src={logo} alt="" className="instagram-logo"/>
          <Stories />
          <PostFeed />
        </div>

        {/* ✅ Right Section: Messages */}
        <div className="messages-section">
          <Messages />
        </div>
      </div>

      {/* ✅ Navbar at the Bottom */}
      <Navbar />
    </div>
  );
};

export default Home;
