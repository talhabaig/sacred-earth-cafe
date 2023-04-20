import React, { useContext } from "react";
import BtnPlaceOrder from "../components/PlaceOrder/BtnPlaceOrder";
import SecondaryHeader from "../components/SecondaryHeader";
import CurrentItem from "../components/CurrentItem";
import CurrentOrder from "../components/PlaceOrder/CurrentOrder";
import PreviousOrder from "../components/PlaceOrder/PreviousOrder";
import { OrderContext } from "../Contexts/Order";
const PlaceOrder = () => {
  const { newOrder, previousOrder } = useContext(OrderContext);
  return (
    <div className="main-container bg-[#F5F5F5]">
      <SecondaryHeader />
      <main className="place-order">
        <div className="mt-2">
          <CurrentItem content="Current order" />
        </div>
        <div className="w-full shadow-lg py-[16px] px-[.6rem] rounded-[10px]">
          {newOrder.map((x, i) => {
            return <CurrentOrder item={x} key={i} />;
          })}

          <div className="text-[#76DFE5] text-[12px] underline py-1">
            Add cooking instruction
          </div>
        </div>
        <div className="mt-[20px]">
          <CurrentItem content="Previous order" />
        </div>
        <div className="w-full shadow-lg py-[16px] px-[.6rem] rounded-[10px]">
          {previousOrder.reverse().map((x, i) => {
            return <PreviousOrder item={x} key={i} />;
          })}

          <div className="text-[#76DFE5] text-[12px] underline py-1">
            Add cooking instruction
          </div>
        </div>
        <BtnPlaceOrder />
      </main>
    </div>
  );
};
export default PlaceOrder;
