import { useState, useEffect, useRef } from "react";
import styles from "./Counter.module.css";

function AnimatedNumber({ target, start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const step = Math.ceil(target / 40); 
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(current);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target, start]);

  return <span>+{value}</span>;
}

function Counter() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.counterContainer}>
        <div>
          <b><AnimatedNumber target={16} start={visible} /></b>
          <p>Locais</p>
        </div>

        <div className={styles.customCounter}>
          <b><AnimatedNumber target={100} start={visible} /></b>
          <p>Clientes</p>
        </div>

        <div>
          <b><AnimatedNumber target={200} start={visible} /></b>
          <p>Compras</p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
