import Fade from "react-reveal/Fade";

import { Navbar } from "./components/Navbar";
import Brand from "./components/Brands";
import { Header } from "./pages/Header";
import { About } from "./pages/About";
import { Products } from "./pages/Products";

export const App = () => {
  return (
    <>
      <Navbar />

      <div id="#">
        <Fade bottom>
          <Header />
        </Fade>
      </div>

      <div id="about">
        <Fade bottom>
          <About />
        </Fade>
      </div>
      <div id="clients">
        <Fade bottom>
          <Brand />
        </Fade>
      </div>
      <div id="products">
        <Fade bottom>
          <Products />
        </Fade>
      </div>
      {/* <div id="contact">
        <Fade bottom>
          <Footer />
        </Fade>
      </div> */}
    </>
  );
};
