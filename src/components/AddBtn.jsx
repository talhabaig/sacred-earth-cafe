import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { OrderContext } from "../Contexts/Order";
const AddBtn = ({ item, id }) => {
  const { newOrder, setNewOrder } = useContext(OrderContext);

  const [isActive, setIsActive] = useState(false);
  const [itemExist, setitemExist] = useState(false);
  useEffect(() => {
    setitemExist(newOrder.find((x) => x.id == item.id));
    if (itemExist != undefined) {
      setIsActive((current) => false);
    } else {
      setIsActive((current) => true);
    }
  }, [newOrder]);
  const handleClick = (event) => {
    let itemExist = newOrder.find((x) => x.id == item.id);
    if (itemExist != undefined) {
      setNewOrder(
        newOrder.filter((x) => {
          if (x.id == itemExist.id) {
            x.quantity = x.quantity + 1;
            console.log(x);
            return x;
          }
          return x;
        })
      );

      return;
    }
    let temp = item;
    temp.quantity = 1;

    setNewOrder((pre) => [...pre, temp]);
  };
  const removeItem = () => {
    let itemExist = newOrder.find((x) => x.id == item.id);
    if (itemExist != undefined) {
      setNewOrder(
        newOrder.filter((x) => {
          if (x.id == itemExist.id) {
            x.quantity = x.quantity - 1;
            if (x.quantity == 0) {
              setIsActive((current) => true);
              return;
            }
            console.log(x);
            return x;
          }
          return x;
        })
      );

      return;
    }
  };
  return (
    <div className="flex items-center bg-offwhite cursor-pointer shadow-btn p-[4px] rounded-[10px] text-[13px]">
      <div
        className={`w-[24px] h-[24px] shadow-inset rounded-full flex items-center justify-center ${
          isActive ? "hidden" : ""
        }`}
        onClick={removeItem}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          viewBox="0 0 10 2"
          fill="none"
        >
          <path
            d="M9.28571 1.5H0.714286C0.321429 1.5 0 1.1625 0 0.75C0 0.3375 0.321429 0 0.714286 0H9.28571C9.67857 0 10 0.3375 10 0.75C10 1.1625 9.67857 1.5 9.28571 1.5Z"
            fill="#3CBCB4"
          />
        </svg>
      </div>

      <div className="w-[2.5rem] text-center">
        {itemExist == undefined
          ? item.quantity == 0
            ? "Add"
            : item.quantity
          : itemExist.quantity}
      </div>

      <div
        className={`w-[24px] h-[24px] shadow-inset rounded-full flex items-center justify-center `}
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M9.28571 5.71429H5.71429V9.28571C5.71429 9.67857 5.39286 10 5 10C4.60714 10 4.28571 9.67857 4.28571 9.28571V5.71429H0.714286C0.321429 5.71429 0 5.39286 0 5C0 4.60714 0.321429 4.28571 0.714286 4.28571H4.28571V0.714286C4.28571 0.321429 4.60714 0 5 0C5.39286 0 5.71429 0.321429 5.71429 0.714286V4.28571H9.28571C9.67857 4.28571 10 4.60714 10 5C10 5.39286 9.67857 5.71429 9.28571 5.71429Z"
            fill="#3CBCB4"
          />
        </svg>
      </div>
    </div>
  );
};
export default AddBtn;
