import React from "react";

import logo from "../Assets/logo.png";

const Logo = ({className}) => {
  return (
    <div className={className}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
