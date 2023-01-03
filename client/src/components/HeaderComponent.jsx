import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = (props) => {
  return (
    <>
      <h1 className="title-component-styling">GoMs</h1>
      <div className="header-component-styling">
        <div>
          <h2>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="silver-color"
            >
              Home
            </Link>
          </h2>
        </div>
        <div>
          <h2>
            <Link
              to="/create"
              style={{ textDecoration: "none" }}
              className="silver-color"
            >
              Create
            </Link>
          </h2>
        </div>
        <div>
          <h2>
            <Link
              to="/players"
              style={{ textDecoration: "none" }}
              className="silver-color"
            >
              View all Players
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;