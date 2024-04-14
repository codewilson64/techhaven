import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {products.map((item) => (
        <ProductsCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Products;
