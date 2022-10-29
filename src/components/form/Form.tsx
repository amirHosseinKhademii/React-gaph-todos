import { ComponentProps } from "react";
import {
  DeepPartial,
  FormProvider as Provider,
  useForm,
} from "react-hook-form";

type TForm<T> = Omit<ComponentProps<"form">, "onSubmit"> & {
  defaultValues: DeepPartial<T>;
  onSubmit: (state: T) => void;
};

const FormProvider = Provider as any;

export const Form = <T extends {}>({
  onSubmit,
  children,
  defaultValues,
  ...rest
}: TForm<T>) => {
  const { control, handleSubmit } = useForm<T>({
    defaultValues,
  });
  return (
    <FormProvider {...{ control }}>
      <form {...rest} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
