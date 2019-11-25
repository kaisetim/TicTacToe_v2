import React from "react";

export const Field = props => {
  const { fieldNumber, onClickFunction } = props;

  return (
    <div className={`field ${fieldNumber}`} onClick={onClickFunction}></div>
  );
};
