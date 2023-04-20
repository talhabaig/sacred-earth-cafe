import React from "react";
import CurrentItem from "../components/CurrentItem";
import FoodCard from "../components/Special/FoodCard";
import TopBanner from "../components/Special/TopBanner";
const Special = () => {
  return (
    <main>
      <TopBanner />
      <div className="mt-[31px]">
      <CurrentItem />
      </div>
      <div className="flex justify-between flex-wrap">
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      </div>
    </main>
  );
};
export default Special;
