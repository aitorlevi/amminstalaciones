import "./App.css";
import { Header } from "./components/Header";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Renovations } from "./components/Renovations";
import { MeetUs } from "./components/MeetUs";
import { useState } from "react";
import { CarouselModal } from "./components/CarouselModal";

export const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);

  return (
    <>
      <Header />
      <div className="page-content">
        <MeetUs />
        <Renovations setImages={setImages} setIsOpen={setIsOpen} />
        <Contact />
      </div>
      <Footer />
      {isOpen && <CarouselModal setIsOpen={setIsOpen} images={images} />}
    </>
  );
};
