import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="font-poppins px-[5%]">
      <div className="w-full flex items-center min-h-screen bg-slate-200 bg-herobg_1 bg-cover bg-no-repeat bg-center">
        <div className="lg:leading-[75px] leading-[50px] pl-[10%]">
          <h1 className="lg:text-[60px] text-[40px] font-bold">
            Unleash Innovation <br /> in Every Byte.
          </h1>
          <p className="lg:text-[18px] text-[14px] font-normal">Explore a World of Cutting-Edge Tech</p>

          <Link to="/shop">
            <button className="flex items-center text-[16px] font-normal text-white bg-black p-6 h-4 rounded-lg mt-6">Shop Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
