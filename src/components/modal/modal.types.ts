import { ComponentProps, MouseEventHandler } from "react";

export type TModal = {
  size?: "sm" | "md" | "lg" | "xl";
  children?: any;
  onClose?: () => void | MouseEventHandler<HTMLButtonElement>;
  ref?: any;
} & ComponentProps<"dialog">;
