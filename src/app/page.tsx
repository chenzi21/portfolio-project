import Navbar from '@/components/Navbar'
import styles from './page.module.scss'
import Intro from '@/components/intro/Intro'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.contents}>
        <Intro />
      </div>
    </main>
  )
}
