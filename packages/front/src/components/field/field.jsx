import React from "react";

export const Field = props => {
  const { fieldNumber, counter } = props;

  let testCounter = counter;

  const changeColor = () => {
    if (event.target.classList[2] !== ("red" || "blue")) {
      alert("Clicked!");
    } else {
      alert("Already Clicked!");
    }
  };

  const onClickFunction = () => {
    changeColor();
    testCounter++;
    console.log(testCounter);
  };

  return (
    <div
      className={`field ${fieldNumber}`}
      onClick={() => {
        onClickFunction();
      }}
    ></div>
  );
};
