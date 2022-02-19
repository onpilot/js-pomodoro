export const Label = (props) => {
  return (
    <label id={props.id} htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
};
