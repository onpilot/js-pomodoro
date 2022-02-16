import { FunctionSet } from './FunctionSet';
import './App.css';

function App() {
  const { breakLen, sessionLen, decrease, increase, reset } = FunctionSet();

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
            Session
          </label>
          <div id="time-left">{'mm:ss'}</div>
          <div>
            <button id="start_stop">start/pause</button>
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
