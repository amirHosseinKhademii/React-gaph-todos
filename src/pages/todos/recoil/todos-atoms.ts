import { atom } from "recoil";

export type TTodosModalAtom = {
  isOpen: boolean;
  current: any;
};

export const todosModalAtom = atom<TTodosModalAtom>({
  default: {
    isOpen: false,
    current: undefined,
  },
  key: "TODOS_MODAL",
});
