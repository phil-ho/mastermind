import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Game from '../components/Game';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mastermind by Phillip Ho</title>
        <meta name="description" content="Mastermind Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Game />
    </div>
  )
}
