import styled from "styled-components";
import { Color, Theme } from "../../types/types";
import BGPattern from "../../assets/svg/pattern.png";

export const HomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  width: 100%;
  height: 100vh;

  /* background-color: ${Color.black}; */
  background: rgba(1, 20, 29, 0.75);
  background-image: url(${BGPattern});
  background-repeat: repeat;

  font-family: ${Theme.typography.fontFamily.Roboto};
  font-size: ${Theme.typography.heading.paragraph};
  color: ${Color.orange};
`;

export const HomeCarpet = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  color: ${Color.white};
  font-family: ${Theme.typography.fontFamily.Rubik};
  font-size: ${Theme.typography.heading.title};
  text-transform: uppercase;
  text-align: center;

  width: 70%;

  border: 5px solid ${Color.white};
  padding: 50px 10px;
  border-radius: 2px;

  @media (max-width: 768px) {
    font-size: 4rem;
    padding: 50px 20px;
  }
`;

export const ChevronIcon = styled.div`
  position: absolute;
  left: 50vw;
  bottom: 5vh;
  color: ${Color.orange};
  font-size: 25px;
  cursor: pointer;
  transition: 550ms;
  animation: mouse 2s ease-in-out infinite;
  @keyframes mouse {
    0% {
      bottom: 30px;
    }
    50% {
      bottom: 8px;
    }
    100% {
      bottom: 30px;
    }
  }
  :hover {
    color: ${Color.white};
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
