import { Controller, useFormContext } from 'react-hook-form';
import { Autocomplete as AutocompleteMui, TextField } from '@mui/material';
import type { IAutocomplete } from './autoComplete.types';

const Autocomplete = ({
  name,
  defaultValue,
  rules,
  shouldUnregister,
  options,
  autoCompleteProps,
  ...rest
}: IAutocomplete) => {
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
      render={({ field: { onChange, value } }) => (
        <AutocompleteMui
          size="small"
          value={value || null}
          onChange={(_, values) => onChange(values)}
          options={options}
          {...autoCompleteProps}
          renderInput={(params) => <TextField {...params} {...rest} />}
        />
      )}
    />
  );
};

export { Autocomplete };
