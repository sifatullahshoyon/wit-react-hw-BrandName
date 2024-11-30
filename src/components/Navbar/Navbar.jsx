// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Navbar.css";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-pink">
      <nav className="navbar">
        {/* logo */}
        <h4>BrandName</h4>
        {/* nav link */}
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        {/* button */}
        <div>
          <p>Login</p>
          <button>
            JOIN US <FaArrowRight />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
