import reformsData from "../data/reformData";
import { Carousel } from "./Carousel";

export const Reforms = () => {
  return (
    <section className="reforms">
      <h2>Nuestros Proyectos</h2>
      <div className="content">
        <p>
          Descubre algunos de los proyectos que hemos realizado para nuestros
          clientes. Cada reforma es única y está hecha a medida para satisfacer
          los gustos y necesidades de cada persona. Desde cocinas modernas hasta
          baños funcionales y espacios de trabajo inspiradores, nuestros
          proyectos reflejan nuestro compromiso con la excelencia.
        </p>
        <div className="carousel-container">
          {reformsData.map((reform) => (
            <div className="reform" key={reform.id}>
              <h3>{reform.name}</h3>
              <p>{reform.description}</p>
              <Carousel images={reform.images} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
