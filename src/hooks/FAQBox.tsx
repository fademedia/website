import React, { useState } from "react";

interface FAQBoxProps {
  defaultOpen: boolean;
  question: string;
  answer: string;
}

const FAQBox: React.FC<FAQBoxProps> = ({ defaultOpen, question, answer }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col px-4">
      <div>
        <button
          className="w-full flex justify-between items-center focus:outline-none transition-all duration-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h1 className="mx-4 text-xl text-left text-darkpastelblue">{question}</h1>
          {isOpen ? (
            <svg
              className="flex-shrink-0 w-6 h-6 text-[#7b7997]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-6 h-6 text-[#7b7997]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          )}
        </button>
        <div
          className={`${
            isOpen ? "max-h-96 mt-8" : "max-h-0"
          } flex md:mx-10 overflow-hidden transition-all duration-300`}
        >
          <p className={`max-w-3xl px-4 text-gray-500 dark:text-gray-300`}>
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQBox;

