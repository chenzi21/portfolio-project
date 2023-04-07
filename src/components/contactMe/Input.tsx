import { ContactMeStore, useContactMeStore } from "@/libs/contactMeStore";
import styles from "../../styles/contactMe/input.module.scss";

type Props = {
    input: keyof ContactMeStore;
}

export default function Input({ input }: Props) {
    const value = useContactMeStore((store) => store[input]);
    const onChange = useContactMeStore((store) => store.setInput);

    return (
        <input type="text" className={styles.input} value={value} onChange={(e) => {
            if (typeof e.target.value === "string") {
                onChange(input, e.target.value)
            }
        }
        } />
    )
}
