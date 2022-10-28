import { TTodo } from "pages/todos/components/todo/todo.types";
import { useComplete_TodoMutation } from "__generated__/resolvers-types";

export const TodoIsCompleted = ({ todo }: TTodo) => {
  const [mutate] = useComplete_TodoMutation();

  return (
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
  );
};
