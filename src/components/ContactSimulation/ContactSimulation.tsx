import * as React from "react";
import emailjs from "@emailjs/browser";
import { Box, TextField, Button, FormControl, Grid } from "@mui/material";
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

const userID = "jhefrXBSVihCMXbGk";
const serviceID = "service_nbptw95";
const templateID = "template_n2wxk9d";

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

  emailjs.init("jhefrXBSVihCMXbGk");

  React.useEffect(() => {
    const final = values.altura * values.comprimento * 530.0;
    // const floatFinal = parseFloat(final.toFixed(2));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <FormControl fullWidth variant="outlined" style={{ marginTop: 10 }}>
          <TextField
            type="text"
            name="name"
            label="Nome"
            required
            style={{ marginTop: 10 }}
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
            style={{ marginTop: 10 }}
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
            style={{ marginTop: 10 }}
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
              defaultValue={"0.00"}
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
              // style={{ margin: "0 10px" }}
              style={{ marginLeft: 10, width: "100%" }}
              defaultValue={"0.00"}
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
            {/* <Grid>
              <Typography variant="h4" component="h2">
                R$ {values.valor_final && `${parseFloat(values.valor_final).toFixed(2)}`}
              </Typography>
            </Grid> */}
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

          <Button
            type="submit"
            style={{ marginTop: 10 }}
            onClick={(e) => handleSubmit(e)}
          >
            Simular valor
          </Button>
        </FormControl>
      </Box>
    </React.Fragment>
  );
};

export default ContactSimulation;
