import { SelectProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

export type ISelect = Omit<UseControllerProps, 'control'> &
  SelectProps & {
    options: { label: string; value: string | number | readonly string[] | undefined }[];
  };
