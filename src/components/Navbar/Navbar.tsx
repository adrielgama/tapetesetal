/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Modal } from "@mui/material";
import {
  isMenuProps,
  Header,
  LogoHeader,
  BtnSimulation,
  NavLink,
  ContainerNavLink,
  ContainerNavLinkList,
} from "./styles";
import Logo from "../../assets/images/logo.png";
import ContactSimulation from "../ContactSimulation/ContactSimulation";
import SimulationResult from "../ContactSimulation/SimulationResult";

const Navbar: React.FC<isMenuProps> = ({ openMenu }) => {
  const [open, setOpen] = React.useState(false);
  const [menuHamburgerOpen, setMenuHamburgerOpen] = React.useState(false);
  const [actualPage, setActualPage] = React.useState(1);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Header>
      <a href="#">
        <LogoHeader src={Logo} alt="Logo" />
      </a>
      <ContainerNavLink openMenu={menuHamburgerOpen}>
        <ContainerNavLinkList>
          <NavLink href="#about">SOBRE NÓS</NavLink>
          <NavLink href="#clients">CLIENTES</NavLink>
          <NavLink href="#product">PRODUTO</NavLink>
          <NavLink href="#team">EQUIPE</NavLink>
          <NavLink href="#contact">CONTATO</NavLink>
        </ContainerNavLinkList>
        <BtnSimulation onClick={handleOpen}>Simule aqui</BtnSimulation>
      </ContainerNavLink>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-simulation"
        aria-describedby="modal-simulation"
      >
        {/* <ContactSimulation setWizard={setActualPage} wizardValue={actualPage} /> */}
        {actualPage === 1 ? (
          <ContactSimulation
            setWizard={setActualPage}
            wizardValue={actualPage}
          />
        ) : (
          <SimulationResult
            setWizard={setActualPage}
            wizardValue={actualPage}
          />
        )}
      </Modal>
    </Header>
  );
};

export default Navbar;
