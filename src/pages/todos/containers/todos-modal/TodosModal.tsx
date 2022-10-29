import { Modal } from "components/modal";
import { Input } from "components/input";
import { todosModalAtom } from "pages/todos/recoil";
import { useRecoilState } from "recoil";
import { Textarea } from "components/textarea";
import { Button } from "components/button";
import { useCreate_TodoMutation } from "__generated__/resolvers-types";
import { Form, FormInput, FormTextarea } from "components/form";

const TodoCreate = () => {
  const [mutate] = useCreate_TodoMutation();
  return (
    <Form
      defaultValues={{ title: "", body: "" }}
      onSubmit={(state) => console.log(state)}
      className="px-4 pt-4 pb-10 flex flex-col space-y-10"
    >
      <span className="text-center">Add a new todo</span>
      <FormInput placeholder="Title" name="title" />
      <FormTextarea placeholder="Description" name="body" />
      <Button>Create</Button>
    </Form>
  );
};

export const TodosModal = () => {
  const [modal, setModal] = useRecoilState(todosModalAtom);
  const onClose = () => setModal(() => ({ isOpen: false, current: undefined }));

  if (modal.isOpen)
    return (
      <Modal onClose={onClose}>
        <TodoCreate />
      </Modal>
    );
  return null;
};
