'use client'

import styles from './page.module.css'
import { portfolioImages } from '../data/portfolio_images'

export default function Portfolio() {
    return (
        <div className={`styles.portfolio_container`}>
            <main>
                <div className={styles.title_container}>
                    <h1 className={styles.portfolio_title}>My Portfolio</h1>
                </div>
                <div className={styles.grid_container}>
                    {portfolioImages.map((src, index) => (
                        <div key={index} className={styles.grid_item}>
                        <img src={src} alt="Image" className={styles.grid_image} />
                        <h2 className={styles.grid_title}>Title</h2>
                        <p className={styles.grid_caption}>Caption</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}