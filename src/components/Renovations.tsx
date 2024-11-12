import renovationsData from "../data/renovationData";

type Props = {
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Renovations = ({ setImages, setIsOpen }: Props) => {
  const showModal = (renovation: string[]) => {
    setImages(renovation);
    setIsOpen(true);
  };
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
        <div className="renovations-container">
          {renovationsData.map((renovation, index) => (
            <div className="renovation" key={index}>
              <h3>{renovation.name}</h3>
              <p>{renovation.description}</p>
              <img
                src={renovation.main_image}
                onClick={() => showModal(renovation.images)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
