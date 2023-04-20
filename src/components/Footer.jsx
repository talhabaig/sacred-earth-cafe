import React from "react";
import boltBlack from "./../assets/svg/bolt-black.svg";
import bookOpen from "./../assets/svg/book-open.svg";
import shopingBag from "./../assets/svg/shopping-bag.svg";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bottom-bar">
      <div className="btn">
        <img src={boltBlack} alt="img" />
      </div>
      <div className="btn icon-book">
        <img src={bookOpen} alt="img" />
      </div>
      <NavLink to="/place-order">
        <div className="btn relative">
          <img src={shopingBag} alt="img" />
          <span className="flex items-center justify-center w-[16px] h-[16px] bg-[#EF4B4B] text-white text-[9px] rounded-full absolute right-[-6px] top-[-8px]">
            3
          </span>
        </div>
      </NavLink>
    </footer>
  );
};
export default Footer;
