import React from "react";
import './NavBar_2.css'

const NavBar_2 = () => {
  return (
    <>
      <header className="navbar header">
        <h2 className="logo-2">Logo</h2>
        <nav>
          <ul className="nav_links">
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
        <a href="" className="cta btn-nav">
          <button className="button-nav">Contact</button>
        </a>
      </header>
    </>
  );
};

export default NavBar_2;
