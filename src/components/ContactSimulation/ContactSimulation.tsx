/* eslint-disable no-useless-computed-key */
import * as React from "react";
import emailjs from "@emailjs/browser";
import { Box, TextField, FormControl, Grid, Typography } from "@mui/material";
import { IWizard } from "./index";
import { MyBtn } from "./styles";

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
  "@media (max-width: 780px)": {
    width: 300,
  },
};

const userID = import.meta.env.VITE_USERID;
const serviceID = import.meta.env.VITE_SERVICEID;
const templateID = import.meta.env.VITE_TEMPLATEID;

const ContactSimulation = (Props: IWizard) => {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    tel: "",
    altura: 0.0,
    comprimento: 0.0,
    message: "",
    valor_final: "0.0",
  });
  const [status, setStatus] = React.useState("");

  emailjs.init(userID);

  React.useEffect(() => {
    //TODO CALCULO DO VALOR FINAL DO TAPETE
    const final = values.altura * values.comprimento * 600.0;
    const fiString = JSON.stringify(final);
    const floatFinal = parseFloat(fiString).toFixed(2);

    setValues({
      name: values.name,
      email: values.email,
      tel: values.tel,
      altura: values.altura,
      comprimento: values.comprimento,
      message: values.message,
      valor_final: floatFinal,
    });

    window.sessionStorage.setItem("@calcFinal", JSON.stringify(floatFinal));
  }, [values.altura, values.comprimento, values.message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const template_params = {
      name: values.name,
      email: values.email,
      tel: values.tel,
      altura: values.altura,
      comprimento: values.comprimento,
      message: values.message,
      valor_final: values.valor_final,
    };

    emailjs.send(serviceID, templateID, template_params, userID).then(
      (response) => console.log("SUCCESS", response),
      (error) => console.log("FAILED", error)
    );

    Props.setWizard(2);
  };

  React.useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  return (
    <React.Fragment>
      <Box sx={style} component="form">
        <FormControl
          fullWidth
          variant="outlined"
          style={{
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            type="text"
            name="name"
            label="Nome"
            required
            style={{ marginTop: 10, width: "100%" }}
            onChange={(e) =>
              setValues({
                name: e.target.value,
                email: values.email,
                tel: values.tel,
                altura: values.altura,
                comprimento: values.comprimento,
                message: values.message,
                valor_final: values.valor_final,
              })
            }
          />
          <TextField
            type="email"
            name="email"
            label="E-mail"
            required
            style={{ marginTop: 10, width: "100%" }}
            onChange={(e) =>
              setValues({
                name: values.name,
                email: e.target.value,
                tel: values.tel,
                altura: values.altura,
                comprimento: values.comprimento,
                message: values.message,
                valor_final: values.valor_final,
              })
            }
          />
          <TextField
            type="tel"
            name="tel"
            label="Telefone"
            required
            style={{ marginTop: 10, width: "100%" }}
            onChange={(e) =>
              setValues({
                name: values.name,
                email: values.email,
                tel: e.target.value,
                altura: values.altura,
                comprimento: values.comprimento,
                message: values.message,
                valor_final: values.valor_final,
              })
            }
          />
          <Grid
            display={"flex"}
            alignItems="center"
            flexDirection="row"
            style={{ marginTop: 10, width: "100%" }}
          >
            <TextField
              type="number"
              name="altura"
              label="Altura"
              required
              style={{ width: "100%" }}
              defaultValue={"0.00cm"}
              inputProps={{
                maxLength: 13,
                step: "0.01",
              }}
              onChange={(e) =>
                setValues({
                  name: values.name,
                  email: values.email,
                  tel: values.tel,
                  altura: +e.target.value,
                  comprimento: values.comprimento,
                  message: values.message,
                  valor_final: values.valor_final,
                })
              }
            />
            <TextField
              type="number"
              name="comprimento"
              label="Comprimento"
              required
              style={{ marginLeft: 10, width: "100%" }}
              defaultValue={"0.00cm"}
              inputProps={{
                maxLength: 13,
                step: "0.01",
              }}
              onChange={(e) =>
                setValues({
                  name: values.name,
                  email: values.email,
                  tel: values.tel,
                  altura: values.altura,
                  comprimento: +e.target.value,
                  message: values.message,
                  valor_final: values.valor_final,
                })
              }
            />
          </Grid>
          <TextField
            type="text"
            name="message"
            label="Mensagem (opcional)"
            rows={4}
            style={{ marginTop: 10, width: "100%" }}
            multiline
            onChange={(e) =>
              setValues({
                name: values.name,
                email: values.email,
                tel: values.tel,
                altura: values.altura,
                comprimento: values.comprimento,
                message: e.target.value,
                valor_final: values.valor_final,
              })
            }
          />

          <MyBtn
            type="submit"
            onClick={(e) => handleSubmit(e)}
            disabled={
              values.name.length <= 5 ||
              values.email === "" ||
              values.tel === "" ||
              values.altura === 0.0 ||
              values.comprimento === 0.0
            }
          >
            Simular valor *
          </MyBtn>
        </FormControl>
        <Typography variant="caption" fontSize={10} color={"#a0a0a0"}>
          * Ao simular, os dados acima preenchidos serão enviados por e-mail
          para que os nossos colaboradores entrem em contato trazendo uma melhor
          experiência ao finalizar o orçamento.
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default ContactSimulation;
