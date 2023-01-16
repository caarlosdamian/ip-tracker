import React, {
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { Card } from "../../components/card/Card";
import { InputText } from "../../components/inputText/InputText";
import { fetchIpAddress } from "../../redux/slices/trackerSlice";
import { AppThunkDispatch } from "../../redux/store";
import "./Top.scss";

export const Top = () => {
  const [searchIp, setSearchIp] = useState("");
  const dispatch = useDispatch<AppThunkDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchIp(e.target.value);
  };

  const handleClick = () => {
    dispatch(fetchIpAddress(searchIp));
  };
  return (
    <div className="top-container">
      <Card />
      <div className="top-inner-container">
        <h1 className="top-inner-container-title">IP Address Tracker</h1>
      </div>
      <div className="top-bottom-inner-container">
        <InputText
          clickFunction={handleClick}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};
