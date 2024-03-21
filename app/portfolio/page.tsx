import Carousel from "../components/carousel";
import styles from "./page.module.css";
import { portfolioImages } from "../data/portfolio_images";

export default function Portfolio() {
  return (
    <div className={styles.portfolio_container}>
      <main>
        <div className={styles.title_container}>
            <h1 className={styles.portfolio_title}>My work</h1>
        </div>
        {/* <Carousel images={portfolioImages} /> */}
        <button className={styles.view_all}>
            view all
        </button>
      </main>
    </div>
  );
}
