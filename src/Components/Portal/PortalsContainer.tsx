import React from 'react';
import styled from 'styled-components';

const PortalComponent = styled.div<{ zIndex?: number }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: ${props => props.zIndex || 999};

  pointer-events: none;

  > div {
    pointer-events: auto;
  }
`;

const PortalsContainer: React.FC = ({ children }) => (
  <>
    <PortalComponent id="__ROOT_PORTAL__" />
    <PortalComponent id="__TOASTS_PORTAL__" zIndex={999} />
    <PortalComponent id="__MODAL_PORTAL__" zIndex={998} />
    {children}
  </>
);

export default PortalsContainer;
