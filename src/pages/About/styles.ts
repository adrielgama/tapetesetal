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
  }

  @media (max-width: 768px) {
    > h1 {
      font-size: ${Theme.typography.heading.sectionTitle};
    }

    > p {
      width: 70vw;
      padding: 0 0 50px 0;
    }
  }
`;
