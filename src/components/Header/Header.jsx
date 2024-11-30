// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import coverImg from "../../assets/hero-cover-1.png";

const Header = () => {
  return (
    <>
      <Navbar />
      {/* Start Header */}
      <header className="header">
        <div className="header-container">
          {/* Header Text */}
          <div>
            <h5 className="header-sub-title">Welcome</h5>
            <h1 className="header-title">
              Best Learning <br /> Opportunities
            </h1>
            <h4 className="header-description">
              Our goal is to make online <br /> education work for everyone
            </h4>
            {/* button */}
            <div className="header-btns">
              <button className="btn-join-us">Join Us</button>
              <button className="btn-learn-more">Learn More</button>
            </div>
          </div>
          {/* Header Cover Img */}
          <div>
            <img src={coverImg} alt="cover img" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
