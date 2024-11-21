import { Contact } from "./components/Contact/Contact";
import Renovations from "./components/Renovations/Renovations";
import MeetUs from "./components/MeetUs/MeetUs";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>AMM INSTALACIONES Y REFORMAS</h1>
        <h3>Transformando tus espacios, renovando tu vida.</h3>
      </header>
      <div className={styles.pageContent}>
        <MeetUs />
        <Renovations />
        <Contact />
      </div>
      <footer className={styles.footer}>
        <span>
          <a href="mailto: amminstalaciones@hotmail.es">
            amminstalaciones@hotmail.es
          </a>
        </span>
      </footer>
    </>
  );
};
