import { motion } from 'framer-motion';
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

export const newDreamContainerCss = css`
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
  }

  > * + * {
    margin: 0.5rem;
  }

  button {
    width: 100%;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--clr-gray000);
    text-transform: uppercase;
  }

  .red_button {
    background: var(--clr-red-highlight);
  }
`;

export const newDreamFormCardCss = css`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 0.4rem;

  h2 {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }

  .contribution {
    content: '';
    display: flex;
    position: absolute;

    width: 0.6rem;
    height: 100%;
    top: 0;
    left: 0;
  }

  .contribution_plus {
    background: var(--clr-primary);
  }

  .contribution_less {
    background: var(--clr-red-highlight);
  }

  .value_group {
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .dream_percentage {
    font-size: 0.85rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const contributionCardCss = css`
  padding: 0.5rem 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 2rem;
    margin-right: -1rem;

    font-size: 1.25rem;
    background: transparent;
    color: var(--clr-gray400);
    transition: color 200ms ease-in-out;

    &:hover {
      color: var(--clr-red-highlight);
    }
  }
`;

export const NewDreamForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  > * + * {
    margin-top: 1rem;
  }
`;

export const ContributionsBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  > * {
    margin: 0;
  }

  > * + * {
    margin-top: 0.75rem;
  }
`;
