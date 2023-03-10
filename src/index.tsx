import React from "react";
import ReactDOM from "react-dom/client";
import App from "./common/app/App";
import "./common/app/App.scss";
import "leaflet/dist/leaflet.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
