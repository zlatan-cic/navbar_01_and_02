import React from "react";
import './NavBar_1.css'

const NavBar_1 = () => {
  return (
    <>
      <header className="navbar">
        <h2 className="logo">Logo</h2>
        <nav>
          <ul className="nav_links">
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
        <a href="" className="cta btn-nav">
          <button>Contact</button>
        </a>
      </header>
    </>
  );
};

export default NavBar_1;
