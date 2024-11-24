import { RiCloseLine } from "react-icons/ri";
import styles from "./CarouselModal.module.scss";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  images: string[];
  description?: string;
};

const CarouselModal: React.FC<Props> = ({ setIsOpen, images, description }) => {
  return (
    <>
      <div className={styles.background} onClick={() => setIsOpen(false)}></div>
      <div className={styles.container}>
        <ReactCarousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          emulateTouch={true}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} draggable="true" />
            </div>
          ))}
        </ReactCarousel>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <button
        className={`button ${styles.closeButton}`}
        onClick={() => setIsOpen(false)}
      >
        <RiCloseLine />
      </button>
    </>
  );
};

export default CarouselModal;
