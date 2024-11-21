import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RenovationItem } from "../../data/renovationData";
import { useState } from "react";
import styles from "./RenovationsCarousel.module.scss";

const RenovationsCarousel = ({
  carouselData,
  title,
}: {
  carouselData: RenovationItem[];
  title: string;
}) => {
  const [mouseState, setMouseState] = useState({ isMoving: false });
  console.log(carouselData);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {carouselData.map((renovation) => (
          <div className={styles.renovation} key={renovation.id}>
            <img src={renovation.mainImage} draggable="false" />
            <h4>{renovation.title}</h4>
          </div>
        ))}
      </MultiCarousel>
    </>
  );
};

export default RenovationsCarousel;
