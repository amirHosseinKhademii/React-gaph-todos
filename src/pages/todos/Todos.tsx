import { useTodosQuery } from "__generated__/resolvers-types";
import { Todo } from "./components";

const Todos = () => {
  const { data } = useTodosQuery();

  return (
    <div className="flex flex-col space-y-2 md:max-w-md w-full">
      {data?.todos.map((todo) => (
        <Todo key={todo.id} {...{ todo }} />
      ))}
    </div>
  );
};

export default Todos;
