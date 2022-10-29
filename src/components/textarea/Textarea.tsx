import { ComponentProps } from "react";

export type TTextarea = ComponentProps<"textarea">;

export const Textarea = ({ ...rest }: TTextarea) => {
  return (
    <textarea
      {...rest}
      className="w-full h-10 border border-gray-300 rounded px-3 py-1.5 bg-gray-100  text-gray-900 placeholder-gray-400 "
    />
  );
};
