import { MutableRefObject, useState } from "react";
import Modal from "@mui/material/Modal";

import { Hamburger } from "./Hamburger";
import ContactSimulation from "../ContactSimulation/ContactSimulation";
import SimulationResult from "../ContactSimulation/SimulationResult";

import Logo from "../../assets/images/logo.png";
import * as S from "./styles";

const getDimensions = (ele: HTMLElement) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele: HTMLElement) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

interface NavBarProps {
  ref: any
  //scrollTo: (ele: HTMLElement) => void
  sections: { section: string; ref: MutableRefObject<null>; id: string }[]
}

export const Navbar = ({ ref, sections }: NavBarProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [menuHamburgerOpen, setMenuHamburgerOpen] = useState<boolean>(false);
  const [actualPage, setActualPage] = useState(1);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const close = () => setMenuHamburgerOpen(false);

  const handleSection = (section: string) => {
    const refElement = sections.find(item => item.section === section)
    const current = refElement?.ref.current as unknown as HTMLElement
    if (refElement && refElement?.id !== '#') {
      let save = document.getElementById(refElement.id)
      save?.setAttribute('style', 'margin-top: 107px')
    }
    scrollTo(current)
  }

  return (
    <S.NavContainer>

      <S.NavbarHeader id="navbar-header" ref={ref}>
        <a href="#">
          <S.LogoHeader src={Logo} alt="Logo" />
        </a>

        <S.StyledMenu open={menuHamburgerOpen} id="teste">
          <S.StyledLink onClick={() => close()} href="#about">
            SOBRE NÓS
          </S.StyledLink>
          <S.StyledLink onClick={() => close()} href="#clients">
            CLIENTES
          </S.StyledLink>
          <S.StyledLink onClick={() => close()} href="#products">
            PRODUTO
          </S.StyledLink>
          {/* <S.StyledLink onClick={() => close()} href="#team">
          EQUIPE
        </S.StyledLink> */}
          <S.StyledLink onClick={() => close()} href="#contact">
            CONTATO
          </S.StyledLink>
          <S.BtnSimulation onClick={handleOpen}>Simule aqui</S.BtnSimulation>
        </S.StyledMenu>
        <Hamburger menuHamburgerOpen={menuHamburgerOpen} setMenuHamburgerOpen={setMenuHamburgerOpen} />
        <S.ContainerNavLink>
          <S.ContainerNavLinkList>
            <S.NavLink onClick={() => handleSection('About')} >SOBRE NÓS</S.NavLink>
            <S.NavLink onClick={() => handleSection('Clients')}>CLIENTES</S.NavLink>
            <S.NavLink onClick={() => handleSection('Products')} >PRODUTO</S.NavLink>
            {/* <S.NavLink href="#team">EQUIPE</S.NavLink> */}
            <S.NavLink onClick={() => handleSection('Contact')} >CONTATO</S.NavLink>
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
    </S.NavContainer>


  );
};
