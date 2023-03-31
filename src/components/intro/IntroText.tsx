import styles from "../../styles/intro/introText.module.scss";
import { inter } from "../../libs/fonts";

export default function IntroText() {
    return (<div className={styles.wrapper}>
        <header className={styles.header}>
            <h1 className={`${styles.text} ${inter.className}`}>
                Hello, I'm <span>Chen Zadik</span>,
            </h1>
            <h1 className={`${styles.text} ${inter.className}`}>
                a {`<Full Stack Developer>`}.
            </h1>
        </header>
        <p className={styles["sub-header"]}>
            I'm passionate about learning new technologies as well as writing testable, reusable and clean code.
        </p>
    </div>)
}