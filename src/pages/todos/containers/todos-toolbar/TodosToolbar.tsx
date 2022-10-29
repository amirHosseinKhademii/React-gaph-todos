import { ICPlus } from "icons/ICPlus";
import { todosModalAtom, TTodosModalAtom } from "pages/todos/recoil";
import { useSetRecoilState } from "recoil";
export const TodosToolbar = () => {
  const setModal = useSetRecoilState<TTodosModalAtom>(todosModalAtom);
  const onOpen = () => setModal((prev) => ({ ...prev, isOpen: true }));

  return (
    <div>
      <ICPlus
        className="w-7 h-7 text-green-700 cursor-pointer self-end"
        onClick={onOpen}
      />
    </div>
  );
};
