import "./App.css";
import { Contact } from "./components/Contact/Contact";
import Renovations from "./components/Renovations/Renovations";
import MeetUs from "./components/MeetUs/MeetUs";
import { useState } from "react";
import CarouselModal from "./components/CarouselModal/CarouselModal";

export const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [images, setImages] = useState<string[]>([]);

  return (
    <>
      <header>
        <h1>AMM INSTALACIONES Y REFORMAS</h1>
        <h3>Transformando tus espacios, renovando tu vida.</h3>
      </header>
      <div className="page-content">
        <MeetUs />
        <Renovations />
        <Contact />
      </div>
      <footer>
        <span>
          <a href="mailto: amminstalaciones@hotmail.es">
            amminstalaciones@hotmail.es
          </a>
        </span>
      </footer>
      {/* {isOpen && <CarouselModal setIsOpen={setIsOpen} />} */}
    </>
  );
};
