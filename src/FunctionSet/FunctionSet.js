import { useState } from 'react';

export const FunctionSet = () => {
  const initBreakLen = 5,
    initSessionLen = 25;
  const [breakLen, setBreakLen] = useState(initBreakLen);
  const [sessionLen, setSessionLen] = useState(initSessionLen);

  const decrease = (s) => {
    s === 'break'
      ? setBreakLen((prevState) => {
          return prevState > 0 ? prevState - 1 : prevState;
        })
      : setSessionLen((prevState) => {
          return prevState > 0 ? prevState - 1 : prevState;
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
  };

  return {
    breakLen,
    sessionLen,
    decrease,
    increase,
    reset,
  };
};
