import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import TipCalculator from "./TipCalculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TipCalculator />
  </React.StrictMode>
);
