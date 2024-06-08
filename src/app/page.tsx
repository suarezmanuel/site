import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to my site!
        </p>
        <div>
          <p> By Manuel </p>
        </div>
      </div>

      <div className={styles.center}>
        Checkout my projects below
      </div>

      <div className={styles.grid}>
        <a
          href="/projects/perlin"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Perlin noise<span>-&gt;</span>
          </h2>
          <p>Noise texture used to render pseudo-random procedural terrain generation.</p>
        </a>
      </div>
    </main>
  );
}
