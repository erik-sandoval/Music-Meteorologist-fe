import React from "react";

const AudioDetails = ({ name, description }) => {
  return (
    <div className="audio-detail">
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
};

export default AudioDetails;
