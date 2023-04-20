import React from "react";
import { useState } from "react";
const AddBtn = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div onClick={handleClick} className="flex items-center bg-offwhite cursor-pointer shadow-btn p-[4px] rounded-[10px] text-[13px]">
      <div className="w-[24px] h-[24px] shadow-inset rounded-full flex items-center justify-center">
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

      <div className="w-[2.5rem] text-center">Add</div>

      <div className={`w-[24px] h-[24px] shadow-inset rounded-full flex items-center justify-center ${isActive ? 'hidden' : ''}`} >
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
