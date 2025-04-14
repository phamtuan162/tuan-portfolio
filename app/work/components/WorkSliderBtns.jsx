"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({
  currentIndex,
  total,
  containerStyles,
  btnStyles,
  iconsStyles,
}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        className={`${btnStyles} ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={`${btnStyles} ${
          currentIndex === total - 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
