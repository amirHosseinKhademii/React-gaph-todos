import { useTodosQuery } from "__generated__/resolvers-types";

const Todos = () => {
  const { data } = useTodosQuery();
  console.log(data);

  return <div>Todos</div>;
};

export default Todos;
