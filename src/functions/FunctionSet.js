import { useState } from 'react';

export const FunctionSet = () => {
  const initCurrent = 'session';
  const initBreakLen = 5;
  const initSessionLen = 25;
  const [current, setCurrent] = useState(initCurrent);
  const [breakLen, setBreakLen] = useState(initBreakLen);
  const [sessionLen, setSessionLen] = useState(initSessionLen);
  const [timeLeft, setTimeLeft] = useState(initSessionLen * 60);
  const [started, setStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Business logic
  const increase = (prevValue) => (prevValue < 60 ? prevValue + 1 : prevValue);
  const decrease = (prevValue) => (prevValue > 1 ? prevValue - 1 : prevValue);
  const increase60 = (prevValue) => (prevValue < 3600 ? prevValue + 60 : prevValue);
  const decrease60 = (prevValue) => (prevValue > 60 ? prevValue - 60 : prevValue);

  // Implementation/framework logic
  const increaseLen = (s) => {
    if (!started) {
      if (s === 'break') {
        setBreakLen((prevState) => increase(prevState));
        if (current === s) {
          setTimeLeft((prevState) => increase60(prevState));
        }
      }
      if (s === 'session') {
        setSessionLen((prevState) => increase(prevState));
        if (current === s) {
          setTimeLeft((prevState) => increase60(prevState));
        }
      }
    }
  };
  const decreaseLen = (s) => {
    if (!started) {
      if (s === 'break') {
        setBreakLen((prevState) => decrease(prevState));
        if (current === s) {
          setTimeLeft((prevState) => decrease60(prevState));
        }
      }
      if (s === 'session') {
        setSessionLen((prevState) => decrease(prevState));
        if (current === s) {
          setTimeLeft((prevState) => decrease60(prevState));
        }
      }
    }
  };

  const reset = () => {
    setCurrent(initCurrent);
    setBreakLen(initBreakLen);
    setSessionLen(initSessionLen);
    setTimeLeft(initSessionLen * 60);
    beep().pause();
    beep().currentTime = 0;
    setStarted(false);
    clearInterval(intervalId);
    setIntervalId(null);
    console.clear();
  };

  const start_pause = () => {
    if (!started) {
      setStarted(true);
      const timer = setInterval(() => {
        countdown(timer);
        // console.log('still counting until interval cleared');
      }, 1000);
      setIntervalId(timer);
    } else {
      setStarted(false);
      clearInterval(intervalId);
    }
  };

  let time = timeLeft;
  const countdown = (timer) => {
    setTimeLeft((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    if (--time === 0) {
      setStarted(false);
      clearInterval(timer);

      // beep sound
      beep().play();

      // Automatically continue timer to the next break/session
      // current === 'session' ? setCurrent('break') : setCurrent('session');
      // setTimeout(() => {
      //   current === 'session' ? setTimeLeft(breakLen * 60) : setTimeLeft(sessionLen * 60);
      //   current === 'session' ? (time = breakLen * 60) : (time = sessionLen * 60);
      //   start_pause();
      // }, 2000);
    }
  };
  console.log(current, started, timeLeft);

  return {
    current,
    breakLen,
    sessionLen,
    timeLeft,
    decreaseLen,
    increaseLen,
    start_pause,
    reset,
  };
};

const beep = () => {
  const beepId = document.querySelector('#beep');
  return beepId;
};
