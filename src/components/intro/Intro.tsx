import styles from "../../styles/intro/intro.module.scss";
import IntroText from "./IntroText";

export default function Intro() {
    return (
        <div className={styles.intro}>
            <IntroText />
        </div>
    )
}
