import React from 'react';

import { TooltipContainer } from './styles';

export interface TooltipProps {
  className: string;
  yPosition?: 'top' | 'bottom';
  xPosition?: 'left' | 'center' | 'right';
  css?: CustomCss;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  className,
  yPosition = 'bottom',
  xPosition = 'right',
  css = null,
}) => (
  <TooltipContainer
    className={className}
    yPosition={yPosition}
    xPosition={xPosition}
    css={css}
  >
    <div className="tooltip-box">{children}</div>
  </TooltipContainer>
);
