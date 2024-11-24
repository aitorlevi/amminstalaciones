import { Contact } from "./components/Contact/Contact";
import Renovations from "./components/Renovations/Renovations";
import MeetUs from "./components/MeetUs/MeetUs";
import styles from "./App.module.scss";
import logo from "./assets/images/logo.webp";
import logoFooter from "./assets/images/logo_white.webp";

export const App = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} />
      </header>
      <div className={styles.pageContent}>
        <MeetUs />
        <Renovations />
        <Contact />
      </div>
      <footer className={styles.footer}>
        <div className={styles.social}>
          <span>
            <a href="tel:+34629067099">629067099</a>&nbsp;/&nbsp;
            <a href="tel:+34696730964">696730964</a>
          </span>
          <span>
            <a href="mailto: amminstalaciones@hotmail.es">
              amminstalaciones@hotmail.es
            </a>
          </span>
        </div>
        <img src={logoFooter} />
      </footer>
    </>
  );
};
