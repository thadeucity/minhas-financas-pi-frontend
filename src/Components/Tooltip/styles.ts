import styled, { css } from 'styled-components';

type YPositions = 'top' | 'bottom';
type XPositions = 'left' | 'center' | 'right';

interface TooltipContainerProps {
  yPosition: 'top' | 'bottom';
  xPosition: 'left' | 'center' | 'right';
  css: CustomCss | null;
}

interface ContainerPositioningProps {
  y: YPositions;
  x: XPositions;
}

interface ArrowPositioningProps {
  y: YPositions;
  x: XPositions;
}

export const displayTooltipOnHover = (tooltipClass: string) => css`
  &:hover,
  &:focus-within,
  &:active {
    .${tooltipClass} {
      opacity: 1;
      pointer-events: inherit;
      --translateYVar: 0px;
    }
  }
`;

const getHorizontalPosition = (xPosition: XPositions) => {
  switch (xPosition) {
    case 'left':
      return 'right: -1em;';
    case 'center':
      return 'left: 50%;';
    case 'right':
      return 'left: -1em';
    default:
      return 'left: -1em';
  }
};

const containerPositioning = ({ x, y }: ContainerPositioningProps) => {
  const isAbove = y === 'top';
  const isCentered = x === 'center';

  return css`
    ${getHorizontalPosition(x)}

    --translateXVar: ${isCentered ? '-50%' : '0px'};
    --translateYVar: ${isAbove ? '-5px' : '5px'};

    transform: translateY(var(--translateYVar)) translateX(var(--translateXVar));

    padding: ${isAbove ? '2px 2px 1em 2px' : '1em 2px 2px 2px'};
    ${isAbove ? 'bottom' : 'top'}: 100%;
  `;
};

const arrowPositioning = ({ x, y }: ArrowPositioningProps) => {
  const isAbove = y === 'top';
  const isCentered = x === 'center';
  return css`
    ${isAbove ? 'bottom' : 'top'}: -0.45rem;
    ${getHorizontalPosition(x)}

    transform-origin: center;
    transform: translateX(${isCentered ? '-50%' : '0px'})
      rotate(${isAbove ? '225' : '45'}deg);
  `;
};

export const TooltipContainer = styled.div<TooltipContainerProps>`
  position: absolute;
  z-index: 2;
  opacity: 0;
  transition: all 300ms ease-in-out;
  pointer-events: none;

  ${props => containerPositioning({ x: props.xPosition, y: props.yPosition })}

  > div {
    position: relative;
    background: var(--clr-gray000);
    padding: 20px;
    border-radius: 10px;
    z-index: 3;

    &::before {
      content: '';
      position: absolute;
      background: var(--clr-gray000);
      border-radius: 0.25rem 0px 0.5rem 0px;
      width: 1rem;
      height: 1rem;
      z-index: 8;
      box-shadow: -2px -2px 4px -2px rgba(0, 0, 0, 0.12),
        0 -3px 3px -3px rgba(0, 0, 0, 0.08);

      ${props => arrowPositioning({ x: props.xPosition, y: props.yPosition })}
    }
  }

  ${props => props.css}
`;
