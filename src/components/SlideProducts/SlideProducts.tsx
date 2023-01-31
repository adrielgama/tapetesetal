import Divider from "@mui/material/Divider";

import Rolos from "../../assets/images/products/carpet001.jpg";
import Carpetes from "../../assets/images/products/carpet002.jpg";

import * as S from "./styles";

const SlideProducts = () => {
  return (
    <>
      <S.Container>
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
      </S.Container>
      <Divider
        variant="middle"
        component={S.Container}
        light
        style={{
          margin: "50px 0 25px",
          width: "50%",
        }}
      />
      <S.Container>
        <S.RightContainer>
          <img src={Carpetes} alt="carpetes vulcanizado" />
        </S.RightContainer>
        <S.LeftContainer>
          <h1>Vantagens</h1>
          <S.ContentContainer>
            <div>
              <h5>✓ Antiderrapante</h5>
              <h5>✓ Antichamas</h5>
              <h5>✓ Produtos de primeira linha</h5>
              <h5>✓ Retenção de até 70% da sujeira</h5>
            </div>
            <div>
              <h5>✓ Resistência ao sol e à chuva</h5>
              <h5>✓ Facilidade na manutenção</h5>
              <h5>✓ Garantia contra defeitos de fábrica</h5>
            </div>
          </S.ContentContainer>
        </S.LeftContainer>
      </S.Container>
    </>
  );
};

export default SlideProducts;
