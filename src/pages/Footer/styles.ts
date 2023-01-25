import styled from "styled-components";
import { Color, Theme } from "../../types/types";

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 5vh;

  background-color: ${Color.orange};

  font-family: ${Theme.typography.fontFamily.Roboto};
  font-size: ${Theme.typography.heading.footer};
  text-align: center;
  letter-spacing: 0.2px;
  word-spacing: 1px;
  color: ${Color.white};

  /* @media (max-width: 768px) {
   
  } */
`;
