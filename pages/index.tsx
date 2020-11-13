import Link from 'next/link'

import classes from '*.module.css'
import Head from 'next/head'
import styles from './style.module.scss'
import { env } from 'process'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Visionneuse de cours</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <Link href="/courses/search">
          <a>Chercher un cours</a>
        </Link>
          <Link href="/courses/view">
          <a>Voir le cours</a>
          
        </Link>
    <div>Environnement: {process.env.APP_ENV}</div>
     <h1 className={styles.test}>Hello World toto</h1>
    </div>
  )
}
