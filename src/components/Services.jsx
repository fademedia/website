import React from "react"; // Import your CSS file

const Servicesdata = [
  "Social Media Marketing",
  "Content Marketing",
  "Video Marketing",
  "Influencer Marketing",
  "Search Engine Optimization (SEO)",
  "Local SEO",
  "Chatbots and AI Assistants",
  "Email Marketing",
  "Data Analytics and Marketing Automation",
  "E-commerce Marketing",
  "Social Commerce",
  "Photography",
  "Videography",
  "Professional Copywriting",
  "Web Development",
];

function Services() {
  // Function to chunk the array into groups of size 'size'
  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  // Chunk the Servicesdata into rows of 3
  const servicesRows = chunkArray(Servicesdata, 5);

  return (
      <div className="flex flex-col justify-around overflow-x-hidden py-6 sm:py-20 md:mx-2">
        <h2 className="text-5xl font-bold text-center">Our Services</h2>
        <div className="mt-44">
          {servicesRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex ${
                rowIndex % 2 == 0
                  ? "animate-marquee"
                  : "animate-marquee [animation-direction:reverse]"
              }`}
            >
              {row.map((service, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 == 0
                      ? "bg-DodgerBlue text-white"
                      : "bg-zinc-200 text-DodgerBlue"
                  } border border-DodgerBlue whitespace-nowrap rounded-full my-3 mx-2 px-6 flex items-center gap-10`}
                >
                  <div
                    className={`${
                      index % 2 == 0 ? "border-white" : "border-DodgerBlue"
                    } rounded-full border`}
                  >
                    <svg
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                        fill={`${
                          index % 2 == 0
                            ? "rgb(255,255,255)"
                            : "hsl(211 100% 50%)"
                        }`}
                      ></path>
                    </svg>
                  </div>
                  <span>{service}</span>
                </div>
              ))}
              {row.map((service, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 == 0
                      ? "bg-DodgerBlue text-white"
                      : "bg-zinc-200 text-DodgerBlue"
                  } border border-DodgerBlue whitespace-nowrap h-16 rounded-full my-4 mx-2 px-6 flex items-center gap-10`}
                >
                  <div
                    className={`${
                      index % 2 == 0 ? "border-white" : "border-DodgerBlue"
                    } rounded-full border`}
                  >
                    <svg
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                        fill={`${
                          index % 2 == 0
                            ? "rgb(255,255,255)"
                            : "hsl(211 100% 50%)"
                        }`}
                      ></path>
                    </svg>
                  </div>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
  );
}

export default Services;
