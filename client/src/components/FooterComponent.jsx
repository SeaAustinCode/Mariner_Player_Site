import React from "react";
import { Link } from "react-router-dom";

const FooterComponent = (props) => {
  return (
    <>
      <div className="footer-component-styling">
        <div>
          <h2
            style={{ textDecoration: "none" }}
            className="silver-color" > Website created by Austin O'Neil
          </h2>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
