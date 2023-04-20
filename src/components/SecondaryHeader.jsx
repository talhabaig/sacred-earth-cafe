import React from "react";
import { NavLink  } from "react-router-dom";
const SecondaryHeader = () => {
  return (
    <div className="w-full h-[88px] bg-[#F0F3F3] rounded-b-[10px] shadow-sm px-3 py-2">
      <div className="flex justify-between">
        <div className="text-light text-[12px]">12:30</div>
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
          >
            <g opacity="0.9">
              <path
                opacity="0.9"
                d="M9.59008 15.792L18.3894 4.43799C15.8953 2.34818 12.7905 1.20886 9.5896 1.20886C6.38871 1.20886 3.28391 2.34818 0.789764 4.43799L9.59008 15.792Z"
                fill="#BBBBBB"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              opacity="0.9"
              d="M1.60031 15.792H15.6V1.20898L1.60031 15.792Z"
              fill="#BBBBBB"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              opacity="0.9"
              d="M10.6 2.25098V1.20898H7.60004V2.25098H4.60004V15.792H13.6V2.25098H10.6Z"
              fill="#BBBBBB"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-4">
          <NavLink to="/">
            <button className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15.8333 10H4.16667"
                  stroke="#4A5662"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 15.8333L4.16667 9.99999L10 4.16666"
                  stroke="#4A5662"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </NavLink>
          <span>Place Order</span>
        </div>
        <button className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_13_1347)">
              <path
                d="M16.6667 1.66666H3.33335C2.41669 1.66666 1.67502 2.41666 1.67502 3.33333L1.66669 18.3333L5.00002 15H16.6667C17.5834 15 18.3334 14.25 18.3334 13.3333V3.33333C18.3334 2.41666 17.5834 1.66666 16.6667 1.66666ZM10.8334 11.6667H9.16669V10H10.8334V11.6667ZM10.8334 8.33333H9.16669V5H10.8334V8.33333Z"
                fill="#F4B740"
              />
            </g>
            <defs>
              <clipPath id="clip0_13_1347">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default SecondaryHeader;
