import React from "react";

import panalImg from "../Assets/panal.jpg";
import interactiveImg from "../Assets/interactive.jpg";

import Tournament from "../components/Tournament";
import PanelCard from "../components/PanelCard";
import InfoCard from "../components/InfoCard";
import SectionTitle from "../components/SectionTitle";

const Events = () => {
  return (
    <div className="event-highlights" id="event-highlights">
      <SectionTitle className="section-title" section="Event Highlights" />
      <div className="events-content">
        <Tournament />

        <div className="event-logo card"></div>
        <div className="event-cover card"></div>

        <PanelCard
          className={"panel card"}
          imgSrc={panalImg}
          title="Panel Discussions"
          subtitle="Game Development Insights"
          date="October 16, 2023"
          time="2:00 PM - 4:00 PM"
          modalContent={
            <div>
              <h2>Game Development Insights</h2>
              <p>
                Dive into the world of game development and gain valuable
                insights from industry experts. Explore the creative process,
                technology trends, and challenges behind crafting immersive
                gaming experiences.
              </p>
            </div>
          }
        />

        <PanelCard
          className={"interactive panel card"}
          imgSrc={interactiveImg}
          title="Interactive Workshops"
          subtitle="Digital Art Masterclass"
          date="October 16, 2023"
          time="10:00 AM - 12:00 PM"
          modalContent={
            <div>
              <h2>Digital Art Masterclass</h2>
              <p>
                Experience an immersive Digital Art Masterclass led by an
                experienced artist, showcasing fundamental techniques and
                advanced skills for all skill levels, allowing for color,
                imagination, and artistic expression.
              </p>
            </div>
          }
        />

        <InfoCard />
      </div>
    </div>
  );
};

export default Events;
