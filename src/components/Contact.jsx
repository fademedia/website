import React from 'react'

export const Contact = () => (
  <div id="contact" className="flex flex-col items-center pt-20 mb-12">
    <div className="px-9 md:px-12 bg-whiterock pb-10 rounded-lg shadow-xl">
      <h2 className="pt-10 mb-5 custom-block-big-title text-center">
        Contact Us
      </h2>
      <div className="mx-auto lg:w-[500px] max-w-[500px]">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-stone-800"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-stone-800 outline-none focus:border-sagegreen focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-stone-800"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-stone-800 outline-none focus:border-sagegreen focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-3 block text-base font-medium text-stone-800"
            >
              Phone Number
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter Phone Number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-stone-800 outline-none focus:border-sagegreen focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-stone-800"
            >
              Message
            </label>
            <textarea
              rows={4}
              name="message"
              id="message"
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-stone-800 outline-none focus:border-sagegreen focus:shadow-md"
              defaultValue={""}
            />
          </div>
          <div>
            <button className="hover:shadow-form rounded-md custom-button-colored py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
