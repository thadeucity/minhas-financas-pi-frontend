import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div<{ css: CustomCss }>`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1.25rem;
  margin: 1.25rem;

  ${({ css }) => css}
`;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  css?: CustomCss;
}

export const Card: React.FC<CardProps> = ({
  children,
  css = null,
  ...props
}) => (
  <CardContainer css={css} {...props}>
    {children}
  </CardContainer>
);
