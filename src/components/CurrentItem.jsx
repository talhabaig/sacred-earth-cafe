import React from "react";
import { useState } from "react";
const CurrentItem = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div
      className="flex items-center mb-[18px] cursor-pointer"
      onClick={handleClick}
    >
      <div className="text-[14px]">{props.content}</div>
      <hr className="mx-[0.5rem] flex-auto bg-primary" />
      <div className="w-[20px] h-[20px] flex items-center justify-center">
        <svg
          className={isActive ? "rotate-[180deg] transition-all duration-500" : "transition-all duration-500"}
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
        >
          <path
            d="M7.28995 3.29L4.69995 0.700002C4.30995 0.310002 3.67995 0.310002 3.28995 0.700002L0.699949 3.29C0.0699487 3.92 0.519949 5 1.40995 5L6.58995 5C7.47995 5 7.91995 3.92 7.28995 3.29Z"
            fill="#3CBCB4"
          />
        </svg>
      </div>
    </div>
  );
};
export default CurrentItem;
