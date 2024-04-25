import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state) => state.tech.productData);

  const [totalAmt, setTotalAmt] = useState("");

  const { isAuthenticated } = useKindeAuth();

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt * 100,
      token: token,
    });
  };

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  if (!isAuthenticated) {
    return (
      <div className="w-full h-screen">
        <h1 className="md:text-3xl text-xl font-semibold text-center pt-8">Please login to see your cart.</h1>
      </div>
    );
  }

  if (isAuthenticated) {
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

              {/* <button className="sm:w-full w-[200px] mx-auto bg-black text-white rounded-xl py-4 sm:text-lg text-[12px]">Checkout</button> */}
              <div className="w-full flex items-center justify-center">
                <StripeCheckout
                  className="w-[100px]"
                  stripeKey="pk_test_51P1KReDkFfo1V2OX37lBUiAR5FoyBoIExiHbv7J2086ZbE3XLaDJnLPOeSAmWl29zUFXHn4PaS7R6hwTVeViY3fq008MUmYEQk"
                  name="Ecommerce Shop"
                  amount={totalAmt * 100}
                  label="Pay now"
                  description={`Your payment amount is $${totalAmt}`}
                  token={payment}
                  // email={userInfo.email}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Cart;
