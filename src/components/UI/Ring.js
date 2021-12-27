import React from "react";
import classes from "./Ring.module.css";

const Ring = () => {
  return (
    <div className={classes.ring}>
      <svg width="518" height="518" viewBox="0 0 518 518">
        <circle stroke-width="9px" x="0" y="y" cx="259" cy="259" r="254" />
      </svg>
    </div>
  );
};

export default Ring;
