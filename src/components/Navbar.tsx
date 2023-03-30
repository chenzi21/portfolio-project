import Link from "next/link";
import { useMemo } from "react";
import styles from "../styles/navbar.module.scss";
import { inter } from "@/libs/fonts";

const navigations: { title: string; url: string }[] = [
    {
        title: "Intro",
        url: "/#intro"
    },
    {
        title: "Skills",
        url: "/#skills"
    },
    {
        title: "Contact Me",
        url: "/#contactme"
    }
]

export default function Navbar() {
    const navigationsListItems = useMemo(() => navigations.map(({ title, url }) => (
        <Link passHref href={url} key={title} className={styles["nav-link"]}>
            <li className={inter.className}>
                {title}
            </li>
        </Link>
    )), [])

    return (
        <nav className={styles.navbar}>
            <ul className={styles["nav-list"]}>
                {navigationsListItems}
            </ul>
        </nav>)
}