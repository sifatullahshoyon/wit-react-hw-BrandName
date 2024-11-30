// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Card.css";
import { LuMonitor } from "react-icons/lu";
import { IoTelescopeSharp } from "react-icons/io5";

const Card = () => {
  return (
    <div className="card-container">
      {/* card 1 */}
      <div className="card">
        <div className="icon-wrapper">
          <LuMonitor className="icon" />
        </div>
        <h4 className="card-title">Certified Teacher</h4>
        <div className="card-border"></div>
        <p className="card-info">
          The gradual accumulation of information about{" "}
        </p>
      </div>
      {/* card 2 */}
      <div className="card">
        <div className="icon-wrapper">
          <IoTelescopeSharp className="icon" />
        </div>
        <h4 className="card-title">Expert instruction</h4>
        <div className="card-border"></div>
        <p className="card-info">
          The gradual accumulation of information about{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
