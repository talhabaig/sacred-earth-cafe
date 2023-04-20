import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../Contexts/Order";
const BtnPlaceOrder = () => {
  const navigate = useNavigate();
  const { newOrder, setNewOrder, setPreviousOrder } = useContext(OrderContext);
  return (
    <button
      onClick={() => {
        setPreviousOrder((pre) => [...newOrder, ...pre]);
        setNewOrder([]);
        navigate("/");
      }}
      className="fixed bottom-[33px] left-[50%] translate-x-50  w-full flex items-center text-white pl-[16px] rounded-[10px] p-[8px] justify-between btn-place-order"
    >
      <span className="text-[12px]">4 Items</span>
      <div className="flex items-center gap-3">
        <span className="text-[13px] bold  tracking-[2px]">Place Order</span>
        <div className="btn bg-transparent rounded-full btn-place-order-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.33331 8H12.6666"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 3.33334L12.6667 8.00001L8 12.6667"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </button>
  );
};
export default BtnPlaceOrder;
