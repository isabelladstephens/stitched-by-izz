import styles from "./page.module.css";

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <main className={styles.contact_main}>
        <div className={styles.contact_box}>
            <h1 className={styles.contact_title}>
              I&apos;d love to be able to take custom orders in the future! But for now, 
              I&apos;m open to questions and suggestions.
            </h1>
            <p className={styles.contact_subtitle}>
                isabelladstephens@gmail.com
            </p>
        </div>
      </main>
    </div>
  );
}
