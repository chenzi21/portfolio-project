"use client"

import styles from "../../styles/progressBar/progressBar.module.scss";
import useProgressBarStore from "@/libs/progressBarStore";
import { navigations } from "../Navbar";

export default function ProgressBar() {
    const { progress, setProgress } = useProgressBarStore((store) => store);

    return (
        <div className={styles["progress-bar-container"]}>
            {navigations.map(({ title, url }, i) =>
                <div className={styles["dot-container"]} key={title} onClick={() => setProgress(i)}>
                    <a key={title} href={url}>
                        <div className={styles.dot} data-active={i == progress} />
                    </a>
                </div>
            )}
        </div>
    )
}
