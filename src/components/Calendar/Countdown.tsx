import { useEffect, useState } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // Countdown logic
  const targetDate = new Date("2023-12-25T00:00:00Z");

  const updateCountdown = () => {
    const now = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" })
    );
    const timeRemaining = targetDate.getTime() - now.getTime(); // Ensure both values are of type 'number'

    const days: number = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes: number = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds: number = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    setCountdown({ days, hours, minutes, seconds });
  };

  // Initial countdown update
  useEffect(() => {
    updateCountdown();
  }, []);

  // Update countdown every second
  useEffect(() => {
    const intervalId = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="countdown">
      크리스마스까지{" "}
      <span
        id="countdown"
        className="countdown"
      >{`D-${countdown.days} ${countdown.hours}시간${countdown.minutes}분${countdown.seconds}초`}</span>{" "}
      남음
    </div>
  );
};

export default Countdown;
