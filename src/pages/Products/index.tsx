import React from "react";
import { ProductsPage } from "./styles";
import SlideProducts from "../../components/SlideProducts/SlideProducts";

import TapetesBanner from "../../assets/images/products/tapetes.webp";

const Products = () => {
  return (
    <ProductsPage>
      <div>
        <img src={TapetesBanner} alt="tapetes banner" />
      </div>
      <h1>Produto</h1>
      <SlideProducts />
    </ProductsPage>
  );
};

export default Products;
