import React from "react";
import "./Messages.scss";
import { FaCamera } from "react-icons/fa";
import profilePic1 from "../assets/mohanlalprofile.jpg";
import profilePic2 from "../assets/Mammoottyprofile.jpg";

const messages = [
  {
    id: 1,
    name: "mohanlal",
    profilePic: profilePic1,
    preview: "Hey, how are you?",
    time: "6m",
    unread: 3,
  },
  {
    id: 2,
    name: "mammootty",
    profilePic: profilePic2,
    preview: "Let's meet tomorrow.",
    time: "2h",
    unread: 0,
  },
];

const MessageSection = () => {
  return (
    <div className="message-section">
      {/* Search Bar */}
      <input type="text" placeholder="Search messages..." className="search-bar" />

      {/* Message List */}
      <div className="message-list">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <img src={msg.profilePic} alt={msg.name} className="profile-pic" />
            <div className="message-content">
              <div className="message-header">
                <span className={`message-name ${msg.unread > 0 ? "bold" : ""}`}>{msg.name}</span>
                <span className="message-time">{msg.time}</span>
              </div>
              <p className={`message-preview ${msg.unread > 0 ? "bold" : ""}`}>
                {msg.preview} {msg.unread > 0 && <span className="unread-count">{msg.unread} new</span>}
              </p>
            </div>
            <FaCamera className="camera-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageSection;
