import { create } from "zustand";

export type ContactMeInputs = {
    name: string;
    email: string;
    message: string;
};

export type ContactMeActions = {
    setInput: (key: keyof ContactMeInputs, value: string) => void
    reset: () => void;
};

export const ContactMeIntialState: ContactMeInputs = {
    name: "",
    email: "",
    message: "",
};

export const useContactMeStore = create<ContactMeInputs & ContactMeActions>((set) => ({
    ...ContactMeIntialState,
    setInput: (key: keyof ContactMeInputs, value: string) => set({ [key]: value }),
    reset: () => set({ message: "" })
}));
