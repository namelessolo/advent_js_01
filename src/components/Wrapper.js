import React from "react";
import "./Wrapper.css";
import Ring from "./UI/Ring";
import Time from "./UI/Time";
import Buttons from "./UI/Buttons";
import Timer from "./UI/Timer";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Ring />
      <Timer>
        <Time />
        <Buttons />
      </Timer>
    </div>
  );
};

export default Wrapper;
