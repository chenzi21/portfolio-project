import { useMemo } from "react";
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
    const navigationsListItems = useMemo(() => navigations.map(({ title, url }) => (
        <li className={inter.className} key={title}>
            <a href={url} className={styles["nav-link"]}>
                {title}
            </a>
        </li>
    )), [])

    return (
        <nav className={styles.navbar}>
            <ul className={styles["nav-list"]}>
                {navigationsListItems}
            </ul>
        </nav>)
}