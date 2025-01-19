'use client'

import styles from "./css/my-work.module.css";
import EmbalaCarousel from "./embala-carousel";
import { portfolioImages } from '../data/portfolio_images'


export default function MyWork() {

  return (
    <div className={styles.my_work_container}>
      <main>
        <div className={styles.title_container}>
            <h1 className={styles.my_work_title}>My work</h1>
        </div>
        <div className={styles.carousel_container}>
          <EmbalaCarousel slides={portfolioImages}/> 
        </div>
      </main>
    </div>
  );
}
