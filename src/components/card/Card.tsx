import React from "react";
import "./Card.scss";

const InfoData = [
  {
    id: 1,
    title: "IP Address",
  },
  {
    id: 2,
    title: "Location",
  },
  {
    id: 3,
    title: "Timezone",
  },
  {
    id: 4,
    title: "ISP",
  },
];

export const Card = () => {
  return <div className="card-container">
    {InfoData.map((item)=>(
        <div className="labels-container" key={item.id}>
            <h1 className="label-title">{item.title}</h1>
            <span className="label-value">{item.title}</span>
        </div>
    ))}
  </div>;
};
