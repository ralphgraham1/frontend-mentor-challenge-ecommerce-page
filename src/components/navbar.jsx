import React from "react";
import { Link } from "react-router-dom";
import { URLS } from "./../constants/route-links";
import cart from ".././images/icon-cart.svg";
import avatar from ".././images/image-avatar.png";
import logo from "../images/logo.svg";
import Cart from "./cart";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center  max-w-7xl mx-auto">
      <nav className="w-[80%]  py-6 border-b-2  ">
        <div className="flex relative  items-center justify-between">
          <div className=" flex justify-center items-center space-x-10 pb-6 ">
            <Link
              to={URLS.collections.url}
              className="font-bold text-2xl text-Black "
            >
              <img src={logo} alt=""></img>
            </Link>
            <div className=" text-DarkGrayishBlue space-x-6">
              <Link
                to={URLS.collections.url}
                className="  hover:border-b-Orange border-b-4 border-transparent pb-6 select-none ease-in-out durarion-300"
              >
                Collections
              </Link>
              <Link
                to={URLS.men.url}
                className="  hover:border-b-Orange border-b-4 border-transparent pb-6 select-none ease-in-out durarion-300"
              >
                Men
              </Link>
              <Link
                to={URLS.women.url}
                className="  hover:border-b-Orange border-b-4 border-transparent pb-6 select-none ease-in-out durarion-300"
              >
                Women{" "}
              </Link>
              <Link
                to={URLS.about.url}
                className="  hover:border-b-Orange border-b-4 border-transparent pb-6 select-none ease-in-out durarion-300"
              >
                About
              </Link>
              <Link
                to={URLS.contact.url}
                className="  hover:border-b-Orange border-b-4 border-transparent pb-6 select-none ease-in-out durarion-300"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className=" flex items-start space-x-3">
            <a>
              <img src={cart} className=" w-10" alt=""></img>
            </a>
            <p>
              <Cart />
            </p>
            <a>
              <img src={avatar} alt="" className="w-10"></img>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
