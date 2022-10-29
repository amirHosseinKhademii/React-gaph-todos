import { ComponentProps } from "react";
import { useController } from "react-hook-form";

type TFormInput = Omit<ComponentProps<"input">, "name"> & { name: string };

export const FormInput = ({ name, ...rest }: TFormInput) => {
  const { field } = useController({ name: name });
  return (
    <input
      className="w-full h-10 border border-gray-300 rounded px-3 bg-gray-100  text-gray-900 placeholder-gray-400 "
      {...field}
      {...rest}
    />
  );
};
