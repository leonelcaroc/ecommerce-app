import React from "react";
import "./Slider.scss";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import "./Slider.scss";

const Slider = () => {
  const data = [
    "https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/963696/pexels-photo-963696.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/247114/pexels-photo-247114.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div className="slider">
      <div className="container">
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon">
          <WestIcon />
        </div>
        <div className="icon">
          <EastIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
