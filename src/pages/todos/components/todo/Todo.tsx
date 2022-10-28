import { TTodo } from "./todo.types";

export const Todo = ({ todo }: { todo: TTodo }) => {
  return (
    <div className=" w-full rounded bg-cyan-500 min-h-fit flex flex-col p-2">
      <span className=" font-sans text-gray-300 text-center text-lg">
        {todo.title}
      </span>
      <span className="p-1 text-sm">{todo.body}</span>
    </div>
  );
};
