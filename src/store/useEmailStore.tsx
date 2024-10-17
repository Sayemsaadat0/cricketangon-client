import { create } from 'zustand';

type Store = {
    email: string;
    setEmail: (email: string) => void;
};

const useEmailStore = create<Store>((set) => ({
    email: '',
    setEmail: (email) => set({ email }),
}));

export default useEmailStore;
