import React from "react";

const AudioDetailsText = ({ name, description }) => {
  return (
    <div className="audio-detail">
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
};

export default AudioDetailsText;
