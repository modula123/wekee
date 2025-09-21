import React, { useState } from "react";

import "./../style/component.scss";

import { Link, NavLink } from "react-router-dom";
import { LuFacebook, LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { IoClose, IoMenuOutline } from "react-icons/io5";

const Header = () => {
  const [menuModal, SetMenuModal] = useState(false);
  return (
    <>
      <div className="header">
        <div className="top">
          <div className="container">
            <div className="content">
              <ul className="links">
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>Career</Link>
                </li>
                <li>
                  <Link>For developers</Link>
                </li>
              </ul>
              <ul className="socials">
                <li>
                  <Link>
                    <span>
                      <LuFacebook />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span>
                      <LuInstagram />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span>
                      <FaXTwitter />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main">
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
                <h3>wekee.</h3>
              </Link>
              <ul>
                <li>
                  <NavLink to={"/usecase"}>Use case</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About us</NavLink>
                </li>
                <li>
                  <NavLink to={"/shop"}>Shop</NavLink>
                </li>
                <li>
                  <NavLink to={"/resources"}>Resources</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
              <div>
                <Link className="btn">
                  <span>Get Started</span>
                </Link>
              </div>
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
