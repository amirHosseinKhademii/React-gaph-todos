import { TTodo } from "../todo/todo.types";

export const TodoBody = ({ todo }: TTodo) => {
  return (
    <div className="flex flex-col space-y-2">
      <span className="p-1 text-sm text-gray-600">{todo.body}</span>
    </div>
  );
};
