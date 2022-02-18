import { useState, useEffect } from 'react';

export const FunctionSet = () => {
  const initCurrent = 'session',
    initBreakLen = 0.05, // 5
    initSessionLen = 4 / 60; // 25
  const [current, setCurrent] = useState(initCurrent);
  const [breakLen, setBreakLen] = useState(initBreakLen);
  const [sessionLen, setSessionLen] = useState(initSessionLen);
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(initSessionLen * 60);
  const [intervalId, setIntervalId] = useState(null);

  const decrease = (s) => {
    s === 'break'
      ? setBreakLen((prevState) => {
          return prevState > 1 ? prevState - 1 : prevState;
        })
      : setSessionLen((prevState) => {
          return prevState > 1 ? prevState - 1 : prevState;
        });
  };
  const increase = (s) => {
    s === 'break'
      ? setBreakLen((prevState) => {
          return prevState + 1;
        })
      : setSessionLen((prevState) => {
          return prevState + 1;
        });
  };
  const reset = () => {
    setBreakLen(initBreakLen);
    setSessionLen(initSessionLen);
    setTimeLeft(sessionLen * 60);
  };

  const start_pause = () => {
    setTimer();
  };

  const setTimer = () => {
    if (!started) {
      setStarted(true);
      const timer = setInterval(() => {
        countdown(timer);
        // console.log("still counting until interval cleared");
      }, 1000);
      setIntervalId(timer);
    } else {
      setStarted(false);
      clearInterval(intervalId);
    }
  };
  let time = timeLeft;
  const countdown = (timer) => {
    if (--time > 0) {
      setTimeLeft((prevState) => prevState - 1);
    }
    if (time === 0) {
      clearInterval(timer);
      console.log('stop');

      setStarted(false);
      // beep sound
      current === 'session' ? setCurrent('break') : setCurrent('session');
      // setTimer();
    }
  };
  console.log(current, started, time);

  useEffect(() => {
    current === 'session'
      ? setTimeLeft(sessionLen * 60)
      : setTimeLeft(breakLen * 60);
  }, [current, sessionLen, breakLen]);

  return {
    current,
    breakLen,
    sessionLen,
    timeLeft,
    decrease,
    increase,
    start_pause,
    reset,
  };
};
