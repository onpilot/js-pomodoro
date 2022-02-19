import { Button } from './Button';
import { Display } from './Display';
import { Label } from './Label';
import { Box } from './Box';
import { Timerset } from './Timerset';
import { FunctionSet } from '../functions/FunctionSet';

export const ContainerTop = (props) => {
  const { breakLen, sessionLen, decrease, increase } = FunctionSet();

  return (
    <div className={props.className}>
      <Timerset className="timerset">
        <Label id="break-label" htmlFor="break-length">
          break length
        </Label>
        <Box className="box">
          <Button id="break-decrement" onClick={() => decrease('break')}>
            -
          </Button>
          <Display id="break-length">{breakLen}</Display>
          <Button id="break-increment" onClick={() => increase('break')}>
            +
          </Button>
        </Box>
      </Timerset>
      <Timerset className="timerset">
        <Label id="session-label" htmlFor="session-length">
          session length
        </Label>
        <Box className="box">
          <Button id="session-decrement" onClick={() => decrease()}>
            -
          </Button>
          <Display id="session-length">{sessionLen}</Display>
          <Button id="session-increment" onClick={() => increase()}>
            +
          </Button>
        </Box>
      </Timerset>
    </div>
  );
};
