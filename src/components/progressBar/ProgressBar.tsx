"use client"

import styles from "../../styles/progressBar/progressBar.module.scss";
import useProgressBarStore from "@/libs/progressBarStore";
import { useEffect } from "react";
import { navigations } from "../Navbar";

export default function ProgressBar() {
    const { progress, setProgress } = useProgressBarStore((store) => store);

    useEffect(() => {
        console.log(progress);
    }, [progress])

    return (
        <div className={styles["progress-bar-container"]}>
            {navigations.map(({ title }, i) =>
                <div className={styles["dot-container"]} key={title} onClick={() => setProgress(i)}>
                    <div className={styles.dot} data-active={i == progress} />
                </div>
            )}
        </div>
    )
}
