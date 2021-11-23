import { css } from 'styled-components';

export const homeContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: var(--sz-mobile-width);

  a {
    width: 100%;
  }

  a + a {
    margin-top: 2rem;
  }

  .home__card {
    width: 100%;
    min-height: 8rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    color: var(--clr-gray000);
    margin: 0;
  }

  .card__dreams {
    background: var(--clr-primary);
  }

  .card__expenses {
    background: var(--clr-red-highlight);
  }

  .card__tips {
    background: var(--clr-blue-highlight);
  }
`;
