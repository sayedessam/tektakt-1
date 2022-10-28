import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TekTakt</title>
        <meta name="description" content="Outsource your Business Activities Using ODOO 16" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to TekTakt
        </h1>

        <p className={styles.description}>
          Get one free App from ODOO 16 - The Business App game changer
          <a href="https://www.odoo.com/" />
        </p>

        <div className={styles.grid}>
          <a href="https://www.odoo.com/" className={styles.card}>
            <h2>odoo 16 &rarr;</h2>
            <p>Get free Business App for unlimited uumber of users</p>
          </a>

          <a href="https://www.odoo.com/blog/odoo-news-5/meet-odoo-16-968#blog_content" className={styles.card}>
            <h2>Learn more &rarr;</h2>
            <p>odoo 16 - the best online Business Application at low peice!</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>TekTakt helps&rarr;</h2>
            <p>Map your business processes on odoo 16 in 14 days</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>We offer free business map on odoo 16 &rarr;</h2>
            <p>
              Send you business case to: essam.sayed@tektakt.com
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
