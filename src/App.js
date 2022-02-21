import { Button } from './components/Button';
import { Display } from './components/Display';
import { Label } from './components/Label';
import { Timerset } from './components/Timerset';
import { Box } from './components/Box';
import { FunctionSet } from './functions/FunctionSet';
import { getMinutesSeconds } from './functions/getMinutesSeconds';
import './App.css';

function App() {
  const { breakLen, sessionLen, current, timeleft, decreaseLen, increaseLen, start_pause, reset } =
    FunctionSet();

  return (
    <div className="app">
      <div className="app-title">25+5 aka Pomodoro Clock</div>
      <div className="app-main">
        <div className="main-top">
          <Timerset className="timerset">
            <Label id="break-label" htmlFor="break-length">
              break length
            </Label>
            <Box className="box">
              <Button id="break-decrement" onClick={() => decreaseLen('break')}>
                -
              </Button>
              <Display id="break-length">{breakLen}</Display>
              <Button id="break-increment" onClick={() => increaseLen('break')}>
                +
              </Button>
            </Box>
          </Timerset>
          <Timerset className="timerset">
            <Label id="session-label" htmlFor="session-length">
              session length
            </Label>
            <Box className="box">
              <Button id="session-decrement" onClick={() => decreaseLen('session')}>
                -
              </Button>
              <Display id="session-length">{sessionLen}</Display>
              <Button id="session-increment" onClick={() => increaseLen('session')}>
                +
              </Button>
            </Box>
          </Timerset>
        </div>
        <div className="main-bottom">
          <Label htmlFor="time-left" id="timer-label">
            {current}
          </Label>
          <Display id="time-left">{getMinutesSeconds(timeleft)}</Display>
          <Box>
            <Button id="start_stop" onClick={() => start_pause()}>
              start/pause
            </Button>
            <Button id="reset" onClick={() => reset()}>
              reset
            </Button>
          </Box>
          <audio
            id="beep"
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
