/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextFieldProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

export type IAutocomplete<T = any> = Omit<UseControllerProps, 'control'> &
  TextFieldProps & {
    options: ReadonlyArray<T>;
  };
