import React from "react";

const ButtonLink = ({ link, text }) => {
  return (
    <a href={link} className="buttons-link">
      {text}
    </a>
  );
};

export default ButtonLink;
