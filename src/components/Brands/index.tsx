import React from "react";
import Slider from "react-slick";

import { BrandPage } from "./styles";
import "./slick-stl.css";

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

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <BrandPage>
      <Slider {...settings}>
        {loadImages.map((data) => {
          return (
            <div>
              <img
                src={data.image}
                alt={data.text}
                // style={{ maxHeight: 121 }}
              />
            </div>
          );
        })}
      </Slider>
    </BrandPage>
    // <BrandPage>
    //   {loadImages.map((data) => {
    //     return (
    //       <div>
    //         <img src={data.image} alt={data.text} />
    //       </div>
    //     );
    //   })}
    // </BrandPage>
  );
};

export default Brand;
