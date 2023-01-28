import { useState } from "react";
import Modal from "@mui/material/Modal";

import { Hamburger } from "./Hamburger";
import ContactSimulation from "../ContactSimulation/ContactSimulation";
import SimulationResult from "../ContactSimulation/SimulationResult";

import Logo from "../../assets/images/logo.png";
import * as S from "./styles";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [menuHamburgerOpen, setMenuHamburgerOpen] = useState<boolean>(false);
  const [actualPage, setActualPage] = useState(1);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const close = () => setMenuHamburgerOpen(false);

  return (
    <S.NavbarHeader isLowResolution={menuHamburgerOpen}>
      <a href="#">
        <S.LogoHeader src={Logo} alt="Logo" />
      </a>

      <S.StyledMenu open={menuHamburgerOpen} id="teste">
        <S.StyledLink onClick={() => close()} href="#">
          INÍCIO
        </S.StyledLink>
        <S.StyledLink onClick={() => close()} href="#about">
          SOBRE NÓS
        </S.StyledLink>
        <S.StyledLink onClick={() => close()} href="#clients">
          CLIENTES
        </S.StyledLink>
        <S.StyledLink onClick={() => close()} href="#products">
          PRODUTO
        </S.StyledLink>
        <S.StyledLink onClick={() => close()} href="#contact">
          CONTATO
        </S.StyledLink>
        <S.BtnSimulation onClick={handleOpen}>Simule aqui</S.BtnSimulation>
      </S.StyledMenu>
      <Hamburger
        menuHamburgerOpen={menuHamburgerOpen}
        setMenuHamburgerOpen={setMenuHamburgerOpen}
      />
      <S.ContainerNavLink>
        <S.ContainerNavLinkList>
          <S.NavLink href="#about">SOBRE NÓS</S.NavLink>
          <S.NavLink href="#clients">CLIENTES</S.NavLink>
          <S.NavLink href="#products">PRODUTO</S.NavLink>
          {/* <S.NavLink href="#team">EQUIPE</S.NavLink> */}
          <S.NavLink href="#contact">CONTATO</S.NavLink>
        </S.ContainerNavLinkList>
        <S.BtnSimulation onClick={handleOpen}>Simule aqui</S.BtnSimulation>
      </S.ContainerNavLink>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-simulation"
        aria-describedby="modal-simulation"
      >
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
    </S.NavbarHeader>
  );
};
