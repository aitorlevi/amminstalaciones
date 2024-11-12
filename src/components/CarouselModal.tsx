import { RiCloseLine } from "react-icons/ri";
import { Carousel } from "./Carousel";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  images: string[];
};

export const CarouselModal = ({ setIsOpen, images }: Props) => {
  return (
    <section className="modal">
      <div className="modal-background" onClick={() => setIsOpen(false)}></div>

      <div className="carousel-container">
        <Carousel images={images} />
      </div>
      <button className="close-btn" onClick={() => setIsOpen(false)}>
        <RiCloseLine />
      </button>
    </section>
  );
};
