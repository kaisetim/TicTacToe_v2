import React from 'react';

export const Field = props => {
  // tbd @ateiri << maybe you want also to have "color" here, ja? >>
  const { fieldNumber, onClickFunction } = props;

  // tbd @ateiri << please use this pattern to pass parameters to your handler.
  // const myClickHander = () => {
  //   onClickFunction(fieldNumber, color);
  // }
  // tbd @ateiri >>

  return (
    <div className={`field ${fieldNumber}`} onClick={onClickFunction}></div>
  );
};
