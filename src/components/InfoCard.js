import React from "react";

import { InfoCardInfo } from "../data";

const InfoCard = () => {
  return (
    <div className="info card">
      <div className="info-content">
        {InfoCardInfo.map((item) => {
          const { id, title, text, color } = item;
          return (
            <div className="info-item" key={id}>
              <h3 className="info-title" style={{ color: color }}>
                {title}
              </h3>
              <p className="info-text">{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoCard;
