import { RecoilRoot } from "recoil";
import { useTodosQuery } from "__generated__/resolvers-types";
import { Todo, TodoBody, TodoFooter, TodoHeader } from "./components";
import { TodoIsCompleted, TodoDelete, TodosToolbar } from "./containers";
import { TodosLayout } from "./layouts";

const Todos = () => {
  const { data } = useTodosQuery();

  return (
    <RecoilRoot>
      <TodosLayout>
        <TodosToolbar />
        {data?.todos.map((todo) => (
          <Todo key={todo.id} {...{ todo }}>
            <TodoHeader {...{ todo }}>
              <TodoIsCompleted {...{ todo }} />
            </TodoHeader>
            <TodoBody {...{ todo }} />
            <TodoFooter {...{ todo }}>
              <TodoDelete {...{ todo }} />
            </TodoFooter>
          </Todo>
        ))}
      </TodosLayout>
    </RecoilRoot>
  );
};

export default Todos;
