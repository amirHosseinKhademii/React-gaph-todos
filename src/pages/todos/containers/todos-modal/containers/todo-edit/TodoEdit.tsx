import { todosModalAtom } from "pages/todos/recoil";
import { useRecoilState } from "recoil";
import { Button } from "components/button";
import {
  TodosDocument,
  useUpdate_TodoMutation,
} from "__generated__/resolvers-types";
import { Form, FormInput, FormTextarea } from "components/form";
import { joiner } from "utils";

export const TodoEdit = () => {
  const [{ current }, setModal] = useRecoilState(todosModalAtom);
  const [mutate, { loading }] = useUpdate_TodoMutation({
    onCompleted: () => setModal({ isOpen: false, current: undefined }),
    refetchQueries: [{ query: TodosDocument }],
  });

  return (
    <Form
      defaultValues={{ title: current?.title!, body: current?.body! }}
      onSubmit={({ title, body }) =>
        mutate({ variables: { title, body, id: current?.id! } })
      }
      className="px-4 pt-4 pb-10 flex flex-col space-y-10"
    >
      <span className="text-center">Edit todo</span>
      <FormInput placeholder="Title" name="title" />
      <FormTextarea placeholder="Description" name="body" />
      <Button disabled={loading} className={joiner(loading && "animate-pulse")}>
        Save
      </Button>
    </Form>
  );
};
