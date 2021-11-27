import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ToastBlockProps {
  toastType: 'success' | 'error' | 'info' | 'warning';
}

export const ToastBlock = styled(motion.button)<ToastBlockProps>`
  width: 100%;
  max-width: 400px;
  min-height: 3.5rem;
  background: ${({ toastType }) => {
    if (toastType === 'success') return '#A3E015';
    if (toastType === 'error') return '#FE4A49';
    if (toastType === 'warning') return '#FF9000';
    return '#447C95';
  }};
  color: var(--clr-gray000);
  border-radius: 0.625rem;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  padding: 0.5rem 1rem;
  margin-bottom: 0.625rem;

  &:first-of-type {
    margin-top: 48px;
  }

  strong {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.15;
    text-align: center;
  }
`;
