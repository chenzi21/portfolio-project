import styles from "../../styles/intro/introText.module.scss";
import { inter } from "../../libs/fonts";

export default function IntroText() {
    return (
        <header className={styles.header}>
            <h1 className={inter.className}>
                Hello, I'm <span>Chen Zadik</span>, a {`<Full Stack Developer />`}.
            </h1>
            <p className={styles["sub-header"]}>
                I'm passionate about learning new technologies as well as writing testable, reusable and clean code.
            </p>
        </header>
    )
}