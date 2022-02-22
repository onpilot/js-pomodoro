import styled from 'styled-components';

const StyledDisplay = styled.div`
  color: var(--black);
  font-size: ${(props) => (props.big ? '3.125em' : '1.25em')};
  padding: ${(props) => (props.big ? 0 : '0.75em 0.5em')};
`;

export const Display = (props) => {
  return (
    <StyledDisplay big={props.big} id={props.id}>
      {props.children}
    </StyledDisplay>
  );
};
