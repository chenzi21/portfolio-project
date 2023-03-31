import Navbar from '@/components/Navbar'
import styles from './page.module.scss'
import Intro from '@/components/intro/Intro'
import Skills from '@/components/skills/Skills'
import Computer from '@/components/computer/Computer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.contents}>
        <Intro />
        <Computer />
        <Skills />
      </div>
    </main>
  )
}
