import type { AutocompleteProps, TextFieldProps } from '@mui/material';
import { ControllerProps } from 'react-hook-form';

type ControllerCreatable = Omit<ControllerProps, 'render' | 'control'>;

export type CreatableOption =
  | {
      label: string;
      value?: string | number | readonly string[] | undefined;
    }
  | string;

export type CreatableProps = Omit<AutocompleteProps<CreatableOption, true, true, true>, 'renderInput'> &
  ControllerCreatable & {
    options: CreatableOption[];
    textFieldProps?: TextFieldProps;
    onCreateOption?: (value: string) => void;
    hideAddButton?: boolean;
  };
