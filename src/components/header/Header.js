import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { SET_ACTIVE_USER } from "../../redux/slice/authSlice";

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

const activeLink = ({ isActive }) => (isActive ? `${"active"}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        // const uid = user.uid;
        // console.log(user.displayName);
        setDisplayName(user.displayName);

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
      }
    });
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Successfully LoggedOut!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
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
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activeLink}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="header-right" onClick={hideMenu}>
            <span className="links">
              <NavLink to="/login" className={activeLink}>
                Login
              </NavLink>
              <a href="#">
                <FaUserCircle size={16} />
                Hi, {displayName}
              </a>
              <NavLink to="/register" className={activeLink}>
                Register
              </NavLink>
              <NavLink to="/order-history" className={activeLink}>
                My Orders
              </NavLink>
              <NavLink to="/" onClick={logoutUser}>
                logout
              </NavLink>
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
