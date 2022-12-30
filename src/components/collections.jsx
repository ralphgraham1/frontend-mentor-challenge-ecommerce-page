import React, { Fragment } from "react";
import { useState } from "react";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import next from "../images/icon-next.svg";
import previous from "../images/icon-previous.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { products } from "./data";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cart-slice";

// function Lightbox({products}) {
//   return (
//     <>
//       <div className="bg-black bg-opacity-75 absolute top-0 left-0 right-0 bottom-0 z-50">
//         <div>
//           {products.map(item =>(

//           ))}
//         </div>
//       </div>

//     </>
//   );
// }

const Collections = () => {
  const products = [
    {
      id: 1,
      title: "Fall Limited Edition Sneakers",
      price: 125.0,
      mainImage: require("../images/image-product-1.jpg"),
      thumbNail: require("../images/image-product-1-thumbnail.jpg")
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
  const [amount, setAmount] = useState(1);
  const [slideIndex, setSlideIndex] = useState(1);
  const dispatch = useDispatch();

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };
  const previousSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };

  const incrementIndex = () => {
    return setAmount((amount) => {
      return amount + 1;
    });
  };

  const decrementIndex = () => {
    return setAmount((amount) => {
      return amount === 1 ? amount : amount - 1;
    });
  };

  const handleCart = (product) => {
    const newProduct = { ...product, quantity: amount };
    dispatch(addToCart(newProduct));
  };

  const { mainImage } = products[value];

  // const {cart}

  // console.log(products);
  return (
    <>
      {/* <Lightbox products={products} /> */}
      <div className="flex max-w-7xl mx-auto mt-10">
        <div>
          {/* <div>
         {products.map((item,id)=>{

         })}
        </div> */}
          <img src={mainImage} alt="" className=" h-[60%] rounded-2xl" />
          {/* <button onClick={previousSlide}>
          <img
            src={previous}
            height={20}
            width={50}
            alt=""
            className="bg-white rounded-full p-5 shadow absolute"
          />
        </button> */}
          {/* <button onClick={nextSlide}>
          <img
            src={next}
            height={20}
            width={50}
            alt=""
            className="bg-white rounded-full p-5 shadow absolute"
          />
        </button> */}
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
          <p className="text-5xl font-bold text-DarkBlue">
            Fall Limited Edition
            <br /> Sneakers
          </p>
          <p className=" text-DarkGrayishBlue">
            These low-profile sneakers are your perfect casual wear
            <br /> companion. Featuring a durable rubber outer sole, they’ll
            withstand everything the weather can offer.
          </p>

          <div className="flex flex-col items-start justify-between">
            <div className="flex items-center space-x-4">
              <p className=" font-bold text-2xl text-DarkBlue">$125.00</p>
              <p className="bg-orange-100 py-1 px-2 text-Orange text-sm font-bold inline-block rounded shadow ">
                50%
              </p>
            </div>
            <p className="text-sm text-decoration-line line-through text-GrayishBlue">
              $250.00
            </p>
          </div>
          <div className="flex mt-10 space-x-2">
            <div className="flex items-center justify-between bg-slate-100 py-2 px-2 rounded shadow w-[40%] ">
              <button onClick={() => decrementIndex()}>
                <img src={minus} alt="" height={30} width={20} />
              </button>
              <p>{amount}</p>
              <button onClick={() => incrementIndex()}>
                <img src={plus} alt="" height={30} width={20} />
              </button>
            </div>
            <div className="flex items-center justify-center  space-x-4 bg-Orange  py-2 px-4 w-full text-center font-bold text-White rounded-lg shadow mt-5 hover:bg-orange-600 transition-all duration-200 ">
              <button
                onClick={() => {
                  handleCart(products[0]);
                }}
                className="flex"
              >
                <AiOutlineShoppingCart className="w-8 h-8" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
