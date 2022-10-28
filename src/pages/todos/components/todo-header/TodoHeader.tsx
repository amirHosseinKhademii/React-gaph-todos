import { TTodo } from "../todo/todo.types";

export const TodoHeader = ({ todo, children }: TTodo) => {
  return (
    <div className="w-full flex items-center justify-between">
      <span className=" font-sans text-gray-600  text-lg">{todo.title}</span>
      {children}
    </div>
  );
};
