import React from "react";
import { LuMail, LuPhone } from "react-icons/lu";
import { TbBrandTelegram, TbBrandWhatsapp } from "react-icons/tb";
import { Link } from "react-router-dom";

const HomeContact = () => {
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

              <form>
                <div className="input">
                  <input type="text" placeholder="Fullnames" />
                </div>
                <div className="input">
                  <input type="tel" placeholder="Phone number" />
                </div>
                <div className="input">
                  <input type="email" placeholder="Email address" />
                </div>
                <div className="message">
                  <textarea placeholder="Leave a message" />
                </div>
                <div>
                  <button>Send message</button>
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
