// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Packages.css";
import { IoIosArrowForward } from "react-icons/io";
import Card from "../Card/Card";

const Packages = () => {
  return (
    <section className="packages-section">
      <div className="header-container">
        {/* Header Text */}
        <div>
          <h5 className="header-sub-title packages-top-border"></h5>
          <h1 className="header-title">Approdable Packages</h1>
          <h4 className="header-description">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: <br />
            Newtonian mechanics
          </h4>
          {/* button */}
          <div className="btn-learnMore">
            Learn More <IoIosArrowForward />
          </div>
        </div>
        {/* Header Cover Img */}
        <div>
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Packages;
