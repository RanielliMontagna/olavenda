import { Controller, useFormContext } from 'react-hook-form';
import { MenuItem, Select as SelectMui } from '@mui/material';

import type { ISelect } from './select.types';

const Select = ({ name, defaultValue, rules, shouldUnregister, options, ...rest }: ISelect) => {
  const useForm = useFormContext();

  if (!useForm) {
    throw new Error('Para usar o <Select /> é necessário que ele esteja dentro de um <Form />');
  }

  return (
    <Controller
      name={name}
      control={useForm.control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { value, onChange } }) => (
        <SelectMui size="small" value={value || ''} autoComplete="off" onChange={onChange} {...rest}>
          {options.map((option, key) => (
            <MenuItem key={key} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </SelectMui>
      )}
    />
  );
};

export { Select };
