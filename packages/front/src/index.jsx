import React from "react";
import { render } from "react-dom";

import { PlayingField } from "./components/playingField/playingField.jsx";

document.addEventListener("DOMContentLoaded", () => {
  render(
    <>
      <PlayingField></PlayingField>
    </>,
    document.getElementById("content")
  );
});
