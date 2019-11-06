import React from "react";
import { render } from "react-dom";

import { GamePage } from "./pages/gamePage/gamePage.jsx";

document.addEventListener("DOMContentLoaded", () => {
  render(
    <>
      <GamePage></GamePage>
    </>,
    document.getElementById("content")
  );
});

document.addEventListener("DOMContentLoaded", () => {
  render(<TestComponent />, document.getElementById("content"));
});
