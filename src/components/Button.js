import styled from 'styled-components';

const shadow = {
  primary: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
  hoverPrimary:
    'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
  main: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
  hover: 'rgba(0, 0, 0, 0.20) 0px 1px 2px, rgba(0, 0, 0, 0.20) 0px 2px 4px',
  active: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
};

const StyledButton = styled.button`
  background: ${(props) => (props.primary ? 'var(--dark-red)' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'var(--black)')};
  font-size: 1em;
  text-transform: capitalize;
  height: 40px;
  width: ${(props) => (props.round ? '128px' : '40px')};
  margin: 0.5em;
  padding: ${(props) => (props.round ? '0.25em 1.5em' : '0.25em 1em')};
  border: none;
  border-radius: ${(props) => (props.round ? '999px' : '3px')};
  box-shadow: ${(props) => (props.primary ? shadow.primary : shadow.main)};

  &:hover {
    box-shadow: ${(props) => (props.primary ? shadow.hoverPrimary : shadow.hover)};
  }
  &:active {
    box-shadow: ${shadow.active};
  }
`;

export const Button = (props) => {
  if (props.id === 'start_stop') {
    let value;
    !props.children ? (value = start) : (value = pause);
    return (
      <StyledButton
        primary={props.primary}
        round={props.round}
        id={props.id}
        onClick={props.onClick}
      >
        {value}
      </StyledButton>
    );
  }
  return (
    <StyledButton primary={props.primary} round={props.round} id={props.id} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};

const start = (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <svg
      style={{ margin: '0 2px' }}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-play-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
    </svg>
    <span style={{ margin: '0 2px' }}>start</span>
  </div>
);

const pause = (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <svg
      style={{ margin: '0 2px' }}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-pause-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
    </svg>
    <span style={{ margin: '0 2px' }}>pause</span>
  </div>
);
