import React from "react";
import bannerImg from "./../../assets/img/banner.png";

const TopBanner = () => {
  return (
    <div className="w-full h-[130px] rounded-[10px] shadow-regular bg-offwhite p-[0.3rem] relative">
      <div className="bg-top-banner w-full h-full relative rounded-[10px]">
        <img
          className="w-full h-full object-cover rounded-[10px]"
          src={bannerImg}
          alt="banner-img"
        />
      </div>
      <h4 className="text-white absolute bottom-[16px] left-[19px] z-10">
        Welcome to <br /> Sacred Earth Cafe
      </h4>
    </div>
  );
};
export default TopBanner;
