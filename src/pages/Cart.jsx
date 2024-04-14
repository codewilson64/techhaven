import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const productData = useSelector((state) => state.tech.productData);

  const [totalAmt, setTotalAmt] = useState("");

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  return (
    <section className="max-w-[1280px] mx-auto mb-[110px]">
      <div className="max-w-[700px] xl:mx-0 mx-auto xl:px-[140px] px-[24px]">
        <h2 className="md:text-3xl text-xl font-bold">Cart</h2>
      </div>
      <div className="w-full xl:flex block xl:px-[140px] px-[24px] py-10">
        <CartItem />

        <div className="max-w-[700px] mx-auto xl:w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6">
            <h2 className="sm:text-xl text-[12px] font-bold">Summary</h2>
            <hr />
            <p className="flex items-center justify-between sm:text-lg text-[12px] font-normal gap-4">
              Subtotal
              <span>${totalAmt}</span>
            </p>
            <hr />

            <p className="flex items-center justify-between sm:text-xl text-[12px] font-bold">
              Total
              <span>${totalAmt}</span>
            </p>
            <hr />

            <button className="sm:w-full w-[200px] mx-auto bg-black text-white rounded-xl py-4 sm:text-lg text-[12px]">Login to checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
