import React from "react";
import { CiBoxes } from "react-icons/ci";
import { LuArrowUpRight } from "react-icons/lu";
import {
  MdOutlineDeliveryDining,
  MdOutlineShareLocation,
} from "react-icons/md";
import { TbBox } from "react-icons/tb";
import { Link } from "react-router-dom";

const services = [
  {
    url: "",
    icon: MdOutlineShareLocation,
    title: "Home Relocation",
    descr: "Stress-free moves from door to door",
  },
  {
    url: "",
    icon: TbBox,
    title: "Office Moves",
    descr: "Swift transitions for workspaces",
  },
  {
    url: "",
    icon: CiBoxes,
    title: "Packing & Unpacking",
    descr: "Handled with care, packed like pros.",
  },
  {
    url: "",
    icon: MdOutlineDeliveryDining,
    title: "Local Pickups & Drop-offs",
    descr: "Quick runs. Right on time.",
  },
];

const WhyUs = () => {
  return (
    <>
      <div className="whyus">
        <div className="container">
          <div className="content">
            <div className="titles">
              <span>Moving was a mess — until Wekee stepped in.</span>
              <h3>Moving has always been stressful</h3>
              <h3>Unreliable helpers, Late arrivals, and Damaged belongings</h3>
            </div>
            <div className="descr">
              <div className="div">
                <p>
                  We saw how much this disrupted everyday life. That’s why we
                  built a platform dedicated to making moving smooth, safe, and
                  professional. Wekee connects you with trained local movers who
                  show up on time and handle every task with care.
                </p>
              </div>
              <div>
                <Link>
                  <span className="text">Book your move</span>
                  <span className="icon">
                    <LuArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
            <div className="boxes">
              {services.map((service, index) => (
                <Link to={service.url} key={index} className="box">
                  <div className="icon">
                    <span>
                      <service.icon />
                    </span>
                  </div>
                  <div className="text">
                    <h3>{service.title}</h3>
                    <p>{service.descr}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
