import styles from "./page.module.css";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}