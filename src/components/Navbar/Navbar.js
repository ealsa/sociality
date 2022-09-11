import "./Navbar.css";
import React, { useState } from "react";
import logos from "./logoData.js";
import accordionData from "./accordionData.js";
import Accordion from "./Accordion";
import { IoIosNotificationsOutline as Alert } from "react-icons/io";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Navbar = () => {
  const [hideNav, setHideNav] = useState(false);

  const navClickHandler = () => {
    setHideNav(!hideNav);
  };

  return (
    <>
      <button
        onClick={navClickHandler}
        className={`${hideNav ? "button-hidden" : ""}`}
      >
        <span className="btn-icon">
          {!hideNav ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
        </span>
      </button>
      <div className={`navbar ${hideNav ? "hide-navbar" : ""}`}>
        <h1 className="title">
          <span className="sociality">sociality.</span>io
        </h1>

        <div className="nav-tabs">
          <div className="left-tab">
            {logos.map((el) => (
              <div className="logo-container" key={el.id}>
                <input
                  type="radio"
                  className="logo-input"
                  id={"logo_" + el.num}
                  name="logos"
                  defaultChecked={el.checked}
                />
                <label htmlFor={"logo_" + el.num}>
                  <img src={el.icon} alt="logo" />
                </label>
              </div>
            ))}
          </div>

          <div className="right-tab">
            <div className="notification-container">
              <Alert size={20} className="react-icon" />
              <h3 className="notifications">
                NOTIFICATIONS <span className="notification-num">29</span>
              </h3>
            </div>

            {accordionData.map((el) => (
              <Accordion
                Icon={el.icon}
                title={el.title}
                key={el.id}
                liEl1={el.liEl1}
                liEl2={el.liEl2}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
