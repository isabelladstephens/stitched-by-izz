import styles from "./page.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
        <h1>
            Love the design of this website? I made it! Want a custom made website? 
            Shoot me an email.
        </h1>
        <p>hello@stitchedbyizz.com</p>
        <div className={styles.social_media_container}>
          <a target="_blank" href="https://www.instagram.com/stitchedbyizz_/">
            <img className={styles.icon} src="./images/instagram_icon.png" alt="Instagram" />
          </a>
        </div>
        <p>© 2021 Stitched By Izz</p>
    </div>
  );
}