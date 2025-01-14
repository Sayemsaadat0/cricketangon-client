import { create } from "zustand";

type Store = {
    token: string;
    setToken: (token: string) => void;
};

const useStoreToken = create<Store>((set) => ({
    token: '',
    setToken: (token) => set({ token }),
}));

export default useStoreToken;
