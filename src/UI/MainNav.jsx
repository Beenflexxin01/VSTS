import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../images/logo.png";
function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffMenuBar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="main-nav">
        <ul className="main-nav-ul">
          <NavLink to="/" className="nav-link">
            <img src={logo} alt="Vertiline Synergy Limited" className="logo" />
          </NavLink>
          <div
            className={`burger ${isOpen && "open"} `}
            onClick={() => setIsOpen(!isOpen)}>
            <div className="burger_bar"></div>
            <div className="burger_bar bar"></div>
            <div className="burger_bar bar3"></div>
          </div>
          <div className={`burger-menu ${isOpen ? "open" : ""}`}>
            <li className="main-nav-li">
              <NavLink to="/" className="nav-link" onClick={toggleOffMenuBar}>
                HOME
              </NavLink>
            </li>
            <li className="main-nav-li">
              <NavLink
                to="/about"
                className="nav-link"
                onClick={toggleOffMenuBar}>
                ABOUT
              </NavLink>
            </li>
            <li className="main-nav-li">
              <NavLink
                to="/contact"
                className="nav-link"
                onClick={toggleOffMenuBar}>
                CONTACT
              </NavLink>
            </li>
          </div>
        </ul>
      <h1 className=" text-header">
        Welcome To Vertiline Synergy Training School.
      </h1>
      </nav>
    </>
  );
}

export default MainNav;
