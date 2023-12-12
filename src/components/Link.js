import React from "react";

const Link = ({ link, itemClass }) => {
  return (
    <li className={itemClass} key={link.id}>
      <a href={link.link}>{link.text}</a>
    </li>
  );
};

export default Link;
