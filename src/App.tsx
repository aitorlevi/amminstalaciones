import "./App.css";
import { Header } from "./components/Header";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Reforms } from "./components/Reforms";
import { MeetUs } from "./components/MeetUs";

export const App = () => {
  return (
    <>
      <Header />
      <div className="page-content">
        <MeetUs />
        <Reforms />
        <Contact />
      </div>
      <Footer />
    </>
  );
};
