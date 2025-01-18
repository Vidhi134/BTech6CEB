import React from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = React.useState(500); // Initial time in seconds

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timerId);
          return 0;
        }
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Countdown Timer: {formatTime(timeLeft)}</h1>
    </div>
  );
}

export default CountdownTimer;
