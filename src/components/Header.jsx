import React from "react";
import cafeLogo from "./../assets/img/cafeLogo.png";
import iconVoiceOver from "./../assets/svg/icon-voice-over.svg";
import iconTag from "./../assets/svg/icon-tag.svg";
const Header = () => {
  return (
    <nav className="navbar bg-blue-800">
      <div className="first-row bg-red-600 flex justify-between">
        <div className="flex items-center gap-2 fs-1">
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
      <div className="nav-tabs">
        <div>Special</div>
        <div>Main</div>
        <div>Desserts</div>
        <div>Beverages</div>
      </div>
    </nav>
  );
};
export default Header;
