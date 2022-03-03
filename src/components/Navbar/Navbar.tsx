import React from "react";
import { Header, LogoHeader, BtnSimulation } from "./styles";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <Header>
      <LogoHeader src={Logo} alt="Logo" />
      <BtnSimulation>Simule aqui</BtnSimulation>
    </Header>
  );
};

export default Navbar;
