import { ContactMeActions, ContactMeInputs, useContactMeStore } from "@/libs/contactMeStore";
import styles from "../../styles/contactMe/input.module.scss";
import { useCallback, useMemo } from "react";

type Props = {
    input: keyof ContactMeInputs;
    onChange: ContactMeActions["setInput"];
}

export default function Input({ input, onChange }: Props) {
    const value = useContactMeStore((store) => store[input]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (typeof e.target.value === "string") {
            onChange(input, e.target.value)
        }
    }, []);

    const InputElement = useMemo(() => {
        if (input === "message") {
            return <textarea className={styles.textarea} value={value} onChange={handleChange} />
        }
        return <input type={input === "email" ? "email" : "text"} className={styles.input} value={value} onChange={handleChange} />
    }, [value])

    return (
        <div className={styles.container}>
            <text className={styles.title}>{input}</text>
            {InputElement}
        </div>
    );
}
