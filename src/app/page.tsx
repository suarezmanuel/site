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
          href="/projects/happybird"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Happy Bird <span>-&gt;</span>
          </h2>
          <p>My first project.</p>
        </a>
        <a
          href="/projects/happybird"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Happy Bord <span>-&gt;</span>
          </h2>
          <p>My first project.</p>
        </a>
        <a
          href="/projects/happybird"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Happy Bird <span>-&gt;</span>
          </h2>
          <p>My first project.</p>
        </a>
        <a
          href="/projects/happybird"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Happy Bird <span>-&gt;</span>
          </h2>
          <p>My first project.</p>
        </a>
        <a
          href="/projects/happybird"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Happy Bird <span>-&gt;</span>
          </h2>
          <p>My first project.</p>
        </a>
        <a
          href="/projects/happybird"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Happy Bird <span>-&gt;</span>
          </h2>
          <p>My first project.</p>
        </a>
        <a
          href="/projects/happybird"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Happy Bird <span>-&gt;</span>
          </h2>
          <p>My first project.</p>
        </a>
        <a
          href="/projects/happybird"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Happy Bird <span>-&gt;</span>
          </h2>
          <p>My first project.</p>
        </a>
        <a
          href="/projects/happybird"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Happy Bird <span>-&gt;</span>
          </h2>
          <p>My first project.</p>
        </a>
      </div>
    </main>
  );
}
