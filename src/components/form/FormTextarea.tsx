import { ComponentProps } from "react";
import { useController } from "react-hook-form";

type TFormTextarea = Omit<ComponentProps<"textarea">, "name"> & {
  name: string;
};

export const FormTextarea = ({ name, ...rest }: TFormTextarea) => {
  const { field } = useController({ name: name! });
  return (
    <textarea
      className="w-full h-10 border border-gray-300 rounded px-3 py-1.5 bg-gray-100  text-gray-900 placeholder-gray-400 "
      {...field}
      {...rest}
    />
  );
};
