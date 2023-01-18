import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav">
        <a href="#home" className="logo">
          Netflix
        </a>
        <ul>
          <li>
            <a href="#browse">Browse</a>
          </li>
          <li>
            <a href="#my-list">My List</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
        </ul>
        <form>
          <input type="search" placeholder="Search" />
          <button>Search</button>
        </form>
        <ul>
          <li>
            <a href="#account">Account</a>
          </li>
          <li>
            <a href="#help">Help</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
