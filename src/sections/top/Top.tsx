import React from "react";
import { InputText } from "../../components/inputText/InputText";
import "./Top.scss";

export const Top = () => {
  return (
    <div className="top-container">
      <div className="top-inner-container">
        <h1 className="top-inner-container-title">IP Address Tracker</h1>
      </div>
      <div className="top-bottom-inner-container">
        <InputText/>
      </div>
    </div>
  );
};
