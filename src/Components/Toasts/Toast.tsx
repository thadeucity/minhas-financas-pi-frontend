import React, { useEffect } from 'react';

import { ToastBlock } from './ToastStyles';

interface IToastProps {
  type?: 'success' | 'error' | 'info' | 'warning';
  text: string;
  onExpire(): void;
}

const EXPIRES_IN = 2500;

export const Toast: React.FC<IToastProps> = ({
  type = 'error',
  text,
  onExpire,
}) => {
  useEffect(() => {
    const timer = setTimeout(onExpire, EXPIRES_IN);

    return () => {
      clearTimeout(timer);
    };
  }, [onExpire]);

  return (
    <ToastBlock
      type="button"
      toastType={type}
      onClick={onExpire}
      layout
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ type: 'spring', mass: 0.55 }}
    >
      <strong>{text}</strong>
    </ToastBlock>
  );
};
