import React from "react";
import {
  LuArrowUpRight,
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuYoutube,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { Tooltip } from "react-tooltip";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div
        className="footer"
        style={{
          backgroundImage: `url(${assets.images.bg.bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="main">
          <div className="container">
            <div className="content">
              <div className="col">
                <h2>Wekee.</h2>
                <p>
                  The faster, easier way to get reliable moving and home support
                  services.
                </p>

                <p className="copy">&copy; {year} Wekee.</p>
              </div>
              <div className="col">
                <h3>Use Cases</h3>
                <ul>
                  <li>
                    <Link>Local moving</Link>
                  </li>
                  <li>
                    <Link>Errands & Personal Tasks</Link>
                  </li>
                  <li>
                    <Link>Cleaning & Organization</Link>
                  </li>
                  <li>
                    <Link>Packing & Unpacking</Link>
                  </li>
                  <li>
                    <Link>Academic Support</Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3>Company</h3>
                <ul>
                  <li>
                    <Link>About us</Link>
                  </li>
                  <li>
                    <Link>Contact us</Link>
                  </li>
                  <li>
                    <Link>Services</Link>
                  </li>
                  <li>
                    <Link>Careers</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3>Join our newsletter</h3>
                <form>
                  <input type="email" placeholder="Enter email address" />
                  <button>
                    <span>
                      <LuArrowUpRight />
                    </span>
                  </button>
                </form>
                <div className="socials">
                  <Link>
                    <span id="fb">
                      <LuFacebook />
                    </span>
                    <Tooltip
                      className="tooltip"
                      anchorId="fb"
                      content="Facebook"
                    />
                  </Link>
                  <Link>
                    <span id="ig">
                      <LuInstagram />
                    </span>
                    <Tooltip
                      className="tooltip"
                      anchorId="ig"
                      content="Instagram"
                    />
                  </Link>
                  <Link>
                    <span id="in">
                      <LuLinkedin />
                    </span>
                    <Tooltip
                      className="tooltip"
                      anchorId="in"
                      content="LinkedIn"
                    />
                  </Link>
                  <Link>
                    <span id="u2b">
                      <LuYoutube />
                    </span>
                    <Tooltip
                      className="tooltip"
                      anchorId="u2b"
                      content="YouTube"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
