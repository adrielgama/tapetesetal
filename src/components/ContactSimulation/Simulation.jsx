import * as React from "react";
// import { IMaskInput } from "react-imask";
import emailjs from "@emailjs/browser";
import { Box, TextField, Button, Grid } from "@mui/material";

const style = {
  position: "absolute",
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

const ContactSimulation = () => {
  const form = React.useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_nbptw95", "template_n2wxk9d", e.currentTarget, "jhefrXBSVihCMXbGk").then(
      (result) => {
        console.log(result.text);
        window.sessionStorage.setItem('SENDMAIL', result.text)
    },
    (error) => {
        window.sessionStorage.setItem('ERROR_SENDMAIL', error.text)
        console.log(error.text);
      }
    );
  }

  return (
    <React.Fragment>
      <Box sx={style} component="form" autoComplete="off">
        <form
        //   fullWidth
        //   variant="outlined"
          onSubmit={sendEmail}
          ref={form}
          style={{ marginTop: 10 }}
        >
          <TextField
            // id="full-name"
            type="text"
            name="name"
            label="Nome"
            required
            style={{ marginTop: 10 }}
          />
          <TextField
            // id="email-address"
            type="email"
            name="email"
            label="E-mail"
            required
            style={{ marginTop: 10 }}
          />
          <TextField
            // id="telephone"
            type="tel"
            name="tel"
            label="Telefone"
            required
            style={{ marginTop: 10 }}
          />
          <Grid
            display={"flex"}
            alignItems="center"
            flexDirection="row"
            style={{ marginTop: 10, width: "100%" }}
          >
            <TextField
              // id="altura"
              type="number"
              name="altura"
              label="Altura"
              required
              style={{ width: "100%" }}
            />
            <TextField
              // id="comprimento"
              type="number"
              name="comprimento"
              label="Comprimento"
              required
              style={{ marginLeft: 10, width: "100%" }}
            />
          </Grid>
          <TextField
            // id="message"
            type="text"
            name="message"
            label="Mensagem (opcional)"
            rows={4}
            style={{ marginTop: 10, width: "100%" }}
            multiline
          />
          <Button
            type="submit"
            // disabled={state.submitting}
            style={{ marginTop: 10 }}
          >
            Simular valor
          </Button>
        </form>
      </Box>
    </React.Fragment>
  );
};

export default ContactSimulation;
