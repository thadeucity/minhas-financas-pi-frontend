import styled, { keyframes } from 'styled-components';

interface ButtonProps {
  isLoading: boolean;
  isConfirmed: boolean;
  isFailed: boolean;
}

const pulse = keyframes`
  100% {
    opacity: 0.5;
  }
`;

const getButtonColor = (props: ButtonProps) => {
  if (props.isConfirmed) {
    return '--button-confirmed-clr';
  }

  if (props.isFailed) {
    return '--button-failed-clr';
  }

  return '--button-base-clr';
};

export const ButtonDefault = styled.button<ButtonProps>`
  --button-hover-brightness: 0.9;

  position: relative;
  padding: 0.75em 1.25em;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: var(${props => getButtonColor(props)}, var(--clr-primary));
  color: var(--clr-gray800);
  outline: none;

  transition: all 250ms;

  .button__text_wrapper {
    animation: ${({ isLoading }) => (isLoading ? pulse : 'none')} 0.75s infinite
      alternate;
  }

  span svg {
    width: 2em;
    height: 2em;
  }

  &:hover {
    filter: brightness(var(--button-hover-brightness));
  }

  &:disabled {
    cursor: default;
    --button-hover-brightness: 1;
  }

  .button__spinner_wrapper {
    margin: -0.5em 0;
    display: ${({ isLoading }) => (isLoading ? 'block' : 'none')};
  }
`;
