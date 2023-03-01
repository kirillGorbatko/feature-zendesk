import React, { ForwardRefRenderFunction } from 'react';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
  autoComplete?: string;
  ariaLabel?: string;
  value?: string;
  required?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ id, name, type, ...props }, ref) => {
  return <input ref={ref} id={id} name={name} type={type || 'text'} {...props} />;
});

export default Input;
