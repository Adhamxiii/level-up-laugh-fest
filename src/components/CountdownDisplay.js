import React from "react";

const CountdownDisplay = ({ label, value }) => {
  return (
    <div className="countdown">
      <p className={`countdown-${label.toLowerCase()} circle`}>{value}</p>
      <p className={`${label.toLowerCase()} oval`}>{label}</p>
    </div>
  );
};

export default CountdownDisplay;
