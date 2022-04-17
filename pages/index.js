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
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet" />
      </Head>

      <Game />
    </div>
  )
}
