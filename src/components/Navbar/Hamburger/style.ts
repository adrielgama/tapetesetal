import styled from "styled-components";
import { Color } from "../../../types/types";

interface StlProps {
  open: boolean;
}

export const StyledHamburger = styled.button<StlProps>`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    left: 85vw;
    top: 30px;
    width: 2rem;
    height: 2rem;
    padding: 0;
    background: transparent;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    border: none;
    cursor: pointer;
    outline: none;

    /* left: ${({ open }) => (open ? "85vw" : "3vw")}; */

    div {
      position: relative;
      width: 2rem;
      height: 0.25rem;
      border-radius: 10px;
      background-color: ${Color.brown};

      transition: all 0.2s linear;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }
      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }

    z-index: 1;

    @media (max-width: 600px) {
      /* left: ${({ open }) => (open ? "initial" : "3vw")}; */
      right: ${({ open }) => (open ? "2vw" : "3vw")};
    }
  }
`;
