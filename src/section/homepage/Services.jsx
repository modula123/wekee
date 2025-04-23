import React from "react";
import { assets } from "../../assets/assets";

const services = [
  {
    img: assets.images.img.img1,
    title: "Residential Moving",
    tag: "For individuals, families, and students",
    list: [
      "Home relocation",
      "Apartment moves",
      "Student moves",
      "Packing & Unpacking",
    ],
  },
  {
    img: assets.images.img.img2,
    title: "Commercial Moving",
    tag: "For offices, shops, and businesss.",
    list: [
      "Office relocation",
      "Store moves",
      "After-hours moves",
      "Equipment transport",
    ],
  },
  {
    img: assets.images.img.img3,
    title: "On-Demand Moves",
    tag: "For flexibe, urget or unique needs.",
    list: [
      "Furniture Delivery",
      "Local Pickups",
      "Same-day service",
      "Event logistics",
    ],
  },
];

const HomeServices = () => {
  return (
    <>
      <div className="homeservice">
        <div className="container">
          <div className="content">
            <div className="title">
              <p>What we serve</p>
              <h2>Personalized moving solutions</h2>
            </div>

            <div className="boxes">
              {services.map((service, index) => (
                <div className="box" key={index}>
                  <img src={service.img} alt="Cover" />
                  <div className="conts">
                    <h3>{service.title}</h3>
                    <span>{service.tag}</span>
                    <ul>
                      {service.list.map((li) => (
                        <li>{li}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeServices;
