import axios from "axios";
import { create } from "zustand";

export type ContactMeInputs = {
    name: string;
    email: string;
    message: string;
};

export type ContactMeActions = {
    setInput: (key: keyof ContactMeInputs, value: string) => void
    reset: () => void;
    submitForm: () => Promise<void>;
};

export const ContactMeIntialState: ContactMeInputs = {
    name: "",
    email: "",
    message: "",
};

export const useContactMeStore = create<ContactMeInputs & ContactMeActions>((set, get) => ({
    ...ContactMeIntialState,
    setInput: (key: keyof ContactMeInputs, value: string) => set({ [key]: value }),
    reset: () => set(ContactMeIntialState),
    submitForm: async () => {
        const { email, message, name } = get();
        axios
            .post("https://getform.io/f/{your-form-endpoint}", {
                email,
                message,
                name,
            })
            .then(() => get().reset())
            .catch(error => console.log(error))
    }
}));
