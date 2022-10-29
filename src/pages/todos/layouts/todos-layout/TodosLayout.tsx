import { ReactNode } from "react";

export const TodosLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col space-y-2 md:max-w-md w-full mx-auto">
      {children}
    </div>
  );
};
