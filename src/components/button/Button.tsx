import { ComponentProps } from "react";

type TButton = ComponentProps<"button">;

export const Button = ({ children, ...rest }: TButton) => {
  return (
    <button
      {...rest}
      className="w-full h-10 rounded bg-cyan-500 hover:opacity-70 text-white"
    >
      {children}
    </button>
  );
};
