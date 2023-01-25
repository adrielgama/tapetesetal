import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

import Rolos from "../../assets/images/products/carpet001.jpg";
import Carpetes from "../../assets/images/products/carpet002.jpg";

import * as S from "./styles";

const SlideProducts = () => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <S.LeftContainer>
          <h1>Carpete Vulcanizado</h1>
          <h3>100% PVC</h3>
          <p>
            Nosso capacho vínilico é indicado para quem busca um produto com
            alta durabilidade e baixo custo de manunteção. Locais com tráfego de
            pessoas, suas propriedades antiderrapante e a retenção de sujeira,
            tornam seu uso ideal e seguro em condomínios. portarias, casas,
            clínicas, escolas, lavabos, banheiros, elevadores etc
          </p>
        </S.LeftContainer>
        <S.RightContainer>
          <img src={Rolos} alt="carpete vulcanizado" />
        </S.RightContainer>
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
        <S.RightContainer>
          <img src={Carpetes} alt="carpetes vulcanizado" />
        </S.RightContainer>
        <S.LeftContainer>
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
        </S.LeftContainer>
      </Container>
    </>
  );
};

export default SlideProducts;
