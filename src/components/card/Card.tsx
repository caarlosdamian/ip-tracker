import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./Card.scss";

export const Card = () => {
  const { ip, country_name, city, country_code, timezone, org } =
    useSelector((state: RootState) => state.tracker.data);

  return (
    <div className="card-container">
      <div className="labels-container">
        <h1 className="label-title"> IP Address </h1>
        <span className="label-value">{ip}</span>
      </div>
      <div className="labels-container">
        <h1 className="label-title"> Location </h1>
        <span className="label-value">
          {`${country_name},${country_code},${city}`}{" "}
        </span>
      </div>
      <div className="labels-container">
        <h1 className="label-title"> Timezone</h1>
        <span className="label-value">{timezone}</span>
      </div>
      <div className="labels-container">
        <h1 className="label-title"> ISP </h1>
        <span className="label-value">{org}</span>
      </div>
    </div>
  );
};
