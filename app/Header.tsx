'use client'
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

export default function Header() {
  const pathname = usePathname();
  const isPortfolioPage = pathname.includes('/portfolio');

  return (
    <nav className={`${styles.nav} ${isPortfolioPage ? styles.portfolioNav : ''}`}>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}