import { Button } from './components/Button';
import { Display } from './components/Display';
import { Label } from './components/Label';
import { Timerset } from './components/Timerset';
import { Box } from './components/Box';
import { FunctionSet } from './functions/FunctionSet';
import { getMinutesSeconds } from './functions/getMinutesSeconds';
import { SocialLinks } from './components/social-links/SocialLinks';
import { Footer } from './components/social-links/Footer';
import './App.css';

function App() {
  const {
    breakLen,
    sessionLen,
    current,
    started,
    timeleft,
    decreaseLen,
    increaseLen,
    start_pause,
    reset,
  } = FunctionSet();
  console.log(started);
  return (
    <div className="center">
      <div className="app">
        <div className="app-name">
          <div className="app-name-title">Pomodoro</div>
          <div className="app-name-sub">aka 25+5 clock</div>
        </div>
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
            <Display big id="time-left">
              {getMinutesSeconds(timeleft)}
            </Display>
            <Box>
              <Button primary round id="start_stop" onClick={() => start_pause()}>
                {started}
              </Button>
              <Button round id="reset" onClick={() => reset()}>
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
      <div className="social">
        <SocialLinks></SocialLinks>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
