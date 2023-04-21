import React, { useState } from "react";
import foodImg2 from "./../../assets/img/maincard.png";
import priceIcon from "./../../assets/svg/price-icon.svg";
import AddBtn from "../AddBtn";
const SelectedCard = ({ id }) => {
  const [item, setItem] = useState({
    id,
    name: "Sunrise Acai Bowl",
    price: "₹299",
    quantity: 0,
  });
  return (
    <div className="flex bg-[#F6F6F6]  items-center gap-4 w-full mb-[16px] py-[9px] px-[9px] rounded-[10px] overflow-hidden shadow-inset-sm">
      <div className="h-[71px] w-[71px]">
        <img
          className="w-full h-full object-cover rounded-[10px]"
          src={foodImg2}
          alt="food-img"
        />
      </div>
      <div className="flex flex-col justify-between w-[calc(100%-71px)]">
        <div className="flex items-center gap-[0.3rem] mb-[9px] text-[14px]">
          <span>{item.name}</span>
        </div>
        <div className="flex items-center justify-between text-[13px]">
          <div className="flex items-center gap-2">
            <img src={priceIcon} alt="img" />
            <span>{item.price}</span>
          </div>
          <AddBtn item={item} id={id} />
        </div>
      </div>
    </div>
  );
};
export default SelectedCard;
