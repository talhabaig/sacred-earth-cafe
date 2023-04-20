import React, { useState } from "react";
import foodImg2 from "./../../assets/img/food-card2.jpg";
import priceIcon from "./../../assets/svg/price-icon.svg";
import AddBtn from "../AddBtn";
const FoodCard = ({ id }) => {
  const [item, setItem] = useState({
    id,
    name: "Chocolate Bowl",
    price: "₹299",
    quantity: 0,
  });
  return (
    <div className="bg-[#F6F6F6] flex w-[49%] mb-[16px] flex-col rounded-[10px] overflow-hidden shadow-inset-sm">
      <div className="h-[128px] w-full">
        <img
          className="w-full h-full object-cover"
          src={foodImg2}
          alt="food-img"
        />
      </div>
      <div className="p-[8px] flex flex-col">
        <div className="flex items-center gap-[0.3rem] mb-[9px] text-[14px]">
          <div>
            <img src={priceIcon} alt="img" />
          </div>
          <span>{item.name}</span>
        </div>
        <div className="flex items-center justify-between text-[13px]">
          <span>{item.price}</span>
          <AddBtn item={item} id={id} />
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
