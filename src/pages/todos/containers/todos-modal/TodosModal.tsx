import { Modal } from "components/modal";
import { todosModalAtom } from "pages/todos/recoil";
import { useRecoilState } from "recoil";
import { TodoCreate } from "./containers";
import { TodoEdit } from "./containers/todo-edit";

export const TodosModal = () => {
  const [{ isOpen, current }, setModal] = useRecoilState(todosModalAtom);
  const onClose = () => setModal(() => ({ isOpen: false, current: undefined }));

  if (isOpen && !current)
    return (
      <Modal onClose={onClose}>
        <TodoCreate />
      </Modal>
    );
  if (isOpen && current)
    return (
      <Modal onClose={onClose}>
        <TodoEdit />
      </Modal>
    );
  return null;
};
