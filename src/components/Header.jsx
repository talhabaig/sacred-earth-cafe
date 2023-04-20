import React from "react";
import cafeLogo from "./../assets/img/cafeLogo.png";
import iconVoiceOver from "./../assets/svg/icon-voice-over.svg";
import iconTag from "./../assets/svg/icon-tag.svg";
import { NavLink  } from "react-router-dom";
const Header = () => {
  return (
    <header className="navbar">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="cafelogo">
            <img src={cafeLogo} alt="logo" />
          </div>
          <span>Sacred Earth Cafe</span>
        </div>
        <div className="flex gap-3">
          <div className="btn">
            <img src={iconVoiceOver} alt="img" />
          </div>
          <div className="btn">
            <img src={iconTag} alt="img" />
          </div>
        </div>
      </div>
      <nav className="mt-5">
        <ul className="grid grid-cols-4 text-center text-light text-sm nav-tabs">
          <NavLink  to="/">
            <li className="py-3 cursor-pointer">Special</li>
          </NavLink>
          <NavLink  to="/main">
            <li className="py-3 cursor-pointer">Main</li>
          </NavLink>
          <li className="py-3 cursor-pointer">Desserts</li>
          <li className="py-3 cursor-pointer">Beverages</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
