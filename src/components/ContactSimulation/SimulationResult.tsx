import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import { Color, Theme } from "../../types/types";
import { IWizard } from "./index";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #b8b8b8",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const styleCarpet = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 300,
  height: 100,
  bgcolor: Color.orange,
  border: "2px solid #444",
  borderRadius: 1,
  boxShadow: 12,
  p: 4,
  margin: 7,
  color: Color.white,
};

const SimulationResult = (Props: IWizard) => {
  const valorFinal = window.sessionStorage.getItem("@calcFinal");

  const printValue = JSON.parse(valorFinal!);

  return (
    <React.Fragment>
      <Box
        sx={style}
        component="form"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography
          variant="h6"
          style={{
            fontWeight: Theme.typography.weight.regular,
          }}
        >
          Resultado da simulação:
        </Typography>
        <Box sx={styleCarpet}>
          <Typography
            variant="h4"
            style={{
              fontFamily: Theme.typography.fontFamily.Roboto,
              fontWeight: Theme.typography.weight.extrabold,
            }}
          >{`R$ ${printValue}`}</Typography>
        </Box>
        {/* https://api.whatsapp.com/send?phone=5575991181035&text=Thanks%20for%20the%20contact */}
        <a
          href={`https://api.whatsapp.com/send?phone=5575991181035&text=Ol%C3%A1%2C%20vim%20do%20seu%20site.%20O%20valor%20do%20meu%20or%C3%A7amento%20deu%3A%20R%24%20{printValue}`}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            startIcon={<WhatsApp />}
            style={{ backgroundColor: "#0f9d44" }}
          >
            Entrar em contato
          </Button>
        </a>
      </Box>
    </React.Fragment>
  );
};

export default SimulationResult;
