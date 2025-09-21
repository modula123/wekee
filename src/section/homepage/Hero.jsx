import React from "react";
import {
  LuArrowRight,
  LuArrowRightFromLine,
  LuArrowUpRight,
} from "react-icons/lu";
import { Link } from "react-router-dom";

const Homehero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="content">
            <div className="div">
              <p>Planning a move sucks. Let us do it instead.</p>
              <h2>
                We’re more than just a delivery service — Wekee is a reliable
                logistics partner for individuals, families, and businesses.
              </h2>

              <Link to={"/book"}>
                <span>Book a Move</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homehero;
