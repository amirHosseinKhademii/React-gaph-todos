import { ICTrash } from "icons/ICTrash";
import { TTodo } from "pages/todos/components/todo/todo.types";
import { joiner } from "utils";
import {
  TodosDocument,
  useDelete_TodoMutation,
} from "__generated__/resolvers-types";

export const TodoDelete = ({ todo }: TTodo) => {
  const [mutate, { loading }] = useDelete_TodoMutation({
    refetchQueries: [{ query: TodosDocument }],
  });
  return (
    <ICTrash
      className={joiner(
        "w-6 h-6 text-red-500 cursor-pointer",
        loading && "animate-pulse"
      )}
      onClick={() => mutate({ variables: { id: todo.id! } })}
    />
  );
};
