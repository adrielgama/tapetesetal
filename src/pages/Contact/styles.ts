import styled from "styled-components";
import { Color, Theme } from "../../types/types";

export const ContactPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding-bottom: 3rem;

  background-color: ${Color.white};

  font-family: ${Theme.typography.fontFamily.Roboto};
  color: ${Color.grey2};

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  > h1 {
    padding: 50px 0;
    font-size: ${Theme.typography.heading.sectionTitle};
    color: ${Color.grey2};
  }

  @media (max-width: 768px) {
    > h1 {
      font-size: ${Theme.typography.heading.sectionTitle};
    }

    > div {
      flex-direction: column;
    }
  }
`;

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 300px;
  padding-bottom: 2vh;

  h3 {
    text-transform: uppercase;
    color: #b4b4b4;
    padding: 2vh 0 3vh 0;
  }

  p,
  a {
    font-size: ${Theme.typography.heading.paragraph};
    text-decoration: none;
    color: ${Color.grey};
    text-align: center;
  }

  span {
    color: transparent;
  }

  > svg:last-child {
    font-size: 40px;
  }
  svg {
    font-size: 35px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media (max-width: 768px) {
    :first-child{
      margin-top: 0;
    }

    margin-top: 50px;
  }
`;
