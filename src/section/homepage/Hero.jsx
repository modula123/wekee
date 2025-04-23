import React from "react";
import { LuArrowRight, LuArrowRightFromLine, LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const Homehero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="content">
            <div className="div">
              <h2>Professional Help, Right When You Need It.</h2>
              <p>
                Wekee connects you with trusted local help—for errands, moving,
                and everything in between.
              </p>

              <div className="buttons">
                <Link>
                  <span className="icon">
                    <LuArrowUpRight />
                  </span>
                  <span className="text">Book a Move</span>
                </Link>
                <Link>
                  <span className="text">Learn More</span>
                  <span className="icon">
                    <LuArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homehero;
