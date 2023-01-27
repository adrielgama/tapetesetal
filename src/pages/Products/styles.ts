import styled from "styled-components";
import { Color, Theme } from "../../types/types";

export const ProductsPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding-bottom: 3rem;
  /* height: 80vh; */

  /* background-color: ${Color.white}; */
  background-color: #fff9f2;

  font-family: ${Theme.typography.fontFamily.Roboto};
  color: ${Color.grey2};

  > h1 {
    padding: 50px 0;
    font-size: ${Theme.typography.heading.title};
    color: ${Color.grey2};
  }

  > p {
    text-align: center;
    width: 50vw;
    font-size: ${Theme.typography.heading.paragraph};
  }

  > div {
      img {
          width: 100%;
      }
  }

  @media (max-width: 768px) {

    > h1 {
      font-size: ${Theme.typography.heading.sectionTitle};
    }

    > p {
      width: 70vw;
      padding: 0 0 50px 0;
    }

    > div {
      img {
          width: auto;
          height: 20vh;
      }
  }
  }
`;
