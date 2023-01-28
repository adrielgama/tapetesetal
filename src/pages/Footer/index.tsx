import { Copyright } from "./styles";

export const Footer = () => {
  const refreshYear = new Date();
  const year = refreshYear.getFullYear();

  return (
    <>
      <Copyright>
        <span>
          Copyright NINA SOPHIA LOPES GAMA SANTOS 08239225535 -
          43.627.021/0001-44 – {year}. Todos os direitos reservados.
        </span>
        <span>
          Development by{" "}
          <a
            href="http://adrielgama.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            adrielgama.dev
          </a>
        </span>
      </Copyright>
    </>
  );
};
