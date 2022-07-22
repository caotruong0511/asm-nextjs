import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type SliderArrowProps = {
  onClick: () => void;
  direction?: string;
};

const SliderArrow = ({ onClick, direction }: SliderArrowProps) => {
  return (
    <button
      className={`invisible group-hover:visible w-9 h-9 absolute top-1/2 -translate-y-1/2 z-10  transition-all ease-linear duration-200 hover:bg-[#4d8a54] hover:text-white hover:border-[#4d8a54] rounded-full border-2 border-gray-400 text-gray-400 ${
        direction === "right" ? "right-6 group-hover:right-4" : "left-6 group-hover:left-4"
      }`}
      onClick={onClick}
    >
      {direction === "right" ? <FontAwesomeIcon icon={faChevronRight} /> : <FontAwesomeIcon icon={faChevronLeft} />}
    </button>
  );
};

export default SliderArrow;
