import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import HamburgerButton from "./HamburgerButton";
import NavbarMobile from "./NavbarMobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isMobile = window.innerWidth < 1080;

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 1080;
      if (newIsMobile !== isMobile) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <>
      <Logo className="logo" />
      {isMobile ? (
        <>
          <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
          <NavbarMobile isOpen={isOpen} className="navbar_mobile" />
        </>
      ) : (
        <>
          <Navbar className="navbar" />
        </>
      )}
    </>
  );
};

export default Header;
