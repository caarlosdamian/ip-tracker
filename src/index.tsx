import React from "react";
import ReactDOM from "react-dom/client";
import App from "./common/app/App";
import  "./common/app/App.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
