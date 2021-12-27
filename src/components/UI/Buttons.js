import React from "react";
import classes from "./Buttons.module.css";
import ReactGear from "../../assets/images/gear.svg";

// import Gear from "./Gear";

const Buttons = () => {
  return (
    <>
      <button className={classes.start}>start</button>
      <button className={classes.settings}>
        <img src={ReactGear} alt="" />
      </button>
    </>
  );
};

export default Buttons;
