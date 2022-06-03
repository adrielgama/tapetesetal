import React from "react";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { LeftContainer, RightContainer } from "./styles";

import Rolos from "../../assets/images/products/carpet001.jpg";
import Carpetes from "../../assets/images/products/carpet002.jpg";

const SlideProducts = () => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <LeftContainer>
          <h1>Carpete Vulcanizado</h1>
          <h3>100% PVC</h3>
          <p>
            Nosso capacho vínilico é indicado para quem busca um produto com
            alta durabilidade e baixo custo de manunteção. Locais com tráfego de
            pessoas, suas propriedades antiderrapante e a retenção de sujeira,
            tornam seu uso ideal e seguro em condomínios. portarias, casas,
            clínicas, escolas, lavabos, banheiros, elevadores etc
          </p>
        </LeftContainer>
        <RightContainer>
          <img src={Rolos} alt="carpete vulcanizado" />
        </RightContainer>
      </Container>
      <Divider
        variant="middle"
        component={Container}
        light
        style={{
          margin: "50px 0 25px",
          width: "50%",
        }}
      />
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <RightContainer>
          <img src={Carpetes} alt="carpetes vulcanizado" />
        </RightContainer>
        <LeftContainer>
          <h1>Vantagens</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            //   alignItems: "center",
              marginTop: 20,
            }}
          >
            <div>
              <h5>✓ Antiderrapante</h5>
              <h5>✓ Anti-chamas</h5>
              <h5>✓ Qualidade Superior</h5>
              <h5>✓ Retém até 70% de sujeira</h5>
            </div>
            <div>
              <h5>✓ Resistente a sol e chuva</h5>
              <h5>✓ Fácil Manunteção</h5>
              <h5>✓ Garantia a defeitos de fábrica</h5>
            </div>
          </div>
        </LeftContainer>
      </Container>
    </>
  );
};

export default SlideProducts;
