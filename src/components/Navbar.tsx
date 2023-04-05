import { useMemo, useState } from "react";
import styles from "../styles/navbar.module.scss";
import { inter } from "@/libs/fonts";

export const navigations: { title: string; url: string }[] = [
    {
        title: "Intro",
        url: "/#intro"
    },
    {
        title: "Skills",
        url: "/#skills"
    },
    {
        title: "Contact",
        url: "/#contact"
    }
]

export default function Navbar() {
    const [checked, setChecked] = useState<boolean>(false);

    const navigationsListItems = useMemo(() => navigations.map(({ title, url }) => (
        <li className={inter.className} key={title} onClick={() => setChecked(false)}>
            <a href={url} className={styles["nav-link"]}>
                {title}
            </a>
        </li>
    )), [])

    return (
        <nav className={styles.navbar}>
            <input
                className={styles.checkbox}
                id="menu-toggle"
                type="checkbox"
                hidden
                checked={checked}
                aria-checked={checked}
                aria-label="Navigation
                Bar Controller"/>
            <label className={styles["checkbox-label"]} htmlFor="menu-toggle" onClick={() => setChecked((prev) => !prev)}>
                <div className={styles["hamburger"]}></div>
            </label>
            <ul className={styles["nav-list"]} aria-expanded={checked} >
                {navigationsListItems}
            </ul>
        </nav>
    )
}