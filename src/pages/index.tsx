import styles from '../styles/pages/index.module.scss'
import Skills from '@/components/skills/Skills'
import Navbar from '@/components/navbar/Navbar'
import Intro from '@/components/intro/Intro'
import Computer from '@/components/computer/Computer'

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar />
            <Intro />
            <Computer />
            <Skills />
        </main>
    )
}
