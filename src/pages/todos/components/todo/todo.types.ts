import { ReactNode } from "react";
import { TodosQuery } from "__generated__/resolvers-types";

export type TTodo = { todo: TodosQuery["todos"][0]; children?: ReactNode };
