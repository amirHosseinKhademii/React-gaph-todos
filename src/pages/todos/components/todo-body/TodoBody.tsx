import { TTodo } from "../todo/todo.types";

export const TodoBody = ({ todo }: TTodo) => {
  return (
    <div className="flex flex-col space-y-2">
      <span className="p-1 text-sm text-gray-200">{todo.body}</span>
      <span className="text-xs text-right text-indigo-500">
        {todo.createdDate.slice(0, 10)}
      </span>
    </div>
  );
};
