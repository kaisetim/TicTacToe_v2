import React from "react";

export const Field = props => {
  const { fieldNumber, onClickFunction } = props;

  const changeColor = () => {
    if (event.target.classList[2] !== ("red" || "blue")) {
      alert("Clicked!");
    } else {
      alert("Already Clicked!");
    }
  };

  return (
    <div
      className={`field ${fieldNumber}`}
      onClick={() => {
        changeColor();
        onClickFunction;
      }}
    ></div>
  );
};
