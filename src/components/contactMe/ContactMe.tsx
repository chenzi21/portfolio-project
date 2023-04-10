import { ContactMeIntialState, ContactMeInputs, useContactMeStore } from "@/libs/contactMeStore";
import styles from "../../styles/contactMe/contactMe.module.scss";
import Input from "./Input";
import Submit from "./Submit";

export default function ContactMe() {
    const onChange = useContactMeStore((store) => store.setInput);

    return (
        <form className={styles.form} id="contact" action="https://getform.io/f/9a252428-f15c-43d6-8e61-549762d5dde0" method="POST">
            {Object.keys(ContactMeIntialState).map((input) => (<Input key={input} input={input as keyof ContactMeInputs} onChange={onChange} />))}
            <input type="hidden" name="_gotcha" style={{ display: "none !important" }}></input>
            <Submit />
        </form>
    )
}
