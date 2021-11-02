import React, { ButtonHTMLAttributes, useMemo } from 'react';
import { ButtonDefault } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  isConfirmed?: boolean;
  isFailed?: boolean;

  loadingText?: string;
  confirmedText?: string;
  failedText?: string;
};

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  isLoading = false,
  isConfirmed = false,
  isFailed = false,
  confirmedText = '',
  loadingText = '',
  failedText = '',
  children,
  ...rest
}) => {
  const buttonContent = useMemo(() => {
    if (isLoading) {
      return loadingText;
    }

    if (isConfirmed) {
      return confirmedText;
    }

    if (isFailed) {
      return failedText;
    }

    return children;
  }, [
    children,
    confirmedText,
    failedText,
    isConfirmed,
    isFailed,
    isLoading,
    loadingText,
  ]);

  return (
    <ButtonDefault
      disabled={disabled || isLoading || isConfirmed || isFailed}
      isLoading={isLoading}
      isConfirmed={isConfirmed}
      isFailed={isFailed}
      type="button"
      {...rest}
    >
      <span className="button__text">{buttonContent}</span>
    </ButtonDefault>
  );
};

export default Button;
