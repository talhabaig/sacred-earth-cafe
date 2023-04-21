import React from "react";
import CurrentItem from "../components/CurrentItem";
import FoodCard from "../components/Special/FoodCard";
import TopBanner from "../components/Special/TopBanner";
const Special = () => {
  return (
    <main>
      <TopBanner />
      <div className="mt-[31px]">
        <CurrentItem content="Today’s Special" />
      </div>
      <div className="flex justify-between flex-wrap">
        <FoodCard id={1} />
        <FoodCard id={2} />
        <FoodCard id={3} />
        <FoodCard id={4} />
      </div>
    </main>
  );
};
export default Special;
