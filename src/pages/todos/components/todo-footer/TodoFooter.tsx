import { TTodo } from "../todo/todo.types";

export const TodoFooter = ({ todo, children }: TTodo) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-right text-indigo-500">
        {todo.createdDate.slice(0, 10)}
      </span>
      {children}
    </div>
  );
};
