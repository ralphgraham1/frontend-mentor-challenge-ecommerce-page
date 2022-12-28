import React, { Fragment } from "react";
import { useState } from "react";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Collections = () => {
  const products = [
    {
      id: 1,
      mainImage: require("../images/image-product-1.jpg"),
      thumbNail: require("../images/image-product-1-thumbnail.jpg"),
    },
    {
      id: 2,
      mainImage: require("../images/image-product-2.jpg"),
      thumbNail: require("../images/image-product-2-thumbnail.jpg"),
    },
    {
      id: 3,
      mainImage: require("../images/image-product-3.jpg"),
      thumbNail: require("../images/image-product-3-thumbnail.jpg"),
    },
    {
      id: 4,
      mainImage: require("../images/image-product-4.jpg"),
      thumbNail: require("../images/image-product-4-thumbnail.jpg"),
    },
  ];

  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);

  const { mainImage } = products[value];

  console.log(products);
  return (
    <div className="flex max-w-7xl mx-auto mt-10">
      <div>
        <img src={mainImage} alt="" className=" h-[80%] rounded-2xl" />
        <div className="flex ">
          {products.map((item, id) => {
            return (
              <div
                key={item.id}
                className=" flex flex-row  items-center justify-start space-x-3 m-2 cursor-pointer"
              >
                <div
                  onClick={() => setValue(id)}
                  // className="flex cursor-pointer"
                  className={`${
                    id === value && "border-2 border-Orange opacity-60"
                  } border-2 border-transparent rounded-2xl`}
                >
                  <img
                    src={item.thumbNail}
                    alt=""
                    className="flex rounded-2xl overflow-hidden w-20"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" m-6 space-y-6 ">
        <h1 className="text-Orange uppercase">Sneaker Company</h1>
        <p className="text-5xl font-bold">
          Fall Limited Edition
          <br /> Sneakers
        </p>
        <p className=" text-DarkGrayishBlue">
          These low-profile sneakers are your perfect casual wear
          <br /> companion. Featuring a durable rubber outer sole, they’ll
          withstand everything the weather can offer.
        </p>
        <div>
          <div className="flex space-x-6">
            <p className="text-2xl font-bold">$125.00</p>
            <p className="bg-orange-100 py-1 px-2 text-Orange text-sm font-bold inline-block rounded shadow mb-10">50%</p>
          </div>
          <p className=" text-decoration-line line-through">$250.00</p>
        </div>
        <div>
          <button>
            <img src={minus} alt=""></img>
          </button>
          {/* <p>{number}</p> */}
          <button>
            <img src={plus} alt=""></img>
          </button>

          <button className="flex">
            <AiOutlineShoppingCart />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;