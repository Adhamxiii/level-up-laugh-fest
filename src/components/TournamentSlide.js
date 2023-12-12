import React from "react";

const TournamentSlide = ({ image, gameName, dates, prizes }) => {
  return (
    <div className="tournament-slide">
      <img src={image} alt="Tournament" className="tournament-hero-img" />
      <div className="tournament-info">
        {gameName && <h1 className="game-name">{gameName}</h1>}
        <div className="tournament-text">
          <div className="tournament-dates-and-prizes">
            <div className="tournament-date">
              {dates &&
                dates.map((date, index) => (
                  <p key={index} className="tournament-date-text">
                    {date}
                  </p>
                ))}
            </div>
            <div className="tournament-prize">
              {prizes &&
                prizes.map((prize, index) => (
                  <p key={index} className="tournament-prize-text">
                    {prize}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentSlide;