import styled from "styled-components";
import { Color, Theme } from "../../types/types";

export const BrandPage = styled.div`
  overflow: hidden;

  padding-bottom: 3vh;
  > h1 {
    text-align: center;
    padding: 12vh 0 1vh 0;
    font-family: ${Theme.typography.fontFamily.Roboto};
    font-size: ${Theme.typography.heading.sectionTitle};
    color: ${Color.orange};
  }
  /* 
  @media (max-width: 768px) {
    > h1 {
      font-size: ${Theme.typography.heading.sectionTitle};
    }
  } */
`;
