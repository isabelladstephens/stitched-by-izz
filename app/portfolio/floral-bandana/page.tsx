import styles from './page.module.css'
import { portfolioImages } from '../../data/portfolio_images'


export default function FloralBandana() {
    return (
        <div className={styles.item_container}>
            <main className={styles.portfolio_main}>
                <div className={styles.content_container}>
                    <div className={styles.main_img_container}>
                        <img className={styles.main_img} src='../../images/portfolio_images/bandana1.jpg' alt="Floral Bandana" />
                    </div>
                    <div className={styles.description_container}>
                        <h1 className={styles.title}>Floral Bandana</h1>
                        <p className={styles.description_text}> 
                            One of my earliest projects, this bandana was made from a scrap of fabric from a skirt I made. I wanted
                            to recreate a bandana style without the hastle of tying it and having a chunky knot at the back of my head.
                            I found this scrunchie style bandana pattern from a quick google search and created this lovely piece.
                        </p>
                        <p className={styles.description_text}>
                            It was a fun and easy projec and I love the way it turned out. This will be a go-to pattern for when I need
                            to use up scraps of fabric.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}