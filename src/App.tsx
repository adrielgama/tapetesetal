import Fade from "react-reveal/Fade";

import { Navbar } from "./components/Navbar";
import Brand from "./components/Brands";
import { Header } from "./pages/Header";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Footer } from "./pages/Footer";
import { Contact } from "./pages/Contact";

export const App = () => {
  return (
    <>
      <Navbar />

      <div id="#">
        <Fade left>
          <Header />
        </Fade>
      </div>

      <div id="about">
        <Fade right>
          <About />
        </Fade>
      </div>
      <div id="clients">
        <Fade left>
          <Brand />
        </Fade>
      </div>
      <div id="products">
        <Fade right>
          <Products />
        </Fade>
      </div>
      <div id="contact">
        <Fade left>
          <Contact />
        </Fade>
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
};
