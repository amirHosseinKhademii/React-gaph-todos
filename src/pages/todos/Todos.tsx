import { useTodosQuery } from "__generated__/resolvers-types";
import { Todo, TodoBody, TodoFooter, TodoHeader } from "./components";
import { TodoIsCompleted, TodoDelete } from "./containers";

const Todos = () => {
  const { data } = useTodosQuery();

  return (
    <div className="flex flex-col space-y-2 md:max-w-md w-full">
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
    </div>
  );
};

export default Todos;
