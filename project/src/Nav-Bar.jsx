import React from "react";
import { Link } from "react-router-dom";
import "./Nav-Bar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          src="https://avatars.githubusercontent.com/u/100000?v=4"
          alt="profile"
          className="avatar"
        />
        <span className="brand-name">100xDevs</span>
      </div>

      <div className="navbar-center">
        <input
          type="text"
          className="search-input"
          placeholder="Search Courses"
        />
      </div>

      <div className="navbar-right">
        <Link to="/my-courses" className="my-courses-link">📚 My Courses</Link>
        <button className="profile-btn">👤</button>
      </div>
    </div>
  );
};

export default NavBar