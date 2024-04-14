import React from "react";
import { useNavigate } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const navigate = useNavigate();

  // lower case the product name
  const id = product.name;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(id);

  // img click event and navigate to product page
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="group flex items-center justify-center bg-gray-100 ss:w-[300px] w-[250px] ss:h-[300px] h-[250px] rounded-2xl cursor-pointer mb-4">
        <div>
          <img onClick={handleDetails} src={product.image} alt="itemImg" className="w-[200px] object-cover group-hover:scale-110 duration-500" />
        </div>
      </div>

      <div className="ss:w-[300px] w-[250px]">
        <p className="font-semibold truncate ss:text-[18px] text-[14px] mb-3">{product.name}</p>
        <p className="ss:text-[16px] text-[14px]">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductsCard;
