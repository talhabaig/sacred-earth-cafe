import React from "react";
import priceIcon from "./../../assets/svg/price-icon.svg";
import AddBtn from "./../../components/AddBtn";
const PreviousOrder = () => {
  return (
    <div className="flex justify-between items-center mb-[1rem] py-1">
      <div className="flex gap-3 items-center">
        <div>
          <img src={priceIcon} alt="img" />
        </div>
        <div className="flex flex-col">
          <span className="text-[14px] text-[#4A5662]">Sunrise Acai Bowl</span>
          <span className="text-[13px]">₹299</span>
        </div>
      </div>
      <div>
        <AddBtn />
      </div>
    </div>
  );
};
export default PreviousOrder;
