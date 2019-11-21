import React, { useState } from "react";

import "./playingField.scss";

import { Field } from "../field/field.jsx";

export const PlayingField = () => {
  let roundCounter = 0;

  return (
    <>
      <div className="playingField">
        <div className="row">
          <Field fieldNumber="0_0" counter={roundCounter} />
          <Field fieldNumber="0_1" counter={roundCounter} />
          <Field fieldNumber="0_2" counter={roundCounter} />
        </div>
        <div className="row">
          <Field fieldNumber="1_0" counter={roundCounter} />
          <Field fieldNumber="1_1" counter={roundCounter} />
          <Field fieldNumber="1_2" counter={roundCounter} />
        </div>
        <div className="row">
          <Field fieldNumber="2_0" counter={roundCounter} />
          <Field fieldNumber="2_1" counter={roundCounter} />
          <Field fieldNumber="2_2" counter={roundCounter} />
        </div>
      </div>
    </>
  );
};
