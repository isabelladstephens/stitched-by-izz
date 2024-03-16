import Footer from "./Footer";
import About from "./about/page";
import Contact from "./contact/page";
import styles from "./page.module.css";
import Portfolio from "./portfolio/page";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <main className={styles.home_main}>
        <h1 className={styles.title}>stitched by izz</h1>
        <p className={styles.subtitle}>sewing + fashion design</p>
        <button className={styles.check_it_out}>
          <a href="#about">
            check it out
          </a>
        </button>
      </main>
      <div id="about">
        <About/>
        <Portfolio/>
        <Contact/>
        <img src="/images/quote_image.png" className={styles.quote}/>
        <Footer/>
      </div>
    </div>
  );
}
