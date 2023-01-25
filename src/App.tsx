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
    <div>
      <Navbar />
      <Fade bottom>
        <Header />
      </Fade>
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
      <div id="contact">
        <Fade bottom>
          <Footer />
        </Fade>
      </div>
    </div>
  );
}

export default App;
