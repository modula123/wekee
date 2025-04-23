import React, { useState } from "react";
import { LuMail, LuPhone } from "react-icons/lu";
import { TbBrandTelegram, TbBrandWhatsapp } from "react-icons/tb";
import { Link } from "react-router-dom";

const HomeContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;

    const whatsappMessage = `Hello, I need help.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n\n*Message:* ${message}`;
    const whatsappURL = `https://wa.me/250786969572?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    // Clear the form after sending
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="home-contact">
        <div className="container">
          <div className="content">
            <div className="conts">
              <div>
                <h2>Know your move, get your quote.</h2>
                <p>
                  No waiting. No guessing. Use our smart form and get a quote
                  instantly.
                </p>
              </div>
              <ul className="socials">
                <li>
                  <span>
                    <LuPhone />
                  </span>
                  <span>
                    <Link to={"tel:250786969572"}>250 78 6969 572</Link>
                  </span>
                </li>

                <li>
                  <span>
                    <TbBrandTelegram />
                  </span>
                  <span>
                    <Link to={"https://t.me/wekeerwanda"}>
                      Telegram Channel /@wekeerwanda
                    </Link>
                  </span>
                </li>
                <li>
                  <span>
                    <LuMail />
                  </span>
                  <span>
                    <Link to={"mailto:meyvnagency@gmail.com"}>
                      meyvnagency@gmail.com
                    </Link>
                  </span>
                </li>
              </ul>
              <div>
                <p>
                  Message our support team—fast replies, local help, no bots.
                </p>
              </div>
            </div>
            <div className="form">
              <h2>Need help right now?</h2>

              <form onSubmit={handleSubmit}>
                <div className="input">
                  <input
                    type="text"
                    name="name"
                    placeholder="Fullnames"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="message">
                  <textarea
                    name="message"
                    placeholder="Leave a message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContact;
