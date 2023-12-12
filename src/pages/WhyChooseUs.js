import React from "react";

import { WhyChooseUsInfo } from "../data";
import SectionTitle from "../components/SectionTitle";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us" id="why-choose-us">
      <SectionTitle className="section-title2" section="Why Choose Us?" />
      <div className="why-choose-us-content">
        {WhyChooseUsInfo.map((info) => (
          <div
            className="why-choose-us-info"
            key={info.id}
            style={{ background: info.bgColor }}
          >
            <img src={info.icon} alt={info.icon} />
            <h3
              className="why-choose-us-info-title"
              style={{ color: info.titleColor }}
            >
              {info.title}
            </h3>
            <p
              className="why-choose-us-info-text"
              style={{ color: info.textColor }}
            >
              {info.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
