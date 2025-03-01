import React from "react";
import { FaHome, FaSearch, FaPlusSquare, FaFilm, FaUser } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <FaHome className="nav-icon" />
      <FaSearch className="nav-icon" />
      <FaPlusSquare className="nav-icon" />
      <FaFilm className="nav-icon" />
      <FaUser className="nav-icon" />
    </div>
  );
};

export default Navbar;
