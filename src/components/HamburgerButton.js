import React from "react";

const HamburgerButton = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`menu-icon ${isOpen ? "active" : ""}`}
      id="menuIcon"
      onClick={toggleMenu}
    >
      <div className="wrapper">
        <div className="line top"></div>
        <div className="line middle"></div>
        <div className="line bottom"></div>
      </div>
    </div>
  );
};

export default HamburgerButton;
