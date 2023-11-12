import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer: "Yes, you can easily upgrade or downgrade your plan at any time. Simply navigate to the account settings in your dashboard and choose the desired plan. The changes will be reflected immediately, and any adjustments in pricing will be applied on your next billing cycle. Our support team is more than happy to provide guidance and recommendations.",
  },
  {
    question: "How to claim your 25% discount offer?",
    answer: "To claim your 25% discount, simply sign up for an account and enter the promotional code at checkout. The discount will be applied automatically to your purchase.",
  },
  {
    question: "What's your refund policy?",
    answer: "We offer a 30-day money-back guarantee on all our plans. If you're not satisfied with our product, simply contact our support team within 30 days of purchase for a full refund.",
  },
  {
    question: "How to get support for the product?",
    answer: "Our dedicated support team is here to help. You can reach out to us through the contact form on our website, send an email, or engage with us via live chat. We'll be happy to assist you with any questions or concerns you may have",
  },
];

export const FAQ = () => {
  const FAQBox = ({ defaultOpen, question, answer }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
      <div
        className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8 rounded-3xl bg-quillgrey custom-border-gray-darker mb-4 relative hover:bg-whiterock cursor-pointer"
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
              isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
            }`}
          >
            <path
              d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
              stroke="#4F46E5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    );
  };

  return (
    <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
      <div className="absolute -top-10" id="FAQ" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto w-11/12 sm:w-full">
          <div className="md:max-w-4xl mx-auto">
            <p className="mb-7 custom-block-subtitle text-center">
              Have any questions?
            </p>
            <h2 className="mb-16 custom-block-big-title text-center">
              Frequently Asked Questions
            </h2>
            <div className="mb-11 flex flex-wrap -m-1">
              {FAQData.map((item, index) => (
                <div className="w-full p-1" key={index}>
                  <FAQBox {...item} defaultOpen={index === 0} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
