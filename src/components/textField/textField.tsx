import { TextField as TextFieldMui } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { ITextField } from './textField.types';

export const TextField = ({ rules, name, defaultValue, shouldUnregister, ...rest }: ITextField) => {
  const useForm = useFormContext();

  if (!useForm) {
    throw new Error('Para usar o <TextField /> é necessário que ele esteja dentro de um <Form />');
  }

  return (
    <Controller
      control={useForm.control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      shouldUnregister={shouldUnregister}
      render={({ field: { value, onChange } }) => (
        <TextFieldMui
          size="small"
          variant="outlined"
          autoComplete="off"
          value={value ?? ''}
          defaultValue={value}
          onChange={(v) => onChange(v)}
          {...rest}
        />
      )}
    />
  );
};
