// import React, { useState, useEffect } from "react";

// interface CountdownProps {
//   targetDate: Date;
// }

// const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   function calculateTimeLeft() {
//     const difference = targetDate.getTime() - new Date().getTime();

//     if (difference <= 0) {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     }

//     const seconds = Math.floor(difference / 1000);
//     const minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(minutes / 60);
//     const days = Math.floor(hours / 24);

//     return {
//       days: days,
//       hours: hours % 24,
//       minutes: minutes % 60,
//       seconds: seconds % 60,
//     };
//   }

//   return (
//     <div>
//       {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes,{" "}
//       {timeLeft.seconds} seconds
//     </div>
//   );
// };

// export default Countdown;

import { Title } from "@mantine/core";
import { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const nextTen = new Date();
      nextTen.setHours(8, 0, 0, 0);
      if (nextTen <= now) {
        nextTen.setDate(nextTen.getDate() + 1);
      }
      const timeDiff = nextTen.getTime() - now.getTime();
      setTimeLeft(timeDiff);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <Title order={4} mt="-0.5vh" color="red">
      {formatTime(timeLeft)}
    </Title>
  );
};

export default Countdown;
