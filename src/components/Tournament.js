import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import TournamentSlide from "./TournamentSlide";
import { tournaments } from "../data";

const Tournament = () => {
  return (
    <div className="tournament card">
      <h1 className="tournament-title">Gaming Tournaments</h1>
      <div className="tournament-content">
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            interval: 5000,
            pagination: false,
            arrows:false,
          }}
          className="splide"
        >
          {tournaments.map((tournament, index) => (
            <SplideSlide key={index}>
              <TournamentSlide {...tournament} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Tournament;
