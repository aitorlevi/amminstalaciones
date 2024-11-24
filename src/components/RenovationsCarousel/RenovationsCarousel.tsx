import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RenovationItem } from "../../data/renovationData";
import { useState } from "react";
import styles from "./RenovationsCarousel.module.scss";
import CarouselModal from "../CarouselModal/CarouselModal";

type Props = {
  title: string;
  carouselData: RenovationItem[];
};

const RenovationsCarousel: React.FC<Props> = ({ title, carouselData }) => {
  const [mouseState, setMouseState] = useState({ isMoving: false });
  const [selectedRenovation, setSelectedRenovation] =
    useState<RenovationItem | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <h3 className={styles.test}>{title}</h3>
      <MultiCarousel
        beforeChange={() => setMouseState({ isMoving: true })}
        afterChange={() => setMouseState({ isMoving: false })}
        responsive={responsive}
        infinite
        containerClass={styles.carouselContainer}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {carouselData.map((renovation) => (
          <div
            className={styles.renovation}
            key={renovation.id}
            onClick={(e) => {
              if (mouseState.isMoving) {
                e.preventDefault();
              } else {
                setSelectedRenovation(renovation);
                setIsOpen(true);
              }
            }}
          >
            <img src={renovation.mainImage} draggable="false" />
          </div>
        ))}
      </MultiCarousel>
      {isOpen && selectedRenovation && (
        <CarouselModal
          setIsOpen={setIsOpen}
          images={selectedRenovation.images}
          description={selectedRenovation.description}
        />
      )}
    </>
  );
};

export default RenovationsCarousel;
