// ScrollUpButton.tsx
import React from "react";
import useScrollVisibility from "../hooks/useScrollVisibility";

interface ScrollUpButtonProps {}

const ScrollUpButton: React.FC<ScrollUpButtonProps> = () => {
  const isVisible = useScrollVisibility();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div
          className="w-12 h-12 fixed bottom-6 right-6 cursor-pointer flex justify-center items-center transition z-50 custom-button-colored rounded-xl "
          onClick={scrollToTop}
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 20 20"
          >
            <path
              d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
              stroke="hsl(0, 0%, 100%)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      )}
    </>
  );
};

export default ScrollUpButton;
