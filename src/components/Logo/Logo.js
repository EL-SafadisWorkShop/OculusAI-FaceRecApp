import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import oculusai from "./oculusai.jpg";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-3"
        options={{ max: 100 }}
        style={{ height: 120, width: 150 }}
      >
        <div className="Tilt-inner pa10">
          <img style={{ paddingTop: "0px" }} alt="Logo" src={oculusai} />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
