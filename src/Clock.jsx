import  { useState, useEffect } from 'react';

function Clock() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setSeconds(now.getSeconds());
      setMinutes(now.getMinutes());
      setHours(now.getHours());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getSecondsDegrees = () => {
    return ((seconds / 60) * 360) + 90;
  };

  const getMinutesDegrees = () => {
    return ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  };

  const getHourDegrees = () => {
    return ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  };

  const handStyle = (degrees) => ({
    transform: `rotate(${degrees}deg)`,
  });

  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hand hour-hand" style={handStyle(getHourDegrees())}></div>
        <div className="hand min-hand" style={handStyle(getMinutesDegrees())}></div>
        <div className="hand second-hand" style={handStyle(getSecondsDegrees())}></div>
      </div>
    </div>
  );
}

export default Clock;