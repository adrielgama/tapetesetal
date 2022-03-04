/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Modal } from "@mui/material";
import {
  Header,
  LogoHeader,
  BtnSimulation,
  NavLink,
  ContainerNavLink,
} from "./styles";
import Logo from "../../assets/images/logo.png";
import ContactSimulation from "../ContactSimulation/ContactSimulation";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Header>
      <a href="#">
        <LogoHeader src={Logo} alt="Logo" />
      </a>
      <ContainerNavLink>
        <ContainerNavLink>
          <NavLink href="#about">SOBRE NÓS</NavLink>
          <NavLink href="#clients">CLIENTES</NavLink>
          <NavLink href="#product">PRODUTO</NavLink>
          <NavLink href="#team">EQUIPE</NavLink>
          <NavLink href="#contact">CONTATO</NavLink>
        </ContainerNavLink>
        <BtnSimulation onClick={handleOpen}>Simule aqui</BtnSimulation>
      </ContainerNavLink>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-simulation"
        aria-describedby="modal-simulation"
      >
        <ContactSimulation />
      </Modal>
    </Header>
  );
};

export default Navbar;
