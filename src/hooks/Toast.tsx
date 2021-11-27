import React, { createContext, useCallback, useContext, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Portal } from '../Components/Portal/Portal';
import { ToastsWrapper } from '../Components/Toasts/ToastsWrapper';
import { Toast } from '../Components/Toasts/Toast';

interface IToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  text: string;
}

interface ToastContextData {
  addToast(message: Omit<IToastMessage, 'id'>): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<IToastMessage[]>([]);

  const addToast = useCallback(
    ({ type = 'error', text }: Omit<IToastMessage, 'id'>) => {
      const toast = {
        id: Math.random().toString(),
        type,
        text,
      };
      setToasts(prevToasts => [...prevToasts, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setToasts(oldToasts => oldToasts.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <Portal selector="__TOASTS_PORTAL__">
        <ToastsWrapper>
          <AnimatePresence>
            {toasts.map(toast => (
              <Toast
                key={toast.id}
                type={toast.type}
                onExpire={() => removeToast(toast.id)}
                text={toast.text}
              />
            ))}
          </AnimatePresence>
        </ToastsWrapper>
      </Portal>
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
