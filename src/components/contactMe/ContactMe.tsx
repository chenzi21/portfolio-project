import { ContactMeIntialState, ContactMeStore } from "@/libs/contactMeStore";
import styles from "../../styles/contactMe/contactMe.module.scss";
import Input from "./Input";

export default function ContactMe() {
    return (
        <form className={styles.form}>
            {Object.keys(ContactMeIntialState).map((input) => (<Input key={input} input={input as keyof ContactMeStore} />))}
        </form>
    )
}
