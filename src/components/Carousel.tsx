import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Carousel = ({ images }: { images: string[] }) => {
  return (
    <ReactCarousel
      showThumbs={false}
      autoPlay
      infiniteLoop={true}
      showIndicators={false}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} />
        </div>
      ))}
    </ReactCarousel>
  );
};
