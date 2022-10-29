import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER'
}

export type Author = {
  __typename?: 'Author';
  name: Scalars['String'];
};

export type AuthorInput = {
  name: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Author>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type BookInput = {
  author?: InputMaybe<AuthorInput>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  completeTodo: Todo;
  createBook: Book;
  createTodo: Todo;
  createUser: User;
  deleteBook: Scalars['String'];
  removeTodo: Scalars['String'];
  signInUser: Scalars['String'];
  updateAuthor: Scalars['String'];
  updateBook: Book;
};


export type MutationCompleteTodoArgs = {
  id: Scalars['String'];
  isCompleted: Scalars['Boolean'];
};


export type MutationCreateBookArgs = {
  title: Scalars['String'];
};


export type MutationCreateTodoArgs = {
  body?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationDeleteBookArgs = {
  id: Scalars['String'];
};


export type MutationRemoveTodoArgs = {
  id: Scalars['String'];
};


export type MutationSignInUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateAuthorArgs = {
  author: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdateBookArgs = {
  book: BookInput;
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  books: Array<Book>;
  todos: Array<Todo>;
  user: User;
  users: Array<User>;
};


export type QueryBookArgs = {
  id: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  todoAdded: Todo;
};

export type Todo = {
  __typename?: 'Todo';
  body?: Maybe<Scalars['String']>;
  createdDate: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  isCompleted: Scalars['Boolean'];
  title: Scalars['String'];
  user: User;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  todos: Array<Todo>;
};

export type Delete_TodoMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type Delete_TodoMutation = { __typename?: 'Mutation', removeTodo: string };

export type Complete_TodoMutationVariables = Exact<{
  id: Scalars['String'];
  isCompleted: Scalars['Boolean'];
}>;


export type Complete_TodoMutation = { __typename?: 'Mutation', completeTodo: { __typename?: 'Todo', isCompleted: boolean, title: string, body?: string | null, id?: string | null } };

export type Create_TodoMutationVariables = Exact<{
  title: Scalars['String'];
  body?: InputMaybe<Scalars['String']>;
}>;


export type Create_TodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', title: string, body?: string | null } };

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id?: string | null, title: string, body?: string | null, isCompleted: boolean, createdDate: any }> };

export type Tdoo_AddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type Tdoo_AddedSubscription = { __typename?: 'Subscription', todoAdded: { __typename?: 'Todo', title: string, body?: string | null, id?: string | null, isCompleted: boolean, createdDate: any } };


export const Delete_TodoDocument = gql`
    mutation DELETE_TODO($id: String!) {
  removeTodo(id: $id)
}
    `;
export type Delete_TodoMutationFn = Apollo.MutationFunction<Delete_TodoMutation, Delete_TodoMutationVariables>;

/**
 * __useDelete_TodoMutation__
 *
 * To run a mutation, you first call `useDelete_TodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_TodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDelete_TodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDelete_TodoMutation(baseOptions?: Apollo.MutationHookOptions<Delete_TodoMutation, Delete_TodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Delete_TodoMutation, Delete_TodoMutationVariables>(Delete_TodoDocument, options);
      }
export type Delete_TodoMutationHookResult = ReturnType<typeof useDelete_TodoMutation>;
export type Delete_TodoMutationResult = Apollo.MutationResult<Delete_TodoMutation>;
export type Delete_TodoMutationOptions = Apollo.BaseMutationOptions<Delete_TodoMutation, Delete_TodoMutationVariables>;
export const Complete_TodoDocument = gql`
    mutation COMPLETE_TODO($id: String!, $isCompleted: Boolean!) {
  completeTodo(id: $id, isCompleted: $isCompleted) {
    isCompleted
    title
    body
    id
  }
}
    `;
export type Complete_TodoMutationFn = Apollo.MutationFunction<Complete_TodoMutation, Complete_TodoMutationVariables>;

/**
 * __useComplete_TodoMutation__
 *
 * To run a mutation, you first call `useComplete_TodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useComplete_TodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeTodoMutation, { data, loading, error }] = useComplete_TodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      isCompleted: // value for 'isCompleted'
 *   },
 * });
 */
export function useComplete_TodoMutation(baseOptions?: Apollo.MutationHookOptions<Complete_TodoMutation, Complete_TodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Complete_TodoMutation, Complete_TodoMutationVariables>(Complete_TodoDocument, options);
      }
export type Complete_TodoMutationHookResult = ReturnType<typeof useComplete_TodoMutation>;
export type Complete_TodoMutationResult = Apollo.MutationResult<Complete_TodoMutation>;
export type Complete_TodoMutationOptions = Apollo.BaseMutationOptions<Complete_TodoMutation, Complete_TodoMutationVariables>;
export const Create_TodoDocument = gql`
    mutation CREATE_TODO($title: String!, $body: String) {
  createTodo(title: $title, body: $body) {
    title
    body
  }
}
    `;
export type Create_TodoMutationFn = Apollo.MutationFunction<Create_TodoMutation, Create_TodoMutationVariables>;

/**
 * __useCreate_TodoMutation__
 *
 * To run a mutation, you first call `useCreate_TodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_TodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreate_TodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useCreate_TodoMutation(baseOptions?: Apollo.MutationHookOptions<Create_TodoMutation, Create_TodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_TodoMutation, Create_TodoMutationVariables>(Create_TodoDocument, options);
      }
export type Create_TodoMutationHookResult = ReturnType<typeof useCreate_TodoMutation>;
export type Create_TodoMutationResult = Apollo.MutationResult<Create_TodoMutation>;
export type Create_TodoMutationOptions = Apollo.BaseMutationOptions<Create_TodoMutation, Create_TodoMutationVariables>;
export const TodosDocument = gql`
    query TODOS {
  todos {
    id
    title
    body
    isCompleted
    createdDate
  }
}
    `;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(baseOptions?: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
      }
export function useTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = Apollo.QueryResult<TodosQuery, TodosQueryVariables>;
export const Tdoo_AddedDocument = gql`
    subscription TDOO_ADDED {
  todoAdded {
    title
    body
    id
    isCompleted
    createdDate
  }
}
    `;

/**
 * __useTdoo_AddedSubscription__
 *
 * To run a query within a React component, call `useTdoo_AddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTdoo_AddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTdoo_AddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useTdoo_AddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<Tdoo_AddedSubscription, Tdoo_AddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<Tdoo_AddedSubscription, Tdoo_AddedSubscriptionVariables>(Tdoo_AddedDocument, options);
      }
export type Tdoo_AddedSubscriptionHookResult = ReturnType<typeof useTdoo_AddedSubscription>;
export type Tdoo_AddedSubscriptionResult = Apollo.SubscriptionResult<Tdoo_AddedSubscription>;