import React from "react";
import "./InputText.scss";

interface InputTextI extends React.InputHTMLAttributes<HTMLInputElement> {
  clickFunction: () => void;
}

export const InputText = ({ clickFunction, ...props }: InputTextI) => {
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-text"
        placeholder="Search for IP address or domain"
        {...props}
      />
      <button className="input-button" onClick={clickFunction} >{`>`}</button>
    </div>
  );
};
