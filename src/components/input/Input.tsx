import { ComponentProps } from "react";

export type TInput = ComponentProps<"input">;

export const Input = ({ ...rest }: TInput) => {
  return (
    <input
      {...rest}
      className="w-full h-10 border border-gray-300 rounded px-3 bg-gray-100  text-gray-900 placeholder-gray-400 "
    />
  );
};
