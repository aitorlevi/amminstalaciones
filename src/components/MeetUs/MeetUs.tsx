import compromise from "../../assets/images/meet-us/compromiso.png";
import attention from "../../assets/images/meet-us/atencion-personalizada.png";
import quality from "../../assets/images/meet-us/calidad.png";
import styles from "./MeetUs.module.scss";

const MeetUs = () => {
  return (
    <section>
      <h2>Quiénes somos</h2>
      <p>
        En <b>A.M.M. INSTALACIONES</b>, somos especialistas en reformas
        integrales y parciales, brindando soluciones innovadoras y
        personalizadas a nuestros clientes. Nos dedicamos a transformar todo
        tipo de espacios, desde viviendas y oficinas hasta locales comerciales,
        adaptándonos siempre a las necesidades y estilo de cada cliente.
      </p>
      <div className={styles.values}>
        <div className={styles.value}>
          <img src={quality} />
          <h4>Calidad y profesionalismo en cada proyecto</h4>
        </div>
        <div className={styles.value}>
          <img src={attention} />
          <h4>Atención personalizada para cada cliente</h4>
        </div>
        <div className={styles.value}>
          <img src={compromise} />
          <h4>Compromiso con los plazos de entrega</h4>
        </div>
      </div>
      <p>
        Confía en nosotros para llevar a cabo la reforma de tus sueños. Nuestro
        equipo de expertos está aquí para ayudarte a dar vida a tus ideas.
      </p>
    </section>
  );
};

export default MeetUs;
