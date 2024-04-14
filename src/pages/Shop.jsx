import React, { useEffect, useState } from "react";
// import { products } from "../constants";
import { useLoaderData } from "react-router-dom";
import Products from "../components/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <section id="shop" className="font-poppins px-[10%] py-[5%]">
      <Products products={products} />
    </section>

    // <section id="shop" className="font-poppins px-[10%] py-[5%]">
    //   <div className="flex flex-wrap items-center justify-center gap-10">
    //     {products.map((item) => (
    //       <>
    //         <div key={item.id}>
    //           <div className="group flex items-center justify-center w-[350px] h-[350px] bg-gray-100 rounded-2xl cursor-pointer mb-4">
    //             <div className="p-[50px]">
    //               <img src={item.icon} alt="itemImg" className="w-full group-hover:scale-110 duration-500" />
    //             </div>
    //           </div>

    //           <div className="w-[300px]">
    //             <p className="font-semibold truncate text-[18px] mb-3">{item.name}</p>
    //             <p className="text-[16px]">${item.price}</p>
    //           </div>
    //         </div>
    //       </>
    //     ))}
    //   </div>
    // </section>
  );
};

export default Shop;
