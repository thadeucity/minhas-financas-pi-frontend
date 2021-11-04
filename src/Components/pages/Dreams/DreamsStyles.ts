import styled, { css } from 'styled-components';

export const dreamsContainerCss = css`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: var(--sz-mobile-width);

  height: 100%;

  a + a {
    margin-top: 1rem;
  }

  .button {
    width: 100%;
    margin-top: 2rem;
  }

  button {
    width: 100%;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--clr-gray000);
    text-transform: uppercase;
  }
`;

export const newDreamFormCardCss = css`
  width: 100%;
`;

export const NewDreamForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  > * + * {
    margin-top: 1rem;
  }
`;
