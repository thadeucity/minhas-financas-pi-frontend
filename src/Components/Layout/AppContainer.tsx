import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
`;

export const AppContainer: React.FC = ({ children }) => (
  <Container>{children}</Container>
);
