import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import Lottie from "lottie-react";
import one from "../assets/lottie/one.json";
import two from "../assets/lottie/two.json";
import three from "../assets/lottie/three.json";
import four from "../assets/lottie/four.json";

export const Features1 = () => {
  return (
    <section
      className="w-full pt-10 mb-8 sm:mb-16 xl:mt-0 text-white" // Set background color to black and text color to white
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <h2 className="custom-block-big-title text-center font-bold w-full">
            What we do ?
          </h2>
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                Unveiling Possibilities, Defining Excellence
              </h2>
              <p className="mb-10 text-customGrayText leading-loose">
                Navigating Boundaries, Shaping Tomorrow, Where Transformative
                Innovation Meets Digital Brilliance, Crafting the Present,
                Defining the Future, One Breakthrough at a Time.
              </p>
              <ul className="mb-6 custom-content-text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Innovative Architects</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Empowering Education</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Diverse Perspectives, Data-Driven Excellence</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div
                className="mb-4 py-3 pl-3 pr-2 rounded"
                style={{ zIndex: 2 }}
              >
                <Lottie animationData={four} />
              </div>
              <div className="py-3 pl-3 pr-2 rounded" style={{ zIndex: 1 }}>
                <Lottie animationData={three} />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div
                className="mb-4 py-3 pl-3 pr-2 rounded-lg"
                style={{ zIndex: 4 }}
              >
                <Lottie animationData={two} />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg" style={{ zIndex: 3 }}>
                <Lottie animationData={one} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
