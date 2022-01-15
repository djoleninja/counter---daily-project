import styles from "./index.module.scss";

const Counter = ({
  count,
  id,
  resetCounter,
  incrementCounter,
  decrementCounter,
  deleteCounter,
}) => (
  <div className={styles.counter}>
    <div className={styles.count}>{count}</div>

    <div className={styles.button} onClick={() => incrementCounter(id)}>
      +
    </div>

    <div className={styles.button} onClick={() => decrementCounter(id)}>
      -
    </div>

    <div
      className={`${styles.button} ${styles.resetButton}`}
      onClick={() => resetCounter(id)}
    >
      Reset
    </div>
    <div className={styles.buttonRemove} onClick={() => deleteCounter(id)}>
      remove
    </div>
    <p> Identifier: {id} </p>
  </div>
);

export default Counter;
