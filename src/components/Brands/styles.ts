import styled from "styled-components";
import { Color } from "../../types/types";

export const BrandPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  width: 100vw;
  padding: 30px 40px;
  overflow: hidden;

  > div {
    > img {
      max-height: 121px;
      padding: 0 20px;
    }
  }

  /* background-color: ${Color.white}; */

  /* @media (max-width: 768px) {
    font-size: 4rem;
    padding: 50px 20px;
  } */
`;
