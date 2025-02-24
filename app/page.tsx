import Footer from "./Footer";
import About from "./about/page";
import Contact from "./contact/page";
import styles from "./page.module.css";
import Portfolio from "./portfolio/page";

export default function Home() {
  return (
    <div>
      <div className={styles.home_container}>
        <main className={styles.home_main}>
          <h1 className={styles.title}>stitched by izz</h1>
          <p className={styles.subtitle}>sewing + fashion design</p>
          <a href="#about">
            <button className={styles.check_it_out_button}>
              check it out
            </button>
          </a>
        </main>
      </div>
      <div id="about">
        <About/>
      </div>
      <Portfolio/>
      <Contact/>
      <img src="/images/quote_image.png" className={styles.quote}/>
      <Footer/>
    </div>
  );
}
