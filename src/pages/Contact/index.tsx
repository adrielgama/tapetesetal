import { BiMapPin } from "react-icons/bi";
import { BsPhoneVibrate } from "react-icons/bs";
import { TbMailFast } from "react-icons/tb";

import * as S from "./styles";

export const Contact = () => {
  return (
    <S.ContactPage>
      <h1>Contato</h1>
      <div>
        <S.ContactContent>
          <BiMapPin />
          <h3>Endereço</h3>
          <a
            href="https://www.google.com/maps/place/Tapetes+%26+Tal/@-12.2208015,-38.9534611,17z/data=!3m1!4b1!4m5!3m4!1s0x714384e82e44abd:0x3071487b3e913a30!8m2!3d-12.2208149!4d-38.9512706"
            target="_blank"
          >
            <p>R. Barra Avenida, 870, Mangabeira</p>
            <p>Feira de Santana, Bahia</p>
          </a>
        </S.ContactContent>
        <S.ContactContent>
          <BsPhoneVibrate />
          <h3>Telefone</h3>
          <a
            href="https://api.whatsapp.com/send?phone=5575991181035&text=Ol%C3%A1%2C%20vim%20do%20seu%20site."
            target="_blank"
          >
            <p>(75) 9 9118-1035</p>
            <span>.</span>
          </a>
        </S.ContactContent>
        <S.ContactContent>
          <TbMailFast />
          <h3>Email</h3>
          <a href="malito:contato.tapetesetal@gmail.com" target="_blank">
            <p>contato.tapetesetal@gmail.com</p>
            <span>.</span>
          </a>
        </S.ContactContent>
      </div>
    </S.ContactPage>
  );
};
