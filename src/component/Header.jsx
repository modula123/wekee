import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./../style/component.scss";

import { LuArrowUpRight } from "react-icons/lu";
import { IoClose, IoMenuOutline } from "react-icons/io5";

const Header = () => {
  const [menuModal, SetMenuModal] = useState(false);
  const location = useLocation();

  const isActive = (path, hash = "") => {
    if (hash) {
      return location.pathname === path && location.hash === hash
        ? "active"
        : "";
    }
    return location.pathname === path ? "active" : "";
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="content">
            <div className="menu">
              <button onClick={() => SetMenuModal(true)}>
                <span>
                  <IoMenuOutline />
                </span>
              </button>
            </div>
            <Link to={"/"} className="logo">
              <span>wekee.</span>
            </Link>
            <ul>
              <li>
                <Link to={"/"} className={isActive("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/use-cases"} className={isActive("/use-cases")}>
                  use cases
                </Link>
              </li>
              <li>
                <Link to={"/#about"} className={isActive("/", "#about")}>
                  about
                </Link>
              </li>
              <li>
                <Link to={"/resources"} className={isActive("/resources")}>
                  resources
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className={isActive("/contact")}>
                  contact
                </Link>
              </li>
            </ul>
            <div>
              <button className="start">
                <span className="icon">
                  <LuArrowUpRight />
                </span>
                <span className="text">Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {menuModal && (
        <>
          <div className="menu-modal">
            <div className="container">
              <div className="content">
                <button onClick={() => SetMenuModal(false)}>
                  <span>
                    <IoClose />
                  </span>
                </button>
                <ul>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link>Services</Link>
                  </li>
                  <li>
                    <Link>About</Link>
                  </li>
                  <li>
                    <Link>Resources</Link>
                  </li>
                  <li>
                    <Link>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
