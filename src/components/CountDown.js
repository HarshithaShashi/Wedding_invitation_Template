import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./CountDown.css";

function TimeSection() {
  const targetDate = useMemo(() => new Date("2024-10-13T23:59:00"), []);

  const calculateTimeRemaining = useCallback(() => {
    const now = new Date();
    const timeDifference = targetDate - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  }, [targetDate]);
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);
  // console.log(timeRemaining)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeRemaining]);


  return (
    <div className="Count" id="timeSection">
      <div className="Count-Heading">
        <span></span>
        We are waiting for.....
        <br />
        <span className="Count-Heading-Main">The adventure</span>
      </div>
      <div className="clock">
        <div className="countdown">
          <div>{timeRemaining.days}</div>
          <div className="count-days">Days</div>
        </div>
        <div className="countdown">
          <div>{timeRemaining.hours}</div>
          <div className="count-days">Hours</div>
        </div>
        <div className="countdown">
          <div>{timeRemaining.minutes}</div>
          <div className="count-days">Minutes</div>
        </div>
        <div className="countdown">
          <div>{timeRemaining.seconds}</div>
          <div className="count-days">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default TimeSection;