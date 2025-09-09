import styles from "./Counter.module.css";


function Counter() {
  return (
  <div className={styles.container}>
    <div className={styles.CounterContainer}>

      <div>
        <b><span>+16</span></b>
        <p>Locais</p>
      </div>

      <div className={styles.customCounter}>
        <b><span>+100</span></b>
        <p>Clientes</p>
      </div>

      <div>
        <b><span>+200</span></b>
        <p>Compras</p>
      </div>

    </div>
  </div>
  )
}

export default Counter
