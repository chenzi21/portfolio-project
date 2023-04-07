import { create } from "zustand";

export type ContactMeStore = {
    name: string;
    email: string;
    message: string;
};

type ContactMeActions = {
    setInput: (key: keyof ContactMeStore, value: string) => void
};

export const ContactMeIntialState: ContactMeStore = {
    name: "",
    email: "",
    message: "",
};

export const useContactMeStore = create<ContactMeStore & ContactMeActions>((set) => ({
    ...ContactMeIntialState,
    setInput: (key: keyof ContactMeStore, value: string) => set({ [key]: value }),
}));
