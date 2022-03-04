import styled from "styled-components";
import { Color, Theme } from "../../types/types";

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

export const ContainerNavLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
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
