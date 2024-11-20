import RenovationsCarousel from "../RenovationsCarousel/RenovationsCarousel";
import renovationData from "../../data/renovationData";

const Renovations = () => {
  // const showModal = (renovation: string[]) => {
  //   setImages(renovation);
  //   setIsOpen(true);
  // };
  console.log(renovationData);
  return (
    <section className="renovations">
      <h2>Nuestros Proyectos</h2>
      <div className="content">
        <p>
          Descubre algunos de los proyectos que hemos realizado para nuestros
          clientes. Cada reforma es única y está hecha a medida para satisfacer
          los gustos y necesidades de cada persona. Desde cocinas modernas hasta
          baños funcionales y espacios de trabajo inspiradores, nuestros
          proyectos reflejan nuestro compromiso con la excelencia.
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
        <RenovationsCarousel
          carouselData={renovationData.other}
          title="Otros"
        />
        {/* <div className="renovations-container">
          {renovationsData.map((renovation, index) => (
            <div className="renovation" key={index}>
              <img
                src={renovation.main_image}
                onClick={() => showModal(renovation.images)}
              />
              <h3>{renovation.name}</h3>
              <p>{renovation.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Renovations;
