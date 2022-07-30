import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import logoImg from "../assets/images/logoBlack.png";

const Header = () => {
  return (
    <div className="w-full bg-primary border-b-2 border-black top-0 sticky">
      <div className="max-w-7xl mx-auto h-20 flex justify-between font-titleFont font-semibold">
        <div className="flex justify-between  items-center">
          <div>
            <img className="w-56" src={logoImg} alt="logo" />
          </div>
          <div>
            <ul className="flex justify-evenly gap-2">
              <li className="link">Home</li>
              <li className="link">Services</li>
              <li className="link">Products</li>
              <li className="link">Components</li>
              <li className="link">Contacts</li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <ul className="flex items-center justify-between gap-10">
            <li className="link">Demos</li>
            <li className="purchaseLink">
              <span className=" left-2">
                <FaShoppingCart />
              </span>
              Purchase
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
