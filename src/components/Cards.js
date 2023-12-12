import React from "react";

import { CardLinkInfo } from "../data";

const Cards = () => {
  return (
    <div className="card-link-wrapper">
      {CardLinkInfo.map((item) => {
        const { id, link, img, title, itemClass } = item;
        return (
          <a href={link} className={`card-link ${itemClass}`} key={id}>
            <img src={img} alt={title} className="card-link__img" />
            <h3 className="card-link__title">{title}</h3>
          </a>
        );
      })}
    </div>
  );
};

export default Cards;
