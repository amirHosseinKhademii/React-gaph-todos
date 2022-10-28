import { ReactNode } from "react";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return <div className="m-4">{children}</div>;
};
