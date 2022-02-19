import { useState, useEffect } from 'react';

export const FunctionSet = () => {
  const initCurrent = 'session';
  const initBreakLen = 5; // 0.05
  const initSessionLen = 25; // 4 / 60
  const initSessionTimeLeft = initSessionLen * 60,
    initBreakTimeLeft = initBreakLen * 60;
  const [current, setCurrent] = useState(initCurrent);
  const [breakLen, setBreakLen] = useState(initBreakLen);
  const [sessionLen, setSessionLen] = useState(initSessionLen);
  const [timeLeft, setTimeLeft] = useState(initSessionTimeLeft);
  const [started, setStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const decrease = (s) => {
    if (s === 'break' && started === false) {
      setBreakLen((prevState) => {
        return prevState > 1 ? prevState - 1 : prevState;
      });
      if (current === s) {
        decreaseTimeLeft();
      }
    }
    if (s === 'session' && started === false) {
      setSessionLen((prevState) => {
        return prevState > 1 ? prevState - 1 : prevState;
      });
      if (current === s) {
        decreaseTimeLeft();
      }
    }
  };
  const increase = (s) => {
    if (s === 'break' && started === false) {
      setBreakLen((prevState) => prevState + 1);
      if (current === s) {
        increaseTimeLeft();
      }
    }
    if (s === 'session' && started === false) {
      setSessionLen((prevState) => prevState + 1);
      if (current === s) {
        increaseTimeLeft();
      }
    }
  };
  const decreaseTimeLeft = () => {
    setTimeLeft((prevState) => {
      return prevState > 60 ? prevState - 60 : prevState;
    });
  };
  const increaseTimeLeft = () => {
    setTimeLeft((prevState) => prevState + 60);
  };

  const reset = () => {
    setCurrent(initCurrent);
    setBreakLen(initBreakLen);
    setSessionLen(initSessionLen);
    setTimeLeft(initSessionTimeLeft);
    setStarted(false);
    clearInterval(intervalId);
    setIntervalId(null);
    console.clear();
  };

  const start_pause = () => {
    setTimer();
  };

  const setTimer = () => {
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
    if (--time > 0) {
      setTimeLeft((prevState) => prevState - 1);
    }
    if (time === 0) {
      clearInterval(timer);
      // console.log('stop');
      setStarted(false);
      // beep sound
      current === 'session' ? setCurrent('break') : setCurrent('session');
      current === 'session' ? setTimeLeft(initBreakTimeLeft) : setTimeLeft(initSessionTimeLeft);
      // How to automatically continue timer on next break/session?
      // setTimer();
    }
  };
  console.log(current, started, time);

  // useEffect(() => {
  //   current === 'session'
  //     ? setTimeLeft(sessionLen * 60)
  //     : setTimeLeft(breakLen * 60);
  // }, [current, sessionLen, breakLen]);

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
