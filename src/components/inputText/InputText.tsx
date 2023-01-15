import React from "react";
import "./InputText.scss";

export const InputText = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-text"
        placeholder="Search for IP address or domain"
        {...props}
      />
      <button className="input-button">{`>`}</button>
    </div>
  );
};
