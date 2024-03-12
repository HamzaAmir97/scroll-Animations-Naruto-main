"use client";

import React from "react";

const NarutoNinjaButton = ({
  text,
  onClick,
  className,
  padding,
  transparent,
}: {
  text: string;
  onClick?: () => void;
  className?: string;
  padding?: string;
  transparent?: boolean;
}) => {
  return (
    <div className={className || ""}>
      <button
        onClick={onClick}
        className={`relative gap-2 tracking-wide  font-semibold hover:bg-black group hover:text-white inline-flex items-center ${
          padding || "px-3 py-2"
        }  text-left  ${
          transparent ? "bg-transparent hover:bg-black  hover:text-white" : "bg-white"
        }   border-2 border-black min-h-10 duration-200`}
      >
        <div className=" leading-[18px] ">{text}</div>
        <svg
          width="26"
          height="7"
          viewBox="0 0 26 7"
          className="icon self-end ml-auto my-auto group-hover:animate-kunai group-hover:fill-white fill-black"
        >
          <path d="M16.172,7,26,3.412,16.213,0l-4,2.66H5.692A2.913,2.913,0,0,0,2.912.527,2.942,2.942,0,0,0,0,3.5,2.942,2.942,0,0,0,2.912,6.473,2.913,2.913,0,0,0,5.692,4.34h6.431ZM2.912,4.792a1.293,1.293,0,0,1,0-2.584,1.293,1.293,0,0,1,0,2.584"></path>
        </svg>
      </button>
    </div>
  );
};

export default NarutoNinjaButton;
