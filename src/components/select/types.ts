import { SelectHTMLAttributes } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  options: {
    value: string;
    label: string;
  }[];
}
