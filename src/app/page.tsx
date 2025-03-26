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
            <div className={styles.story}>
              <span>Hello, World!</span> My name is Ben. I’m a professional full-stack
              software engineer currently based out of Houston, TX with degrees in computer
              science and business administration from the University of Georgia.
              <br/><br/>
              Much of my experience thus far has been working with clients in the energy,
              professional services, and fast food sectors. I also have experience in residential
              real estate and have a Georgia real estate license!
              <br/><br/>
              In my spare time, I really enjoy working on projects (like this website!),
              making music, visiting new restaurants, and training Brazilian Jiu Jitsu.
              I’m also tangentially interested in fashion and hospitality.
              <br/><br/>
              <button>Download My Resume</button>
            </div>
            <div className={styles.pics}>
              <Image
                  className={styles.comp}
                  src="/ben-pics/comp.jpg"
                  alt="Competition Ben"
                  width="250"
                  height="250"
              />
              <Image
                  className={styles.canes}
                  src="/ben-pics/canes.jpg"
                  alt="Canes Ben"
                  width="300"
                  height="300"
              />
              <Image
                  className={styles.stop}
                  src="/ben-pics/stop.jpg"
                  alt="Fashion Ben"
                  width="300"
                  height="300"
              />
            </div>
            <div className={styles.circle}>

            </div>
          </div>
        </div>

        <div className={styles.projects}>
          <h2>
            Projects
          </h2>
          <div className={styles.content}>
            <div className={styles.project}>
              <div className={styles.info}>
                <h3>b3njam1n.com</h3>
                A responsive personal portfolio website built on Next.js <br/>
                <Image
                  className={styles.icon}
                  src="/github-round.svg"
                  alt="Github Link"
                  width="35"
                  height="35"
                />
                <Image
                  className={styles.icon}
                  src="/globe.svg"
                  alt="Website Link"
                  width="35"
                  height="35"
                />
              </div>
              <Image
                className={styles.image}
                src="/project-pics/website.png"
                alt="Website Prototype"
                width="1000"
                height="1000"
              />
            </div>
            <div className={styles.project}>
              <div className={styles.info}>
                <h3>Soundcloud</h3>
                 <br/>
                <Image
                    className={styles.icon}
                    src="/globe.svg"
                    alt="Website Link"
                    width="35"
                    height="35"
                />
              </div>
              <Image
                  className={styles.image}
                  src="/project-pics/soundcloud.png"
                  alt="Website Prototype"
                  width="1000"
                  height="1000"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
