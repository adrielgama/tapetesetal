import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Brand from "./components/Brands/";
import Header from "./pages/Header";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div id="#about">
        <About />
      </div>
      <div id="#clients">
        <Brand />
      </div>
    </>
  );
}

export default App;
