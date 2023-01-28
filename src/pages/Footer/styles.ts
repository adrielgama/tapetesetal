import styled from "styled-components";
import { Color, Theme } from "../../types/types";

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 8vh;

  background-color: ${Color.orange};

  font-family: ${Theme.typography.fontFamily.Roboto};
  font-size: ${Theme.typography.heading.footer};
  text-align: center;
  letter-spacing: 0.2px;
  word-spacing: 1px;
  color: ${Color.white};

  & span:nth-child(2) {
    padding-top: 10px;
    > a {
      text-decoration: none;
      color: ${Color.brown};

      :hover {
        color: ${Color.grey};
      }
    }
  }

  @media (max-width: 768px) {
    height: 12vh;

    & span:nth-child(2) {
      padding-top: 5px;
    }

    > span {
      padding: 0 30px;
    }
  }
`;
