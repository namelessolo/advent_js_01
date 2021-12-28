import React, { useState, useEffect } from "react";
import { ReactComponent as Settings } from "./assets/images/gear.svg";

function App() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(20);
  const [time, setTime] = useState(minutes * 60 + seconds);

  const clickHandler = () => setIsDisabled((prevState) => !prevState);
  const clickRunning = () => {
    setTime(minutes * 60 + seconds);
    setIsRunning((prevState) => !prevState);
    setIsDisabled(true);
  };
  const changeSecondsHandler = (e) => setSeconds(+e.target.value);
  const changeMinutesHandler = (e) => setMinutes(+e.target.value);
  useEffect(() => {
    if (isRunning) {
      if (time > 0) {
        const timeInt = window.setTimeout(() => {
          setTime((time) => {
            setSeconds(new Date((time - 1) * 1000).getSeconds());
            setMinutes(new Date((time - 1) * 1000).getMinutes());
            return time - 1;
          });
        }, 1000);
        return () => {
          window.clearInterval(timeInt);
        };
      } else {
        alert("DONE");
      }
    }
  }, [isRunning, time, seconds, minutes]);

  return (
    <div className="wrapper">
      <div className={`ring ${time > 0 ? "" : " ending"}`}>
        <svg width="518" height="518" viewBox="0 0 518 518">
          <circle strokeWidth="9px" x="0" y="y" cx="259" cy="259" r="254" />
        </svg>
      </div>

      <div className="timer">
        <div className="time">
          <div className="minutes">
            <input
              type="text"
              value={minutes < 10 ? "0" + minutes : minutes}
              disabled={isDisabled ? true : false}
              onChange={changeMinutesHandler}
            />
          </div>
          <div className="colon">:</div>
          <div className="seconds">
            <input
              type="text"
              value={seconds < 10 ? "0" + seconds : seconds}
              disabled={isDisabled ? true : false}
              onChange={changeSecondsHandler}
              max="59"
            />
          </div>
        </div>
        <button className="start" onClick={clickRunning}>
          {!isRunning ? "start" : "stop"}
        </button>
        <button className="settings">
          <Settings onClick={clickHandler} />
        </button>
      </div>
    </div>
  );
}

export default App;
