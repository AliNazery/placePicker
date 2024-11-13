import React, { useEffect, useState } from 'react'

export default function ProgressBar({timer}) {
    const [remainingTime, setremainingTime] = useState(timer);
    useEffect(() => {
      const interval = setInterval(() => {
        setremainingTime((prevTime) => prevTime - 10);
      }, 10);
      return () => {
        clearInterval(interval);
      };
    }, []);
  return (
    <div>
      <progress value={remainingTime} max={timer} />
    </div>
  );
}
