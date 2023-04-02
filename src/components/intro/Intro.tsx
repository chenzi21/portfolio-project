import styles from "../../styles/intro/intro.module.scss";
import ProgressBar from "../progressBar/ProgressBar";
import IntroText from "./IntroText";

export default function Intro() {
    return (
        <div className={styles.intro} id="intro">
            <IntroText />
            <ProgressBar />
        </div>
    )
}
