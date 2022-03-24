import styled from "styled-components";
import { Color, Theme } from "../../types/types";

export interface isMenuProps {
  openMenu?: boolean;
}

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  width: 100%;
  height: 100px;
  position: fixed;
  padding: 0 1rem;

  background-color: ${Color.light_bg};
  font-family: ${Theme.typography.fontFamily.Roboto};
  font-size: ${Theme.typography.heading.paragraph};

  filter: ${Theme.dropShadow.filter};
`;

export const LogoHeader = styled.img`
  max-width: 340px;
  cursor: pointer;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const BtnSimulation = styled.button`
  width: 200px;
  height: 50px;
  margin-left: 8px;

  background-color: ${Color.orange};
  border-radius: ${Theme.radius.default};

  color: ${Color.white};
  font-family: ${Theme.typography.fontFamily.Roboto};
  font-size: ${Theme.typography.heading.buttons};
  font-weight: ${Theme.typography.weight.bold};
  text-transform: uppercase;

  cursor: pointer;
  transition: 300ms;

  :hover {
    background-color: ${Color.orangeHover};
  }

  :focus,
  :hover {
    box-shadow: 0 0.5em 0.5em -0.4em ${Color.orangeHover};
    transform: translateY(-0.25em);
  }
  :active {
    background-color: ${Color.grey};
  }
`;

export const ContainerNavLink = styled.div<isMenuProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${Color.white};
    transform: ${({ openMenu }) =>
      openMenu ? "translateX(0)" : "translateX(100%)"};
    position: fixed;
    top: 0;
    right: 10px;
    height: 100vh;
    width: 300px;
    -webkit-box-shadow: ${({ openMenu }) =>
      openMenu ? "-768px 0px 0px 768px rgba(0, 0, 0, 0.13)" : ""};
    box-shadow: ${({ openMenu }) =>
      openMenu ? "-768px 0px 0px 768px rgba(0, 0, 0, 0.13)" : ""};
    /* padding-top: 3.5rem; */
    transition: transform 0.3s ease-in-out;
  }
`;

export const ContainerNavLinkList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: space-evenly;
    height: 30vh;
    margin-bottom: 4rem;
    transition: transform 0.3s ease-in-out;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  display: inline-block;
  position: relative;

  color: ${Color.grey};

  margin: 0 1rem;
  transition: 200ms;
  cursor: pointer;

  :after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${Color.orange};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  :hover {
    color: ${Color.orange};
  }

  :hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
