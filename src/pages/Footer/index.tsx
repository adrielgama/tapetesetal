import { Copyright } from "./styles";

export const Footer = () => {
  const refreshYear = new Date();
  const year = refreshYear.getFullYear();

  return (
    <>
      <Copyright>
        Copyright TAPETES E TAL - 28.709.828/0001-32 – {year}. Todos os direitos
        reservados.
      </Copyright>
    </>
  );
};
