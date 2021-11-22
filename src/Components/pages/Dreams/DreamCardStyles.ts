import styled from 'styled-components';

export const DreamCardContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  background-color: var(--clr-gray000);
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 0.75rem;

  .dream_card__top_bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0.25rem 0 1rem;
  }
`;

export const ProgressBar = styled.div<{ progress: number }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 0.3rem;
  overflow: hidden;

  height: 1rem;

  background-color: var(--clr-gray050);
  border: 1px solid var(--clr-gray200);

  &::after {
    content: '';
    background-color: var(--clr-primary);

    height: 100%;
    width: ${props => props.progress * 100}%;
    border-radius: 0.25rem;
  }
`;
