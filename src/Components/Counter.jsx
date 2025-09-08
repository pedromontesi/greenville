import styles from "./Counter.module.css";


function Counter() {
  return (
  <div className={styles.container}>
    <div className={styles.CounterContainer}>

      <div>
        <span>+16</span>
        <p>Locais</p>
      </div>

      <div className={styles.customCounter}>
        <span>+100</span>
        <p>Clientes</p>
      </div>

      <div>
        <span>+200</span>
        <p>Compras</p>
      </div>

    </div>
  </div>
  )
}

export default Counter
