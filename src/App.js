import { FunctionSet } from './FunctionSet/FunctionSet';
import { getMinutesSeconds } from './FunctionSet/getMinutesSeconds';
import './App.css';

function App() {
  const {
    current,
    breakLen,
    sessionLen,
    timeLeft,
    decrease,
    increase,
    start_pause,
    reset,
  } = FunctionSet();

  return (
    <div className="app">
      <div className="app-title">25+5 aka Pomodoro Clock</div>
      <div className="app-main">
        <div className="main-top">
          <div>
            <label id="break-label" htmlFor="break-length">
              Break Length
            </label>
            <div className="box">
              <button id="break-decrement" onClick={() => decrease('break')}>
                -
              </button>
              <div id="break-length">{breakLen}</div>
              <button id="break-increment" onClick={() => increase('break')}>
                +
              </button>
            </div>
          </div>
          <div>
            <label id="session-label" htmlFor="session-length">
              Session Length
            </label>
            <div className="box">
              <button id="session-decrement" onClick={() => decrease()}>
                -
              </button>
              <div id="session-length">{sessionLen}</div>
              <button id="session-increment" onClick={() => increase()}>
                +
              </button>
            </div>
          </div>
        </div>
        <div className="main-bottom">
          <label htmlFor="time-left" id="timer-label">
            {current}
          </label>
          <div id="time-left">{getMinutesSeconds(timeLeft)}</div>
          <div>
            <button id="start_stop" onClick={() => start_pause()}>
              start/pause
            </button>
            <button id="reset" onClick={() => reset()}>
              reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
