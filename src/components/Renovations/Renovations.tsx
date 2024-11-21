import RenovationsCarousel from "../RenovationsCarousel/RenovationsCarousel";
import renovationData from "../../data/renovationData";

const Renovations = () => {
  console.log(renovationData);
  return (
    <section>
      <h2>Nuestros Proyectos</h2>
      <p>
        Descubre algunos de los proyectos que hemos realizado para nuestros
        clientes. Cada reforma es única y está hecha a medida para satisfacer
        los gustos y necesidades de cada persona. Desde cocinas modernas hasta
        baños funcionales y espacios de trabajo inspiradores, nuestros proyectos
        reflejan nuestro compromiso con la excelencia.
      </p>
      <RenovationsCarousel
        carouselData={renovationData.bathroom}
        title="Baños"
      />
      <RenovationsCarousel
        carouselData={renovationData.kitchen}
        title="Cocinas"
      />
      <RenovationsCarousel
        carouselData={renovationData.community}
        title="Comunidad"
      />
      <RenovationsCarousel carouselData={renovationData.other} title="Otros" />
    </section>
  );
};

export default Renovations;
