import Fade from "react-reveal/Fade";

import { Navbar } from "./components/Navbar";
import Brand from "./components/Brands";
import { Header } from "./pages/Header";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Footer } from "./pages/Footer";
import { useEffect, useRef, useState } from "react";


export const App = () => {
  
  const stickyHeader = useRef() 

  const headerRef = useRef(null)
  const aboutRef = useRef(null)
  const clientsRef = useRef(null)
  const productsRef = useRef(null)
  const contactRef = useRef(null)

  const sections = [
    {section: "Header", ref: headerRef, id: "#"},
    {section: "About", ref: aboutRef, id:'about'},
    {section: "Clients", ref: clientsRef, id:'clients'},
    {section: "Products", ref: productsRef, id:'products'},
    {section: "Contact", ref: contactRef, id:'contact'},
  ]

  return (
    <>
      <Navbar ref={stickyHeader} sections={sections}/>


      <div ref={headerRef} id="#">
        <Fade left>
          <Header />
        </Fade>
      </div>

      <div ref={aboutRef} id="about">
        <Fade right>
          <About />
        </Fade>
      </div>
      <div ref={clientsRef} id="clients">
        <Fade left>
          <Brand />
        </Fade>
      </div>
      <div ref={productsRef} id="products">
        <Fade right>
          <Products />
        </Fade>
      </div>
      <div ref={contactRef} id="contact">
        <Footer />
      </div>

    </>
  );
};
