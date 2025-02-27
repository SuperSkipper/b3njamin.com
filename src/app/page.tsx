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
          <h1>
            Hello, World! <br/>
            My name is <br/>
            Ben
          </h1>
        </div>

      </main>
    </div>
  );
}
