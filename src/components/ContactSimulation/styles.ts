import styled from "styled-components";
import { Button } from "@mui/material";
import { Color } from "../../types/types";

export const MyBtn = styled(Button)`
  margin: 10px 0 !important;
  width: 200px;
  height: 50px;
  color: ${Color.white} !important;
  background-color: ${Color.orange} !important;

  :hover {
    background-color: ${Color.orangeHover} !important;
  }
`;
