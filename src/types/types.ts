interface ColorsTheme {
  light_bg: string;
  dark_bg: string;
  black: string;
  white: string;
  grey: string;
  orange: string;
  brown: string;
  greyHover: string;
  orangeHover: string;
  brownHover: string;
}

interface ThemeCommons {
  typography: {
    fontFamily: {
      Roboto: string;
      Rubik: string;
    };
    weight: {
      light: number;
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
    };
    heading: {
      title: string;
      sectionTitle: string;
      sectionParagraph: string;
      buttons: string;
      paragraph: string;
    };
    link: {
      decoration: string;
      hoverDecoration: string;
    };
  };
  dropShadow: {
    filter: string;
    filterSmooth: string;
  };
  radius: {
    default: string;
    rounded: string;
    circled: string;
  };
}

export const Color: ColorsTheme = {
  light_bg: "#F9F9F9",
  dark_bg: "#010E15",
  black: "#000000",
  white: "#ffffff",
  grey: "#38444A",
  orange: "#F7941D",
  brown: "#2D1706",

  greyHover: "#132027",
  orangeHover: "#2D1706",
  brownHover: "#F7941D",
};

export const Theme: ThemeCommons = {
  typography: {
    fontFamily: {
      Roboto: "'Roboto', sans-serif",
      Rubik: "'Rubik', sans-serif",
    },
    heading: {
      title: "8.125rem",
      sectionTitle: "5rem",
      sectionParagraph: "1.1rem",
      buttons: "1.1rem",
      paragraph: "0.8rem",
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    link: {
      decoration: "none",
      hoverDecoration: "none",
    },
  },
  dropShadow: {
    filter: "drop-shadow(0px 0.5px 1.5px rgba(0, 0, 0, 0.2))",
    filterSmooth: "drop-shadow(0px 0.5px 1.5px rgba(0, 0, 0, 0.1))",
  },
  radius: {
    default: "2px",
    rounded: "5px",
    circled: "30px",
  },
};

export interface SendMailer {
  name: string;
  email: string;
  tel: string;
  altura: number;
  comprimento: number;
  message: string;
  valor_final: number;
}
