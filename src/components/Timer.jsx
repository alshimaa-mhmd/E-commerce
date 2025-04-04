import { useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });
  
  useEffect(() => {
    // Timer logic
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        // Calculate new time
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                // Timer completed
                clearInterval(timer);
                return prevTime;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    // Cleanup function
    return () => clearInterval(timer);
  }, []);
  
  // Helper to pad numbers with leading zero
  const padNumber = num => {
    return num.toString().padStart(2, '0');
  };
  
  return (
    <div className="flex items-center justify-center my-8 sm:my-0">
      <div className="flex items-center gap-1 text-center">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="text-sm font-medium text-gray-500">Days</div>
          <div className="text-5xl font-bold w-16">{padNumber(timeLeft.days)}</div>
        </div>
        
        {/* Separator */}
        <div className="text-4xl font-bold text-red-500 pb-5">:</div>
        
        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="text-sm font-medium text-gray-500">Hours</div>
          <div className="text-5xl font-bold w-16">{padNumber(timeLeft.hours)}</div>
        </div>
        
        {/* Separator */}
        <div className="text-4xl font-bold text-red-500 pb-5">:</div>
        
        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="text-sm font-medium text-gray-500">Minutes</div>
          <div className="text-5xl font-bold w-16">{padNumber(timeLeft.minutes)}</div>
        </div>
        
        {/* Separator */}
        <div className="text-4xl font-bold text-red-500 pb-5">:</div>
        
        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="text-sm font-medium text-gray-500">Seconds</div>
          <div className="text-5xl font-bold w-16">{padNumber(timeLeft.seconds)}</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;