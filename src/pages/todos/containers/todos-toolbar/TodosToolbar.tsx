import { ICPlus } from "icons/ICPlus";
import { todosModalAtom, TTodosModalAtom } from "pages/todos/recoil";
import { useSetRecoilState } from "recoil";
export const TodosToolbar = () => {
  const setModal = useSetRecoilState<TTodosModalAtom>(todosModalAtom);
  const onOpen = () => setModal((prev) => ({ ...prev, isOpen: true }));

  return (
    <div className="flex items-center w-full justify-center mb-2">
      <ICPlus
        className="w-7 h-7 text-amber-400 cursor-pointer"
        onClick={onOpen}
      />
    </div>
  );
};
