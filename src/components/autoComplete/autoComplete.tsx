import { Controller, useFormContext } from 'react-hook-form';
import { Autocomplete as AutocompleteMui, TextField } from '@mui/material';
import type { IAutocomplete } from './autoComplete.types';

const Autocomplete = ({ name, defaultValue, rules, shouldUnregister, options, ...rest }: IAutocomplete) => {
  const useForm = useFormContext();

  if (!useForm) {
    throw new Error('Para usar o <AutoComplete /> é necessário que ele esteja dentro de um <Form />');
  }

  return (
    <Controller
      name={name}
      control={useForm.control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { onChange } }) => (
        <AutocompleteMui
          size="small"
          onChange={(_, values) => onChange(values)}
          options={options}
          renderInput={(params) => <TextField {...params} {...rest} />}
        />
      )}
    />
  );
};

export { Autocomplete };
