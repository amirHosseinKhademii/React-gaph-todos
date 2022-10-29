import { joiner } from "utils";
import { TTodo } from "./todo.types";

export const Todo = ({ children, todo }: TTodo) => {
  return (
    <div
      className={joiner(
        " w-full rounded flex flex-col p-2 space-y-3 min-h-[200px] justify-between",
        todo.isCompleted ? "bg-cyan-500" : "bg-lime-400"
      )}
    >
      {children}
    </div>
  );
};
