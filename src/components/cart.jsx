import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import clear from "../images/icon-delete.svg";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <>
      <div className=" absolute bg-white rounded-2xl w-[40%] shadow-2xl p-8 right-0 top-10">
        <h1 className="border-b border-slate-400 font-bold pb-2 mb-8">Cart</h1>
        {cart.map((product, index) => {
          console.log(product);
          return (
            <div key={index} className="flex items-center justify-between">
              <img src={product.mainImage} alt="" className="w-14" />
              <p className="flex text-GrayishBlue">{product.title}</p>
              <div>
                <p>
                  ${product.price} x {product.quantity}{" "}
                  <span className="text-DarkBlue font-bold ">
                    ${product.price * product.quantity}
                  </span>
                </p>
              </div>

              <button>
                <img src={clear} alt="" className="" />
              </button>
            </div>
          );
        })}

        <button className="flex items-center justify-center  space-x-4 bg-Orange  py-2 px-4 w-full text-center font-bold text-White rounded-lg shadow mt-5 hover:bg-orange-600 transition-all duration-200 ">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
