import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/techSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();

  const [details, setDetails] = useState({});

  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto md:flex block items-start justify-center font-poppins pt-5 px-[5%] gap-5 mb-[165px]">
      <div className="w-full md:w-[50%] md:mb-0 mb-8 flex justify-center items-center">
        <div className="bg-gray-100 flex justify-center items-center rounded-2xl w-[500px]">
          <div className="p-[50px]">
            <img src={details.image} alt="productImg" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-[50%]">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold sm:text-3xl text-lg">{details.name}</h2>
          <p className="sm:text-lg text-sm font-normal mb-4">${details.price}</p>
          <div className="leading-8">
            <h2 className="font-bold sm:text-lg text-sm mb-2">Description</h2>
            <p className="sm:text-lg text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A quos doloremque quidem, mollitia neque quod facere at illum earum consequuntur quibusdam dolor, ea voluptatum nulla sit optio dicta! Suscipit, voluptate.
            </p>
          </div>

          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: details.id,
                  name: details.name,
                  image: details.image,
                  price: details.price,
                  quantity: 1,
                })
              ) & toast.success(`${details.name} is added`)
            }
            className="bg-black text-white py-4 rounded-xl"
          >
            Add to cart
          </button>
        </div>
      </div>

      <ToastContainer position="top-left" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </div>
  );
};

export default Product;
