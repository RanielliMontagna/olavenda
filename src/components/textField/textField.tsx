import { Controller, useFormContext } from 'react-hook-form';
import type { TextFieldProps } from './textField.types';

import { Grid, TextField as TextFieldMui } from '@mui/material';

import * as masks from './masks';

const TextField = ({ name, rules, defaultValue, shouldUnregister, mask, onInputChange, ...rest }: TextFieldProps) => {
  const useForm = useFormContext();
  if (!useForm) {
    throw new Error('Para usar o <TextField /> é necessário que ele esteja dentro de um <Form />');
  }

  const _handleFormat = (value: string) => {
    if (mask) {
      return masks[mask].format(value);
    } else {
      return value;
    }
  };

  const _handleParse = (value: string) => {
    if (mask) {
      return masks[mask].parse(value);
    } else {
      return value;
    }
  };

  return (
    <Controller
      control={useForm.control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      shouldUnregister={shouldUnregister}
      render={({ field: { value, onChange } }) => (
        <Grid display="flex" flexDirection="column">
          <TextFieldMui
            size="small"
            variant="outlined"
            autoComplete="off"
            defaultValue={defaultValue}
            value={_handleFormat(value || '')}
            onChange={(e) => {
              onInputChange?.(e.target.value);
              onChange(_handleParse(e.target.value));
            }}
            {...rest}
          />
        </Grid>
      )}
    />
  );
};

export { TextField };
