export type TTodo = {
  __typename?: "Todo" | undefined;
  id?: string | null | undefined;
  title: string;
  body?: string | null | undefined;
  user: {
    __typename?: "User" | undefined;
    email: string;
    id?: string | null | undefined;
  };
};
