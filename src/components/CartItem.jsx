import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { trash } from "../assets/index";
import { decrementQuantity, deleteItem, incrementQuantity } from "../redux/techSlice";
import { ToastContainer, toast } from "react-toastify";

const CartItem = () => {
  const productData = useSelector((state) => state.tech.productData);

  const dispatch = useDispatch();

  return (
    <div className="w-full xl:w-2/3 xl:pr-10 pr-0 xl:mb-0 mb-5">
      <div className="max-w-[700px] mx-auto">
        {productData.map((item) => (
          <div key={item.id}>
            <div className="flex items-center justify-between sm:gap-4 gap-3 mb-3">
              <img src={item.image} alt="productImg" className="sm:w-[65px] ss:w-[50px] w-[40px] object-cover" />

              <div className="w-[300px]">
                <h2 className="ss:text-[14px] text-[10px] font-bold">{item.name}</h2>
                <p className="ss:text-[14px] text-[10px]">${item.price}</p>
              </div>

              {/*Quantity box in large devices*/}
              <div className="w-[100px] h-[38px] md:flex hidden items-center justify-center gap-3 border border-black rounded-lg">
                <button
                  onClick={() =>
                    dispatch(
                      decrementQuantity({
                        id: item.id,
                        name: item.name,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                      })
                    )
                  }
                  className="flex items-center justify-center text-2xl p-2 cursor-pointer"
                >
                  -
                </button>
                <span className="text-black font-semibold">{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      incrementQuantity({
                        id: item.id,
                        name: item.name,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                      })
                    )
                  }
                  className="flex items-center justify-center text-xl p-2 cursor-pointer"
                >
                  +
                </button>
              </div>

              <p className="w-[70px] text-center ss:text-[14px] text-[10px] font-normal">${item.quantity * item.price}</p>

              <img onClick={() => dispatch(deleteItem(item.id)) & toast.error(`${item.name} is removed`)} src={trash} alt="trash" className="w-[13px] ss:w-[20px] cursor-pointer" />
            </div>

            {/*Quantity box in small devices*/}
            <div className="flex justify-end mb-4">
              <div className="ss:w-[70px] w-[50px] ss:h-[30px] h-[20px] md:hidden flex items-center justify-center ss:gap-3 gap-2 border border-black rounded-md">
                <button
                  onClick={() =>
                    dispatch(
                      decrementQuantity({
                        id: item.id,
                        name: item.name,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                      })
                    )
                  }
                  className="flex items-center justify-center ss:text-[15px] text-[12px] cursor-pointer"
                >
                  -
                </button>
                <span className="text-black ss:text-[15px] text-[9px] font-semibold">{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      incrementQuantity({
                        id: item.id,
                        name: item.name,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                      })
                    )
                  }
                  className="flex items-center justify-center ss:text-[15px] text-[12px] cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer position="top-left" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </div>
  );
};

export default CartItem;
