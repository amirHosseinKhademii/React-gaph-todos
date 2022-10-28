import { TTodo } from "./todo.types";

export const Todo = ({ todo }: { todo: TTodo }) => {
  return (
    <div className=" w-full rounded bg-cyan-500 min-h-fit flex flex-col p-2 space-y-2">
      <div className="w-full flex items-center justify-between">
        <span className=" font-sans text-gray-600  text-lg">{todo.title}</span>
        <input
          type="checkbox"
          className="w-5 h-5 rounded appearance-none border border-green-600 checked:bg-green-500"
          checked={todo.isCompleted}
          onChange={() => {}}
        />
      </div>

      <span className="p-1 text-sm text-gray-200">{todo.body}</span>
      <span className="text-xs text-right text-indigo-500">
        {todo.createdDate.slice(0, 10)}
      </span>
    </div>
  );
};
