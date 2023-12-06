import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { QuizProvider } from "./components/contextes/QuizContext";
// import "./bankstyles.css";
// import Bank from "./components/Bank";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>

    {/* <Bank /> */}
  </React.StrictMode>
);
