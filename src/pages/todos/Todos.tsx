import { useTodosQuery } from "__generated__/resolvers-types";

const Todos = () => {
  const { data } = useTodosQuery();

  return (
    <div>
      {data?.todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </div>
  );
};

export default Todos;
