import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.about_container}>
      <main className={styles.about_main}>
        <div className={styles.about_box}>
            <h1 className={styles.about_title}>Get to know me</h1>
            <p className={styles.about_subtitle}>
                I&apos;m Isabella, a software developer, but also an aspiring fashion designer 
                and seamstress from Northern Utah. I love having a creative outlet where I 
                can wear the art I make. The interplay of textures, colors, and forms allows 
                me to craft not just garments, but story narratives of style and self-expression. 
            </p>
            <p className={styles.about_subtitle}>
                In the world of my fashion design is a 
                realm where flowy dresses, playful puffy sleeves, and enchanting details converge. 
                I love elevating my day-to-day moments with how I dress. With every stitch, I 
                weave designs that empower me to embrace my true self.
            </p>
        </div>
      </main>
    </div>
  );
}
