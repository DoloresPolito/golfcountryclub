import { comision } from "@/data/comision";
import styles from "./Comision.module.scss";

export default function Comision() {
  return (
    <section className={styles.comision}>
      <div className={styles.inner}>
        {comision.map((grupo) => (
          <div key={grupo.titulo} data-reveal>
            <h2 className={styles.groupTitle}>{grupo.titulo}</h2>
            <ul className={styles.grid} role="list">
              {grupo.integrantes.map((integrante, i) => (
                <li key={i} className={styles.card}>
                  <p className={styles.cargo}>{integrante.cargo}</p>
                  <p className={styles.nombre}>{integrante.nombre}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
