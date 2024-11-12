import compromise from "../assets/images/meet-us/compromiso.png";
import attention from "../assets/images/meet-us/atencion-personalizada.png";
import quality from "../assets/images/meet-us/calidad.png";

export const MeetUs = () => {
  return (
    <section className="meet-us">
      <h2>Quiénes somos</h2>
      <div className="content">
        <p>
          En AMM INSTALACIONES, somos especialistas en renovationas integrales y
          parciales, brindando soluciones innovadoras y personalizadas a
          nuestros clientes. Nos dedicamos a transformar todo tipo de espacios,
          desde viviendas y oficinas hasta locales comerciales, adaptándonos
          siempre a las necesidades y estilo de cada cliente.
        </p>
        <div className="values">
          <article className="value">
            <img src={quality} />
            <h4>Calidad y profesionalismo en cada proyecto</h4>
          </article>
          <article className="value">
            <img src={attention} />
            <h4>Atención personalizada para cada cliente</h4>
          </article>
          <article className="value">
            <img src={compromise} />
            <h4>Compromiso con los plazos de entrega</h4>
          </article>
        </div>
        <p>
          Confía en nosotros para llevar a cabo la renovationa de tus sueños.
          Nuestro equipo de expertos está aquí para ayudarte a dar vida a tus
          ideas.
        </p>
      </div>
    </section>
  );
};
