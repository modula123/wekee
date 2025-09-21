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
            <div className="div">
              <span>Moving was a mess - until wekee stepped in.</span>
              <h2>
                Moving has always been stressful.{" "}
                <i>
                  Unreliable helpers, late arrivals, and damaged belongings.
                </i>
              </h2>
              <p>
                We saw how much this disrupted everyday life. That’s why we
                built a platform dedicated to making moving smooth, safe, and
                professional. Wekee connects you with trained local movers who
                show up on time and handle every task with care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
