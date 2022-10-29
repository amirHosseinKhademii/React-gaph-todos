import { ICPen } from "icons/ICPen";
import { ICTrash } from "icons/ICTrash";
import { todosModalAtom } from "pages/todos/recoil";
import { useSetRecoilState } from "recoil";
import { joiner } from "utils";
import {
  TodosDocument,
  useDelete_TodoMutation,
} from "__generated__/resolvers-types";
import { TTodo } from "../../components/todo/todo.types";

export const TodoFooter = ({ todo }: TTodo) => {
  const [mutate, { loading }] = useDelete_TodoMutation({
    refetchQueries: [{ query: TodosDocument }],
  });

  const setModal = useSetRecoilState(todosModalAtom);

  const onEdit = () => setModal({ isOpen: true, current: todo });

  const onDelete = () => mutate({ variables: { id: todo.id! } });

  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-right text-indigo-500">
        {todo.createdDate.slice(0, 10)}
      </span>
      <ICPen
        className="w-6 h-6 text-green-400 cursor-pointer"
        onClick={onEdit}
      />
      <ICTrash
        className={joiner(
          "w-6 h-6 text-red-500 cursor-pointer",
          loading && "animate-pulse"
        )}
        onClick={onDelete}
      />
    </div>
  );
};
