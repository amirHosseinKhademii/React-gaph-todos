import { RecoilRoot } from "recoil";
import { useTodosQuery } from "__generated__/resolvers-types";
import { Todo, TodoBody } from "./components";
import { TodosToolbar, TodosModal, TodoFooter, TodoHeader } from "./containers";
import { TodosLayout } from "./layouts";

const Todos = () => {
  const { data } = useTodosQuery();

  return (
    <RecoilRoot>
      <TodosLayout>
        <TodosToolbar />
        {data?.todos.map((todo) => (
          <Todo key={todo.id} {...{ todo }}>
            <TodoHeader {...{ todo }} />
            <TodoBody {...{ todo }} />
            <TodoFooter {...{ todo }} />
          </Todo>
        ))}
      </TodosLayout>
      <TodosModal />
    </RecoilRoot>
  );
};

export default Todos;
