import { TTodo } from "pages/todos/components/todo/todo.types";
import { useComplete_TodoMutation } from "__generated__/resolvers-types";

export const TodoIsCompleted = ({ todo }: TTodo) => {
  const [mutate] = useComplete_TodoMutation();

  return (
    <input
      type="checkbox"
      className="w-5 h-5 rounded appearance-none border border-green-600 checked:bg-green-500"
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
  );
};
