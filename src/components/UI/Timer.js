import React from "react";
import classes from "./Timer.module.css";

const Timer = ({ children }) => {
  return <div className={classes.timer}>{children}</div>;
};

export default Timer;
