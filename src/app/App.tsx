import { ApolloProvider } from "@apollo/client";
import { client } from "apollo/client";
import { AppLayout } from "layouts";
import Todos from "pages/todos/Todos";

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppLayout>
        <Todos />
      </AppLayout>
    </ApolloProvider>
  );
};
