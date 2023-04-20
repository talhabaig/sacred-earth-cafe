import React from "react";
import foodImg2 from "./../../assets/img/food-card2.jpg";
import priceIcon from "./../../assets/svg/price-icon.svg";
import AddBtn from "../AddBtn";
const SelectedCardNoImg = () => {
  return (
    <div className="flex bg-[#F6F6F6]  items-center gap-4 w-full mb-[16px] py-[9px] px-[9px] rounded-[10px] overflow-hidden shadow-inset-sm">
      <div className="flex flex-col justify-between w-full pl-1">
        <div className="flex items-center gap-[0.3rem] mb-[9px] text-[14px]">
          <span>Sunrise Acai Bowl</span>
        </div>
        <div className="flex items-center justify-between text-[13px]">
          <div className="flex items-center gap-2">
            <img src={priceIcon} alt="img" />
            <span>₹299</span>
          </div>
          <AddBtn />
        </div>
      </div>
    </div>
  );
};
export default SelectedCardNoImg;
