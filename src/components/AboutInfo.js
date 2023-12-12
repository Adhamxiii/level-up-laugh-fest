import React from "react";
import { aboutInfoContent } from "../data";

const AboutInfo = () => {
  return (
    <div className="about-info-wrapper">
      {aboutInfoContent.map((item) => {
        const { id, title, body } = item;
        return (
          <div key={id} className="about-info">
            <h3 className="about-info-title">{title}</h3>
            <p className="about-info-text">{body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AboutInfo;
