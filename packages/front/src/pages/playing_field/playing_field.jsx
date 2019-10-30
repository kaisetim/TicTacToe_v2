import React from "react";

import "./playing_field.scss";

import { Box } from "../../components/box/box.jsx";

export const PlayingField = () => {
  return (
    <>
      <div className="playingField">
        {/* <div className="row"> */}
        <div className="fieldRow">
          <Box classes={["box"]}></Box>
          <Box classes={["box"]}></Box>
          <Box classes={["box"]}></Box>
        </div>
        {/* </div> */}
        {/* <div className="row"> */}
        <div className="fieldRow">
          <Box classes={["box"]}></Box>
          <Box classes={["box"]}></Box>
          <Box classes={["box"]}></Box>
        </div>
        {/* </div> */}
        {/* <div className="row"> */}
        <div className="fieldRow">
          <Box classes={["box"]}></Box>
          <Box classes={["box"]}></Box>
          <Box classes={["box"]}></Box>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
