import React from "react";

export const Field = props => {
  const changeColor = () => {
    if (event.target.classList[2] !== ("red" || "blue")) {
      alert("Not Clicked!");
      event.target.classList.toggle("red");
    } else {
      alert("Clicked!");
    }
  };

  const { fieldNumber } = props;

  return (
    <div
      className={`field ${fieldNumber}`}
      onClick={() => {
        changeColor();
      }}
    ></div>
  );
};
