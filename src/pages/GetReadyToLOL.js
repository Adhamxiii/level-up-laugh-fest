import React from "react";
import CountdownTimer from "../components/CountdownTimer";
import SectionTitle from "../components/SectionTitle";

const GetReadyToLOL = () => {
  return (
    <section className="get-ready-to-lol" id="get-ready-to-lol">
      <SectionTitle className="section-title2" section="Get Ready To LOL!" />
      <div className="frame-countdownTimer">
        <h2 className="frame-title">Laugh-a-Minute Timer</h2>
        <CountdownTimer />
      </div>
    </section>
  );
};

export default GetReadyToLOL;
