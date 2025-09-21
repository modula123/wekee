import React from "react";
import { assets } from "../../assets/assets";

const services = [
  {
    image: assets.images.img.image1,
    title: "Home & Office Moving",
    description:
      "We pack, load, transport, and unload your household or office items — whether you're moving locally or across cities. We provide boxes and handle heavy lifting for a stress-free move.",
  },
  {
    image: assets.images.img.image7,
    title: "Parcel Delivery",
    description:
      "Door-to-door delivery of packages, documents, and personal items across Rwanda. Ideal for individuals, online sellers, or small businesses needing reliable courier services.",
  },
  {
    image: assets.images.img.image5,
    title: "Same-Day Delivery",
    description:
      "Urgent deliveries made on the same day — perfect for documents, forgotten items, last-minute gifts, or critical packages. We prioritize speed without compromising safety.",
  },
  {
    image: assets.images.img.image9,
    title: "Furniture & Bulk Transport",
    description:
      "We specialize in moving large items like beds, fridges, wardrobes, and sofas. Our team ensures careful handling, wrapping, and secure transport of all bulky goods.",
  },
  {
    image: assets.images.img.image8,
    title: "Relocation Services",
    description:
      "Designed for families or businesses relocating long-distance. Includes professional packing, disassembly, safe loading, transport, and unpacking at your new location.",
  },
  {
    image: assets.images.img.image2,
    title: "Business Deliveries",
    description:
      "Scheduled or on-demand delivery services for businesses. Includes pickup from your store or warehouse and delivery to clients, with tracking and real-time updates.",
  },
];

const HomeServices = () => {
  return (
    <>
      <div className="homeservice">
        <div className="container">
          <div className="content">
            <div className="boxes">
              {services.map((service, index) => (
                <div className="box" key={index}>
                  <div className="img">
                    <img src={service.image} loading="lazy" alt="Cover" />
                  </div>
                  <div className="text">
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                  <div className="count">
                    {index + 1}
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
