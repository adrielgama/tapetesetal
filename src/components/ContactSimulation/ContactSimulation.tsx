import * as React from "react";
// import { IMaskInput } from "react-imask";
import emailjs from "@emailjs/browser";
import { Box, TextField, Button, FormControl, Grid } from "@mui/material";
import axios from "axios";

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

const token = "QWldgAKOOwrYfij_7MTGJ";
const userID = "jhefrXBSVihCMXbGk";
const serviceID = "service_nbptw95";
const templateID = "template_n2wxk9d";

const ContactSimulation = () => {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    tel: "",
    altura: 0.0,
    comprimento: 0.0,
    message: "",
    valor_final: 0.0,
  });
  const [status, setStatus] = React.useState("");

  emailjs.init("jhefrXBSVihCMXbGk");

  React.useEffect(() => {
    const final = values.altura * values.comprimento * 530.0;
    const floatFinal = parseFloat(final.toFixed(1));

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

  // React.useEffect(() => {
  //   var data = {
  //     accessToken: token,
  //     user_id: userID,
  //     service_id: serviceID,
  //     template_id: templateID,
  //     template_params: JSON.stringify(values),
  //   };

  //   window.sessionStorage.setItem(
  //     "@data",
  //     JSON.stringify(data.template_params)
  //   );
  // }, [values]);

  const handleSubmit = () => {
    var data = {
      accessToken: token,
      user_id: userID,
      service_id: serviceID,
      template_id: templateID,
      template_params: {
        name: values.name,
        email: values.email,
        tel: values.tel,
        altura: JSON.stringify(values.altura),
        comprimento: JSON.stringify(values.comprimento),
        message: values.message,
        valor_final: JSON.stringify(values.valor_final),
      },
    };

    axios.post("https://api.emailjs.com/api/v1.0/email/send", {
      header: { "Content-Type": "application/json" },
      data,
    });
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
          onSubmit={handleSubmit}
          style={{ marginTop: 10 }}
        >
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

          <Button type="submit" style={{ marginTop: 10 }}>
            Simular valor
          </Button>
        </FormControl>
      </Box>
    </React.Fragment>
  );
};

export default ContactSimulation;
