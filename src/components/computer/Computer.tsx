import styles from "../../styles/computer/computer.module.scss";
import ComputerSVG from "../../files/icons/computer";

export default function Computer() {
    return (
        <div className={styles["computer-container"]}>
            <ComputerSVG className={styles.computer} />
            <div className={styles["text-container"]}>
                <p className={styles.text}>
                    console.<span className={styles.yellow}>log(</span><span className={styles.red}>"hello world"</span><span className={styles.yellow}>)</span>
                </p>
                <div className={styles.cursor} />
            </div>
        </div>
    )
}
