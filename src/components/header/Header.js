import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const logo = (
  <div className="logo">
    <Link to="/">
      <h2>
        e<span>Shop</span>.
      </h2>
    </Link>
  </div>
);
const cart = (
  <span className="cart">
    <Link to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <div className="header">
        {logo}
        <nav className={showMenu ? `${"show-nav"}` : `${"hide-nav"}`}>
          <div
            className={
              showMenu
                ? `${"nav-wrapper"} ${"show-nav-wrapper"}`
                : `${"nav-wrapper"}`
            }
            onClick={hideMenu}
          ></div>
          <ul onClick={hideMenu}>
            <li className="logo-mobile">
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="header-right" onClick={hideMenu}>
            <span className="links">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/order-history">My Orders</Link>
            </span>
            {cart}
          </div>
        </nav>
        <div className="menu-icon">
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
