import React from 'react';
import styled from 'styled-components';

const AppBlockContainer = styled.div<{ css: CustomCss }>`
  padding: 1.25rem;
  margin: 1.25rem;

  ${({ css }) => css}
`;

interface AppBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  css?: CustomCss;
}

export const AppBlock: React.FC<AppBlockProps> = ({
  children,
  css = null,
  ...props
}) => (
  <AppBlockContainer css={css} {...props}>
    {children}
  </AppBlockContainer>
);
