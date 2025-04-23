import React from "react";
import { LuAlarmClock, LuHandshake, LuShieldCheck } from "react-icons/lu";

const reasons = [
  {
    icon: LuHandshake,
    title: "Reliable",
    descr: "Consistent service, no excuses. You can count on us every move.",
  },
  {
    icon: LuShieldCheck,
    title: "Secure",
    descr: "Your belongings are safe with us-from packing to drop-off",
  },
  {
    icon: LuAlarmClock,
    title: "On Time",
    descr: "We move with purpose and punctuality. Always right on schedule.",
  },
];

const Chooseus = () => {
  return (
    <>
      <div className="chooseus">
        <div className="container">
          <div className="content">
            <div className="title">
              <p>Trusted moves, everyday</p>
              <h2>
                Why people move <br />
                everyday with us
              </h2>
            </div>

            <div className="boxes">
              {reasons.map((item, index) => (
                <div className="box" key={index}>
                  <div className="icon">
                    <span>
                      <item.icon />
                    </span>
                  </div>
                  <div className="text">
                    <h3>{item.title}</h3>
                    <p>{item.descr}</p>
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

export default Chooseus;
