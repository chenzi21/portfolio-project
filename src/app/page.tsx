import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useMemo } from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], preload: true })

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

export default function Home() {
  const navigationsListItems = useMemo(() => navigations.map(({ title, url }) => (
    <Link passHref href={url} key={title}>
      <li className={`${styles["nav-link"]} ${inter.className}`}>
        {title}
      </li>
    </Link>
  )), [])

  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
        <ul className={styles["nav-list"]}>
          {navigationsListItems}
        </ul>
      </nav>
    </main>
  )
}
