import React from "react";
import Links from "./Links";

const NavbarMobile = ({ isOpen, className }) => {
  return (
    <>
      {isOpen && (
        <nav className={className}>
          <Links parentClass="nav-links" itemClass="nav-link" position="left" />
          <Links parentClass="nav-links" itemClass="nav-link" position="right" />
        </nav>
      )}
    </>
  );
};

export default NavbarMobile;
