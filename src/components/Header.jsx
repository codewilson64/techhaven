import React, { useState } from "react";
import { logoBlack, cart, close, menu } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Header = () => {
  const productData = useSelector((state) => state.tech.productData);

  const [toggle, setToggle] = useState(false);

  const { login, logout, isAuthenticated, isLoading } = useKindeAuth();

  return (
    <div className="max-w-[1280px] mx-auto h-24 lg:px-[140px] px-[40px]">
      <div className="flex items-center justify-between h-full">
        <Link to="/techhaven">
          <div>
            <img className="w-[135px]" src={logoBlack} alt="logoBlack" />
          </div>
        </Link>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle((prev) => !prev)} />
        </div>

        <div className="sm:flex hidden items-center gap-8">
          <ul className="flex items-center gap-8 font-normal text-[16px]">
            <Link to="/techhaven">
              <li className="font-poppins cursor-pointer">Home</li>
            </Link>
            <Link to="/shop">
              <li className="font-poppins cursor-pointer">Shop</li>
            </Link>
            <Link to="/cart">
              <li className="flex items-center gap-1">
                <img src={cart} alt="cart" />
                {!isAuthenticated && <span className="text-md">(0)</span>}
                {isAuthenticated && <span className="text-md">({productData.length})</span>}
              </li>
            </Link>
          </ul>

          {isLoading && <p>Loading...</p>}

          {!isLoading && !isAuthenticated && (
            <button onClick={login} type="button" className="flex items-center text-[16px] text-white bg-black p-6 h-4 rounded-lg">
              Log In
            </button>
          )}

          {!isLoading && isAuthenticated && (
            <>
              <button onClick={logout} type="button" className="flex items-center text-[16px] text-white bg-black p-6 h-4 rounded-lg">
                Log out
              </button>
            </>
          )}
        </div>

        <div className={`${toggle ? "flex" : "hidden"} justify-center absolute top-20 right-5 p-6 my-2 w-1/2 bg-gray-100 rounded-xl z-[5]`}>
          <ul className="flex flex-col items-center gap-8 font-normal text-[16px]">
            <Link to="/techhaven">
              <li className="font-poppins cursor-pointer">Home</li>
            </Link>
            <Link to="/shop">
              <li className="font-poppins cursor-pointer">Shop</li>
            </Link>
            <Link to="/cart">
              <li className="flex items-center gap-1">
                <img src={cart} alt="cart" />
                {!isAuthenticated && <span className="text-md">(0)</span>}
                {isAuthenticated && <span className="text-md">({productData.length})</span>}
              </li>
            </Link>
            {!isLoading && !isAuthenticated && (
              <button onClick={login} type="button" className="flex items-center text-[16px] text-white bg-black p-6 h-4 rounded-lg">
                Log In
              </button>
            )}
            {!isLoading && isAuthenticated && (
              <>
                <button onClick={logout} type="button" className="flex items-center text-[16px] text-white bg-black p-6 h-4 rounded-lg">
                  Log out
                </button>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
