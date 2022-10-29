import { joiner } from "utils";
import { TTodo } from "./todo.types";

export const Todo = ({ children, todo }: TTodo) => {
  return (
    <div
      className={joiner(
        " w-full rounded  min-h-fit flex flex-col p-2 space-y-3",
        todo.isCompleted ? "bg-cyan-500" : "bg-amber-400"
      )}
    >
      {children}
    </div>
  );
};
