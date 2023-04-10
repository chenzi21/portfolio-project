import { useContactMeStore } from "@/libs/contactMeStore";
import styles from "../../styles/contactMe/submit.module.scss";

export default function Submit() {
    const reset = useContactMeStore((store) => store.reset);
    return (
        <button className={styles.submit} onClick={reset} type="submit">Submit</ button>
    )
}