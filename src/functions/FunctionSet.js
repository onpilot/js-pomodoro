import { useState } from 'react';

export const FunctionSet = () => {
  const initBreakLen = 5;
  const initSessionLen = 25;
  // const initBreakLen = 0.05;
  // const initSessionLen = 4 / 60;
  const initCurrent = 'session';
  const [breakLen, setBreakLen] = useState(initBreakLen);
  const [sessionLen, setSessionLen] = useState(initSessionLen);
  const [current, setCurrent] = useState(initCurrent);
  const [timeleft, setTimeleft] = useState(initSessionLen * 60);
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
        setBreakLen(increase(breakLen));
      }
      if (s === 'session') {
        setSessionLen(increase(sessionLen));
        setTimeleft(increase60(timeleft));
      }
    }
  };
  const decreaseLen = (s) => {
    if (!started) {
      if (s === 'break') {
        setBreakLen(decrease(breakLen));
      }
      if (s === 'session') {
        setSessionLen(decrease(sessionLen));
        setTimeleft(decrease60(timeleft));
      }
    }
  };

  const reset = () => {
    setCurrent(initCurrent);
    setBreakLen(initBreakLen);
    setSessionLen(initSessionLen);
    setTimeleft(initSessionLen * 60);
    beep().pause();
    beep().currentTime = 0;
    setStarted(false);
    clearInterval(intervalId);
    setIntervalId(null);
    // console.clear();
  };

  let timerId;
  const start_pause = () => {
    if (!started) {
      timerId = setInterval(timer, 1000);
      setIntervalId(timerId);
      setStarted(true);
    } else {
      clearInterval(intervalId);
      setStarted(false);
    }
  };

  let time = timeleft;
  // patchy approach
  let isSession = true;
  const timer = () => {
    setTimeleft((prevState) => prevState - 1);
    if (--time === 0) {
      clearInterval(timerId);
      setStarted(false);
      beep().play();
      setTimeout(continueToBreakOrSession, 2000);
    }
    // console.log(current, time, timeleft, 'still counting until interval cleared');
  };
  const continueToBreakOrSession = () => {
    setCurrent((prevState) => (prevState === 'session' ? 'break' : 'session'));
    // patchy approach
    setTimeleft(isSession ? breakLen * 60 : sessionLen * 60);
    isSession ? (time = breakLen * 60) : (time = sessionLen * 60);
    isSession = !isSession;

    start_pause();
  };
  // console.log(current, started, timeleft, time);

  return {
    breakLen,
    sessionLen,
    current,
    timeleft,
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
