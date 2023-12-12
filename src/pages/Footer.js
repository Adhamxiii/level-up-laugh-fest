import React from "react";
import Links from "../components/Links";
import Logo from "../components/Logo";
import SocialLinks from "../components/SocialLinks";
import { socialLinks } from "../data";

const Footer = () => {
  const now = new Date().getFullYear().toString();

  return (
    <footer>
      <div className="footer-layout">
        <Logo className="footer-logo" />
        <div className="footer-container">
          <p className="footer-title">Links</p>
          <Links parentClass="footer-links" itemClass="footer-link" />
        </div>

        <ul className="footer-icons">
        {socialLinks.map((link) => {
            return (
              <SocialLinks key={link.id} {...link} itemClass="footer-icon" />
            );
          })}
        </ul>


      </div>
      <hr className="footer-divider" />
      <div className="copyright">
        © {now} Adham Nasser. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
