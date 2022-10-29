import { TTodo } from "pages/todos/components/todo/todo.types";
import { useComplete_TodoMutation } from "__generated__/resolvers-types";

export const TodoHeader = ({ todo }: TTodo) => {
  const [mutate] = useComplete_TodoMutation();
  return (
    <div className="w-full flex items-center justify-between">
      <span className=" font-sans text-gray-600  text-lg">{todo.title}</span>
      <input
        type="checkbox"
        className="w-6 h-6 cursor-pointer"
        checked={todo.isCompleted}
        onChange={() =>
          mutate({
            variables: { isCompleted: !todo.isCompleted, id: todo.id! },
            optimisticResponse: {
              completeTodo: { ...todo, isCompleted: !todo.isCompleted },
            },
          })
        }
      />
    </div>
  );
};
