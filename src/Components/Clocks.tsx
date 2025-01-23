import React from 'react'

interface ClocksProps {
    id: string;
    name: string;
    timezoneOffset: number;
    onRemove: (id: string) => void;
    globalTime: Date;
}

export const Clocks: React.FC<ClocksProps> = ({id, name, timezoneOffset, onRemove, globalTime}) => {
    
  const calculateTime = () => {
      const utcTime = globalTime.getTime() + globalTime.getTimezoneOffset() * 60000;
      return new Date(utcTime+timezoneOffset * 3600000);
    };

    const currentTime = calculateTime();
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();

    return (
      <div className="clocks">
      <h3>{name}</h3>
      <div className="clock-face">
        <div
          className="hour-hand"
          style={{ transform: `rotate(${(hours % 12) * 30 + minutes * 0.5}deg)` }}
        ></div>
        <div
          className="minute-hand"
          style={{ transform: `rotate(${minutes * 6}deg)` }}
        ></div>
        <div
          className="second-hand"
          style={{ transform: `rotate(${seconds * 6}deg)` }}
        ></div>
      </div>
      <button onClick={() => onRemove(id)}>Удалить</button>
    </div>
    );
  };
