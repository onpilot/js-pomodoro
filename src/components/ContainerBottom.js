import { Button } from './Button';
import { Display } from './Display';
import { Label } from './Label';
import { Box } from './Box';
import { FunctionSet } from '../functions/FunctionSet';
import { getMinutesSeconds } from '../functions/getMinutesSeconds';

export const ContainerBottom = (props) => {
  const { current, timeLeft, start_pause, reset } = FunctionSet();

  return (
    <div className={props.className}>
      <Label htmlFor="time-left" id="timer-label">
        {current}
      </Label>
      <Display id="time-left">{getMinutesSeconds(timeLeft)}</Display>
      <Box>
        <Button id="start_stop" onClick={() => start_pause()}>
          start/pause
        </Button>
        <Button id="reset" onClick={() => reset()}>
          reset
        </Button>
      </Box>
    </div>
  );
};
