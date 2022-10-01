import { TextFieldProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

export type ITextField = Omit<UseControllerProps, 'control'> &
  Pick<
    TextFieldProps,
    | 'label'
    | 'error'
    | 'helperText'
    | 'size'
    | 'fullWidth'
    | 'variant'
    | 'autoFocus'
    | 'placeholder'
    | 'autoComplete'
    | 'InputProps'
    | 'disabled'
  >;
