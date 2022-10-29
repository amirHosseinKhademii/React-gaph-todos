import { atom } from "recoil";
import { TodosQuery } from "__generated__/resolvers-types";

export type TTodosModalAtom = {
  isOpen: boolean;
  current?: TodosQuery["todos"][0];
};

export const todosModalAtom = atom<TTodosModalAtom>({
  default: {
    isOpen: false,
    current: undefined,
  },
  key: "TODOS_MODAL",
});
