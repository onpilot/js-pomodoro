export const getMinutesSeconds = (time) => {
  let minutes = parseInt(time / 60, 10);
  let seconds = parseInt(time % 60, 10);

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return minutes + ':' + seconds;
};
