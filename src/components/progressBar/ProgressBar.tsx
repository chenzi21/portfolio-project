"use client"

import styles from "../../styles/progressBar/progressBar.module.scss";
import { navigations } from "../Navbar";
import { useSearchParams } from 'next/navigation';

export default function ProgressBar() {
    const query = useSearchParams();

    console.log(query.keys().next())

    return (
        <div className={styles["progress-bar-container"]}>
            {navigations.map(({ title, url }, i) =>
                <div className={styles["dot-container"]} key={title}>
                    <a key={title} href={url}>
                        <div className={styles.dot} />
                    </a>
                </div>
            )}
        </div>
    )
}
