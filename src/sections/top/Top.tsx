import React from "react";
import "./Top.scss";

export const Top = () => {
  return (
    <div className="top-container">
      <div className="top-inner-container">
        <h1 className="top-inner-container-title">IP Address Tracker</h1>
      </div>
      <div className="top-bottom-inner-container">
        <div className="input-container">
          <input type="text" className="input-text" placeholder="Search for IP address or domain" />
          <button className="input-button">{`>`}</button>
        </div>
      </div>
    </div>
  );
};
