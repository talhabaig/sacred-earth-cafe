import React from "react";
import priceIcon from "./../../assets/svg/price-icon.svg";
import AddBtn from "./../../components/AddBtn";
const PreviousOrder = ({ item }) => {
  return (
    <div className="flex justify-between items-center mb-[1rem] py-1">
      <div className="flex gap-3 items-center">
        <div>
          <img src={priceIcon} alt="img" />
        </div>
        <div className="flex flex-col">
          <span className="text-[14px] text-[#4A5662]">{item.name}</span>
          <span className="text-[13px]">{item.price}</span>
        </div>
      </div>
      <div className="w-[96px] text-center text-[13px]">{item.quantity}</div>
    </div>
  );
};
export default PreviousOrder;
