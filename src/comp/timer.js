import React, { useState, useEffect } from 'react';
import moment from 'moment';

const TimeCounter = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const startTime = moment();
    const interval = setInterval(() => {
      const currentTime = moment();
      const duration = moment.duration(currentTime.diff(startTime));
      setElapsedTime(duration.asMilliseconds());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => moment.utc(time).format('HH:mm:ss');

  const days = Math.floor(moment.duration(elapsedTime).asDays());
  const hours = moment.duration(elapsedTime).hours();
  const minutes = moment.duration(elapsedTime).minutes();
  const seconds = moment.duration(elapsedTime).seconds();

  return (
    <div className="text-xl md:text-6xl text-center flex flex-wrap gap-2 md:gap-0 w-full items-center justify-center">
      <div className="text-2xl mr-1 font-extralight">in</div>
      <div className="mx-1 w-20 p-2 bg-white text-yellow-500 rounded-lg">
        <div className="font-mono leading-none">{days}</div>
        <div className="font-mono uppercase text-sm leading-none">Days</div>
      </div>
      <div className="mx-1 w-20 p-2 bg-white text-yellow-500 rounded-lg">
        <div className="font-mono leading-none">{hours}</div>
        <div className="font-mono uppercase text-sm leading-none">Hours</div>
      </div>
      <div className="mx-1 w-20 p-2 bg-white text-yellow-500 rounded-lg">
        <div className="font-mono leading-none">{minutes}</div>
        <div className="font-mono uppercase text-sm leading-none">Minutes</div>
      </div>
      <div className="text-2xl mx-1 font-extralight">and</div>
      <div className="mx-1 w-20 p-2 bg-white text-yellow-500 rounded-lg">
        <div className="font-mono leading-none">{seconds}</div>
        <div className="font-mono uppercase text-sm leading-none">Seconds</div>
      </div>
    </div>
  );
};

export default TimeCounter;
