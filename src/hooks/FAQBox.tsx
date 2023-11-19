import React, { useState } from "react";

interface FAQBoxProps {
  defaultOpen: boolean;
  question: string;
  answer: string;
}

const FAQBox: React.FC<FAQBoxProps> = ({ defaultOpen, question, answer }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8 rounded-3xl bg-white custom-border-gray-darker mb-4 relative hover:bg-whiterock cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2 justify-center items-start">
        <h3 className="custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {question}
        </h3>
        <p
          className={`text-zinc-700 pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {answer}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500 ${
            isOpen ? "rotate-[360deg]" : "rotate-[180deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FAQBox;
