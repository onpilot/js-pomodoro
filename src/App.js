import './App.css';

function App() {
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
              <button id="break-increment">-</button>
              <div id="break-length">{5}</div>
              <button id="break-increment">+</button>
            </div>
          </div>
          <div>
            <label id="session-label" htmlFor="session-length">
              Session Length
            </label>
            <div className="box">
              <button id="session-increment">-</button>
              <div id="session-length">{25}</div>
              <button id="session-increment">+</button>
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
            <button id="reset">reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
