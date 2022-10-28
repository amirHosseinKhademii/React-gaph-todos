import { ApolloClient, InMemoryCache } from "@apollo/client";

const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2MzUyZDE0YTM2N2EyY2ZmMDhmOWZmYmEiLCJ1bmlxdWVfbmFtZSI6Imhhc2giLCJuYmYiOjE2NjY3MTU2NzUsImV4cCI6MTY3OTY3NTY3NSwiaWF0IjoxNjY2NzE1Njc1fQ.uDwAdC1jHWNm5XnAzHdGACfl5wGKqwhTZoIrSDQc4nM",
};

export const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
  headers,
});
