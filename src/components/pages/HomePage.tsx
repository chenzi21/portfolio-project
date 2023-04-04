"use client"

import styles from "../../styles/pages/homePage.module.scss";
import Navbar from "../Navbar";
import Computer from "../computer/Computer";
import Intro from "../intro/Intro";

export default function HomePage() {
    return (<div className={styles["home-page-container"]}>
        <Navbar />
        <div className={styles.contents}>
            <Intro />
            <Computer />
        </div>
    </div>)
}