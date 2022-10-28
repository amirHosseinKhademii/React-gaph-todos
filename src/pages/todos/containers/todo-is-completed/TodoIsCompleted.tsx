import { TTodo } from "pages/todos/components/todo/todo.types";

export const TodoIsCompleted = ({ todo }: TTodo) => {
  return (
    <input
      type="checkbox"
      className="w-5 h-5 rounded appearance-none border border-green-600 checked:bg-green-500"
      checked={todo.isCompleted}
      onChange={() => {}}
    />
  );
};
