import React from "react";

import aboutMe from "../Assets/aboutMe.png";
import AboutInfo from "../components/AboutInfo";
import Buttons from "../components/Buttons";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <section className="about" id="about">
      <img src={aboutMe} alt="about me" className="about-img" />
      <article className="about-content">
        <SectionTitle className="section-title" section="About Us" />
        <p className="about-text">
          🎮 Hi there! I'm Adham, the gaming and comedy enthusiast behind the
          scenes at the "Level-Up Laugh Fest." 🤣
        </p>
        <p className="about-text">
          🕹️ With a passion for both gaming and laughter, I embarked on this
          thrilling journey to create a one-of-a-kind event that combines the
          best of both worlds. 🚀
        </p>
        
      </article>
          <AboutInfo />

      <Buttons />
      <p className="about-text-bottom">
        🎮 Get ready to laugh, game, and create memories like never before! 🎉
      </p>
    </section>
  );
};

export default About;
