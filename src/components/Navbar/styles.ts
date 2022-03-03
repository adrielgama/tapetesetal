import styled from "styled-components";
import { Color, Theme } from "../../types/types";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  padding: 0 1rem;

  height: 100px;
  background-color: ${Color.light_bg};
  font-family: ${Theme.typography.fontFamily.Roboto};
  font-size: ${Theme.typography.heading.paragraph};

  filter: ${Theme.dropShadow.filter};
`;

export const LogoHeader = styled.img`
  /* width: 100%; */
`;

export const BtnSimulation = styled.button`
  width: 200px;
  height: 50px;

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

  :active {
    background-color: ${Color.grey};
  }
`;
