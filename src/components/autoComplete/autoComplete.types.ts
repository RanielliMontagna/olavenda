/* eslint-disable @typescript-eslint/no-explicit-any */
import { AutocompleteProps, TextFieldProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

export type IAutocomplete<T = any> = Omit<UseControllerProps, 'control'> &
  TextFieldProps & {
    options: ReadonlyArray<T>;
    autoCompleteProps?: Partial<AutocompleteProps<any, any, any, any>>;
  };
