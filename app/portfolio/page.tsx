'use client'

import styles from "./page.module.css";
import EmbalaCarousel from "../components/embala-carousel";
import { portfolioImages } from '../data/portfolio_images'


export default function Portfolio() {

  return (
    <div className={styles.portfolio_container}>
      <main>
        <div className={styles.title_container}>
            <h1 className={styles.portfolio_title}>My work</h1>
        </div>
        <div className={styles.carousel_container}>
          <EmbalaCarousel slides={portfolioImages}/> 
        </div>
      </main>
    </div>
  );
}
