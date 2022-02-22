import styled from 'styled-components';

const StyledLabel = styled.label`
  color: var(--black);
  text-transform: capitalize;
`;

export const Label = (props) => {
  return (
    <StyledLabel id={props.id} htmlFor={props.htmlFor}>
      {props.children}
    </StyledLabel>
  );
};
