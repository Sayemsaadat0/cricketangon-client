import { create } from "zustand";

type User = {
  name: string;
  email: string;
  image: string;
  role: string;
};

type StoreState = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useStoreUser = create<StoreState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
