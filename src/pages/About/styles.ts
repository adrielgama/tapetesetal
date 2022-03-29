import styled from "styled-components";
import { Color, Theme } from "../../types/types";

export const AboutPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 70vh;

  background-color: ${Color.orange};

  font-family: ${Theme.typography.fontFamily.Roboto};
  color: ${Color.white};

  > h1 {
    padding: 50px 0;
    font-size: ${Theme.typography.heading.title};
    color: ${Color.dark_bg};
  }

  > p {
    text-align: center;
    width: 50vw;
    font-size: ${Theme.typography.heading.paragraph};
    /* padding: 0 100px; */
  }

  /* @media (max-width: 768px) {
    font-size: 4rem;
    padding: 50px 20px;
  } */
`;
