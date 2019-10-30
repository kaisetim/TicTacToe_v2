import React from "react";

import "./playingField.scss";

export const PlayingField = () => {
  return (
    <div className="playingField">
      <div className="row row1">
        <div className="field 00"></div>
        <div className="field 01"></div>
        <div className="field 02"></div>
      </div>
      <div className="row row2">
        <div className="field 10"></div>
        <div className="field 11"></div>
        <div className="field 12"></div>
      </div>
      <div className="row row3">
        <div className="field 20"></div>
        <div className="field 21"></div>
        <div className="field 22"></div>
      </div>
    </div>
  );
};
