import { ApolloProvider } from "@apollo/client";
import { client } from "apollo/client";
import Todos from "pages/todos/Todos";

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Todos />
    </ApolloProvider>
  );
};
