import React, { useState } from "react";
import "./Navbar.css";

import { AiOutlinePlus as Plus, AiOutlineMinus as Minus } from "react-icons/ai";

const Accordion = ({ Icon, title, liEl1, liEl2 }) => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <div className="accordion-container">
      <div
        className={`notification-container ${
          clicked ? "notification-container-clicked down-arrow" : ""
        }`}
        onClick={clickHandler}
      >
        <Icon
          size={20}
          className={`react-icon ${clicked ? "react-icon-clicked" : ""}`}
        />
        <h3 className="notifications">{title}</h3>
        {!clicked ? (
          <Plus size={20} className="plus-icon" />
        ) : (
          <Minus size={20} className="minus-icon" />
        )}
      </div>
      <div className={`content-container ${clicked ? "" : "show-list"} `}>
        <li>{liEl1}</li>
        <li>{liEl2}</li>
      </div>
    </div>
  );
};

export default Accordion;
