import React from "react";
import classes from "./Time.module.css";

const Time = () => {
  return (
    <div className={classes.time}>
      <div className="minutes">
        <input type="text" value="15" disabled />
      </div>
      <div className="colon">:</div>
      <div className="seconds">
        <input type="text" value="00" disabled />
      </div>
    </div>
  );
};

export default Time;
