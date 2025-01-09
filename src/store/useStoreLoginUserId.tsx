import { create } from "zustand";

type Store = {
  id: number | null;
  setId: (id: number) => void;
};

const useStoreLoginUserId = create<Store>((set) => ({
  id: null,
  setId: (id) => set({ id }),
}));

export default useStoreLoginUserId;
