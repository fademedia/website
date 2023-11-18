import React, { useEffect, useState } from "react";

interface ScrollUpButtonProps {}

const ScrollUpButton: React.FC<ScrollUpButtonProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          className="w-12 h-12 fixed bottom-6 right-6 custom-border-gray rounded-xl cursor-pointer flex justify-center items-center transition z-50 bg-sagegreen"
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
              stroke="hsl(240, 4%, 16%)"
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
