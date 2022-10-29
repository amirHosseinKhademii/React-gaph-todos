import { Modal } from "components/modal";
import { todosModalAtom } from "pages/todos/recoil";
import { useRecoilState } from "recoil";

export const TodosModal = () => {
  const [modal, setModal] = useRecoilState(todosModalAtom);
  const onClose = () => setModal(() => ({ isOpen: false, current: undefined }));

  if (modal.isOpen) return <Modal onClose={onClose}>test</Modal>;
  return null;
};
