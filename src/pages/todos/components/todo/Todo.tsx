import { ReactNode } from "react";

export const Todo = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" w-full rounded bg-cyan-500 min-h-fit flex flex-col p-2 space-y-2">
      {children}
    </div>
  );
};
