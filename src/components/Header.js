import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { GiTireIronCross } from "react-icons/gi";
import logoImg from "../assets/images/logoBlack.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1001,
      title: "home",
      link: "/",
    },
    {
      id: 1002,
      title: "about",
      link: "/about",
    },
    {
      id: 1003,
      title: "projects",
      link: "/projects",
    },
    {
      id: 1004,
      title: "experience",
      link: "/experience",
    },
    {
      id: 1005,
      title: "contact",
      link: "/contact",
    },
  ];
  return (
    <div className="w-full bg-primary border-b-2 border-black top-0 sticky">
      <div className="max-w-7xl mx-auto h-20 flex justify-between font-titleFont font-semibold">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-56" src={logoImg} alt="logo" />
          </div>

          <div>
            <ul className="hidden md:inline-flex gap-6">
              {links.map(({ id, title, link }) => (
                <div
                  key={id}
                  className="justify-evenly gap-2 hidden lg:inline-flex "
                >
                  <Link to={link}>
                    <li className="link">{title}</li>
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex">
          <ul className=" items-center justify-between gap-10 hidden md:inline-flex">
            <li className="link">Demos</li>
            <li className="purchaseLink">
              <span className=" left-2">
                <FaShoppingCart />
              </span>
              Purchase
            </li>
          </ul>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer md:hidden pr-4 z-10 flex items-center "
          >
            {nav ? (
              <GiTireIronCross className="animate-pulse " size={30} />
            ) : (
              <AiOutlineMenuUnfold size={35} />
            )}
          </div>
        </div>
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 w-full left-0 h-96 bg-primary">
          {links.map(({ id, title, link }) => (
            <div key={id} className="w-auto h-auto mb-4">
              <Link to={link}>
                <li
                  onClick={() => setNav(!nav)}
                  className="px-4 cursor-pointer w-40 text-center border-[2px] border-gray-100 hover:border-gray-500 text-gray-900 font-titleFont font-medium hover:text-gray-900 capitalize py-2 text-[22px] duration-300"
                >
                  {title}
                </li>
              </Link>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
