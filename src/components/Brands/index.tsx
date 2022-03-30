import React from "react";

import { BrandPage } from "./styles";

import BB from "../../assets/images/bb.png";
import Incardio from "../../assets/images/incardio.png";
import Kairos from "../../assets/images/kairos.png";
import LMarquezzo from "../../assets/images/lmarquezzo.png";
import Mendel from "../../assets/images/mendel.png";
import Sicoob from "../../assets/images/sicoob.png";
import Smartfit from "../../assets/images/smartfit.png";
import Subway from "../../assets/images/subway.png";
import Tabajara from "../../assets/images/tabajara.png";
import Unimed from "../../assets/images/unimed.png";

const Brand = () => {
  const loadImages = [
    {
      image: BB,
      text: "BB",
    },
    {
      image: Incardio,
      text: "Incardio",
    },
    {
      image: Kairos,
      text: "Kairos",
    },
    {
      image: LMarquezzo,
      text: "LMarquezzo",
    },
    {
      image: Mendel,
      text: "Mendel",
    },
    {
      image: Sicoob,
      text: "Sicoob",
    },
    {
      image: Smartfit,
      text: "Smartfit",
    },
    {
      image: Subway,
      text: "Subway",
    },
    {
      image: Tabajara,
      text: "Tabajara",
    },
    {
      image: Unimed,
      text: "Unimed",
    },
  ];

  return (
    <BrandPage>
      {loadImages.map((data) => {
        return (
          <div>
            <img src={data.image} alt={data.text} />
          </div>
        );
      })}
    </BrandPage>
  );
};

export default Brand;
