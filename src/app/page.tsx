import Image from "next/image";
import styles from "./page.module.scss";
import { Anonymous_Pro, Montserrat } from 'next/font/google';

const anonymous_pro = Anonymous_Pro({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-anonymous-pro',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={ `
        ${ styles.main } 
        ${anonymous_pro.variable}
        ${montserrat.variable}
      ` }>

        <div className={styles.home}>
          <div className={styles.mainContent}>
            <h1>
              Hello, World! <br/>
              My name is <br/>
              <span>Ben</span>
            </h1>
            <hr/>
            <ul className={styles.navigation}>
              <li>About</li>
              <li>Projects</li>
              <li>Ramblings</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={styles.socials}>
            <Image
                src="/linkedin.svg"
                alt="Linkedin logo"
                width="50"
                height="50"
                priority
            />
            <Image
                src="/github.svg"
                alt="Github logo"
                width="50"
                height="50"
                priority
            />
            <Image
                src="/instagram.svg"
                alt="Instagram logo"
                width="50"
                height="50"
                priority
            />
          </div>
        </div>

        <ul id={styles.navbar}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Ramblings</li>
          <li>Contact</li>
        </ul>

        <div className={styles.about}>
          <h2>
            About
          </h2>
          <div className={styles.content}>
            <div>
              Hello, World!,
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
