import styles from '../styles/pages/index.module.scss'
import Skills from '@/components/skills/Skills'
import HomePage from '@/components/pages/HomePage'

export default function Home() {
    return (
        <main className={styles.main}>
            <HomePage />
            <Skills />
        </main>
    )
}