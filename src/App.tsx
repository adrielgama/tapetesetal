import React from "react";
import Navbar from "./components/Navbar/Navbar";
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
    </>
  );
}

export default App;
