import { Controller, useFormContext } from 'react-hook-form';
import { Autocomplete, TextField, Typography } from '@mui/material';

import type { CreatableProps } from './creatable.types';
import { SDivAutoComplete, SDivNoOptions } from './creatable.styles';
import { HiPlus } from 'react-icons/hi';

export const Creatable = ({
  name,
  rules,
  defaultValue,
  shouldUnregister,
  options,
  onCreateOption,
  textFieldProps,
  hideAddButton,
  ...rest
}: CreatableProps) => {
  const useForm = useFormContext();

  if (!useForm) {
    throw new Error('Para usar o <Creatable /> é necessário que ele esteja dentro de um <Form />');
  }

  const _handleCreateOption = (value: string) => {
    if (onCreateOption) {
      onCreateOption(value);
    } else {
      // eslint-disable-next-line no-console
      console.error('onCreateOption não foi definido');
    }
  };

  return (
    <Controller
      control={useForm.control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      shouldUnregister={shouldUnregister}
      render={({ field: { value, onChange } }) => {
        const txt = value?.label || value?.value || value;

        return (
          <SDivAutoComplete hideAddButton={hideAddButton}>
            <Autocomplete
              size="small"
              fullWidth
              value={rest?.value || undefined}
              onChange={(_, values) => onChange(values)}
              options={options}
              noOptionsText={
                <SDivNoOptions onClick={() => _handleCreateOption(value)}>
                  <Typography>Adicionar {txt && `"${txt}"`}</Typography>
                </SDivNoOptions>
              }
              {...rest}
              renderInput={(params) => {
                const endAdornment = !hideAddButton
                  ? {
                      ...params.InputProps,
                      endAdornment: (
                        <div className="endAdornments">
                          {params.InputProps.endAdornment}
                          <div className="creatable">
                            <div className="divider" />
                            <div className="button" onClick={() => _handleCreateOption(value)}>
                              <HiPlus />
                            </div>
                          </div>
                        </div>
                      ),
                    }
                  : params.InputProps;

                return <TextField {...params} onChange={onChange} InputProps={endAdornment} {...textFieldProps} />;
              }}
            />
          </SDivAutoComplete>
        );
      }}
    />
  );
};

export default Creatable;
