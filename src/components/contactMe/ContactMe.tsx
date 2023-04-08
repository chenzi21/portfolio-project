import { ContactMeIntialState, ContactMeInputs, useContactMeStore } from "@/libs/contactMeStore";
import styles from "../../styles/contactMe/contactMe.module.scss";
import Input from "./Input";

export default function ContactMe() {
    const onChange = useContactMeStore((store) => store.setInput);

    return (
        <form className={styles.form} id="contact">
            {Object.keys(ContactMeIntialState).map((input) => (<Input key={input} input={input as keyof ContactMeInputs} onChange={onChange} />))}
        </form>
    )
}
