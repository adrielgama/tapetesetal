import React from "react";
import Fade from "react-reveal/Fade";

import Navbar from "./components/Navbar/Navbar";
import Brand from "./components/Brands/";
import Header from "./pages/Header";
import About from "./pages/About";
import Products from "./pages/Products";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Fade bottom>
        <Header />
      </Fade>
      <Fade bottom>
        <div id="about">
          <About />
        </div>
      </Fade>
      <Fade bottom>
        <div id="clients">
          <Brand />
        </div>
      </Fade>
      <Fade bottom>
        <div id="products">
          <Products />
        </div>
      </Fade>
      <Fade bottom>
        <div id="contact">
          <Footer />
        </div>
      </Fade>
    </>
  );
}

export default App;
