import styled, { keyframes } from 'styled-components';

import { displayTooltipOnHover } from '../Tooltip/styles';

interface InputContainerProps {
  isDisabled: boolean;
  hasError: boolean;
}

const showTooltip = keyframes`
  0% {
    opacity: 0;
    pointer-events: none;
  }

  10% {
    opacity: 1;
    pointer-events: inherit;
    --translateYVar: 0px;
  }

  90% {
    opacity: 1;
    pointer-events: inherit;
    --translateYVar: 0px;
  }

  100% {
    opacity: 0;
    pointer-events: none;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  label {
    color: var(--gray700);
    font-size: 0.9375rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  background: ${props =>
    props.isDisabled ? 'var(--gray150)' : 'var(--gray000)'};

  height: 2.5rem;
  width: 100%;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  border: 1px solid
    ${props => (props.hasError ? 'var(--clr-alert-red)' : 'var(--clr-gray200)')};
  padding: 0.5rem 1.25em;

  svg {
    margin-right: 0.625em;
    color: var(--clr-gray600);
  }

  input,
  textarea {
    height: 100%;
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    font-size: 0.875rem;
    color: var(--clr-gray600);

    &::placeholder {
      color: ${props =>
        props.isDisabled ? 'var(--clr-gray500)' : 'var(--clr-gray400)'};
    }
  }

  &:focus-within {
    border-color: var(--clr-primary);

    .input-tooltip {
      opacity: 1;
      pointer-events: inherit;
      --translateYVar: 0px;
    }
  }

  .input-tooltip {
    animation: ${showTooltip} 5s;

    .tooltip-box {
      padding: 0.5rem 1.25rem;
      color: var(--clr-gray000);
      background: var(--clr-alert-red);

      &:before {
        background: var(--clr-alert-red);
      }
    }
  }

  ${displayTooltipOnHover('input-tooltip')}
`;
