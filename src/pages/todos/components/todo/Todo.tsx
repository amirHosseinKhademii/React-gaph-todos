import { TTodo } from "./todo.types";

export const Todo = ({ todo }: { todo: TTodo }) => {
  return (
    <div className=" w-full rounded bg-cyan-500 min-h-fit flex flex-col p-2 space-y-2">
      <span className=" font-sans text-gray-600 text-center text-lg">
        {todo.title}
      </span>
      <span className="p-1 text-sm text-gray-200">{todo.body}</span>
      <span className="text-xs text-right text-indigo-500">
        {todo.createdDate.slice(0, 10)}
      </span>
    </div>
  );
};
