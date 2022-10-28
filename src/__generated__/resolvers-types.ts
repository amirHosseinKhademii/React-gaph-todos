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

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id?: string | null, title: string, body?: string | null, isCompleted: boolean, createdDate: any }> };


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