import { PropsWithChildren, useEffect } from 'react';
import { FormProvider, useForm, UseFormProps } from 'react-hook-form';

interface IFormProps<T> extends PropsWithChildren, UseFormProps {
  onSubmit: (data: T) => void;
}

function Form({ children, onSubmit, ...rest }: IFormProps<any>) {
  const methods = useForm(rest);

  useEffect(() => {
    methods.reset(rest.defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rest.defaultValues, methods.reset]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export { Form };
