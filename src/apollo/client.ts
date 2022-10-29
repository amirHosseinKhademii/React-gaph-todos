import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

import { split, HttpLink } from "@apollo/client";

import { getMainDefinition } from "@apollo/client/utilities";

const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2MzUyZDE0YTM2N2EyY2ZmMDhmOWZmYmEiLCJ1bmlxdWVfbmFtZSI6Imhhc2giLCJuYmYiOjE2NjY3MTU2NzUsImV4cCI6MTY3OTY3NTY3NSwiaWF0IjoxNjY2NzE1Njc1fQ.uDwAdC1jHWNm5XnAzHdGACfl5wGKqwhTZoIrSDQc4nM",
};

const httpLink = new HttpLink({
  uri: "/graphql",
  headers,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:5109/subscriptions",
  })
);

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
