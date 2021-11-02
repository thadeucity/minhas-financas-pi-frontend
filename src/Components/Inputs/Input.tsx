import React, {
  forwardRef,
  InputHTMLAttributes,
  ForwardRefRenderFunction,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FieldError } from 'react-hook-form';

import { InputContainer, InputWrapper } from './styles';
import { Tooltip } from '../Tooltip';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: FieldError;
  icon?: React.ComponentType<IconBaseProps>;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, disabled = false, icon: Icon, ...rest },
  ref,
) => (
  <InputWrapper>
    {!!label && <label htmlFor={`input-${name}`}>{label}</label>}

    <InputContainer isDisabled={disabled} hasError={!!error}>
      {Icon && <Icon size={20} />}
      <input
        ref={ref}
        name={name}
        id={`input-${name}`}
        disabled={disabled}
        size={1}
        {...rest}
      />
      {error ? (
        <Tooltip className="input-tooltip" yPosition="top">
          {error.message}
        </Tooltip>
      ) : null}
    </InputContainer>
  </InputWrapper>
);

export const Input = forwardRef(InputBase);
