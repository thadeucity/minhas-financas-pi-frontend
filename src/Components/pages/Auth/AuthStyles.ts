import styled, { css } from 'styled-components';

export const authCardCss = css`
  width: 100%;
  max-width: var(--sz-mobile-width);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    margin: 2rem 0;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  > * + * {
    margin-top: 1.25rem;
  }

  button {
    width: 100%;
    font-weight: 700;
    font-size: 1.5rem;
    padding: 0.25em 0.6em;
    margin-top: 2.5rem;
  }

  a {
    font-weight: 500;
    margin-top: 1.75rem;
    font-size: 0.875rem;
    text-decoration: underline;
  }

  a:first-of-type {
    margin-top: 2rem;
  }
`;
