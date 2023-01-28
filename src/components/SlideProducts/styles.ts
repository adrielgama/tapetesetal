import { Container as ContainerMUI } from "@mui/material";
import styled from "styled-components";
import { Color, Theme } from "../../types/types";

export interface isMenuProps {
  openMenu?: boolean;
}

export const Container = styled(ContainerMUI)`
  display: flex !important;
  flex-direction: row !important;

  @media (max-width: 768px) {
    flex-direction: column !important;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 60%;
  padding: 0 1rem;

  text-align: center;

  h1 {
    margin: 20px 0 10px;
    font-family: Open-Sans, sans-serif;
  }

  h3 {
    font-weight: ${Theme.typography.weight.regular};
    font-size: ${Theme.typography.heading.buttons};
    font-family: Open-Sans, sans-serif;
    text-transform: uppercase;
  }

  p {
    margin: 40px 0;
    font-family: Open-Sans, sans-serif;
    padding: 0 3rem;
  }

  h5 {
    margin: 10px 0;
    font-family: Open-Sans, sans-serif;
    text-align: left;
    font-weight: ${Theme.typography.weight.regular};
    padding: 0 3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    p {
      padding: 0;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  position: relative;

  width: 40%;

  img {
    max-width: 400px;
    border: 2px solid rgba(0, 0, 0, 0.005);
    border-radius: 5px;
    filter: drop-shadow(10px 10px 6px rgba(0, 0, 0, 0.1));
  }

  @media (max-width: 768px) {
    width: 100%;

    &:first-child {
      margin-top: 20px;
    }

    img {
      filter: none;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
