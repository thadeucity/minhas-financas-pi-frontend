import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TopBarContainer = styled(motion.div)`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--clr-gray000);
    background: var(--clr-gray750);

    width: 3.5rem;
    min-width: 3.5rem;
    max-width: 3.5rem;
    height: 3.5rem;
    font-size: 2rem;

    border-radius: 0.5rem;
  }

  h1 {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 0.75rem;
    border-radius: 0.5rem;

    font-size: 2rem;
    height: 3.5rem;
    font-weight: 500;
    color: var(--clr-gray000);
    background: var(--clr-primary);
  }
`;
