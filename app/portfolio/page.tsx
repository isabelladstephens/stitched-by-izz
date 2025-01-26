'use client'

import Link from 'next/link'
import styles from './page.module.css'
import { portfolioImages } from '../data/portfolio_images'

export default function Portfolio() {
    return (
        <div className={styles.portfolio_container}>
            <main>
                <div className={styles.title_container}>
                    <h1 className={styles.portfolio_title}>My Portfolio</h1>
                </div>
                <div className={styles.grid_container}>
                    {portfolioImages.map((image, index) => (
                        <Link key={image.key} href={`/portfolio/${image.key}`} passHref>
                            <div key={index} className={styles.grid_item}>
                                <img src={image.path} alt="Image" className={styles.grid_image} />
                            </div>
                            <div>
                                <h2 className={styles.grid_title}>{image.title}</h2>
                                <p className={styles.grid_caption}>{image.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    )
}