export const Button = (props) => {
  return (
    <button id={props.id} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
