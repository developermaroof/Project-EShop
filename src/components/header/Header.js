import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <h2>
              e<span>Shop</span>.
            </h2>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
