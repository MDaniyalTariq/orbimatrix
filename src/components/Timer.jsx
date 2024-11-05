/* eslint-disable */
import React, { useEffect, useState } from "react";

const Timer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center my-4">
      <h2 className="text-xl font-semibold">Time Left</h2>
      <div className="flex justify-center space-x-4 mt-2">
        <span>{timeLeft.days} Days</span>
        <span>{timeLeft.hours} Hours</span>
        <span>{timeLeft.minutes} Minutes</span>
        <span>{timeLeft.seconds} Seconds</span>
      </div>
    </div>
  );
};

export default Timer;
