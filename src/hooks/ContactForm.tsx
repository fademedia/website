import React, { useState, useEffect } from "react";
import { countrycodes } from "../assets/country_code";
import { motion } from "framer-motion";

const ContactForm = () => {
  interface CountryCode {
    name: string;
    dial_code: string;
    code: string;
  }

  interface FormData {
    name: string;
    email: string;
    country_code: string;
    phone: string;
    message: string;
  }

  const [formData, setformData] = useState({
    name: "",
    email: "",
    country_code: "+91",
    phone: "",
    message: "",
  });
  const [errors, seterrors] = useState<any>({});
  const [issubmit, setissubmit] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);

  const handleChange = (e: any) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && issubmit) {
      submitFormResponse(formData);
      setisSuccess(true);
      setissubmit(false);
      setformData({
        name: "",
        email: "",
        country_code: "+91",
        phone: "",
        message: "",
      });
    }
  }, [errors]);

  const submitFormResponse = async (resData: FormData) => {
    try {
      let bodyContent = new FormData();
      bodyContent.append("entry.2005620554", formData.name);
      bodyContent.append("entry.1045781291", formData.email);
      bodyContent.append(
        "entry.1166974658",
        `${formData.country_code} ${formData.phone}`
      );
      bodyContent.append("entry.839337160", formData.message);

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSerty2b4mAmZr70NCSd3F7ZLt8GM-aZH9RaEAY3it76qstbxQ/formResponse",
        {
          method: "POST",
          body: bodyContent,
          mode: "no-cors",
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    seterrors(validate(formData));
    setissubmit(true);
  };

  const validate = (val: FormData) => {
    const errors: any = {};
    if (!val.name) {
      errors.name = "Name is required";
    }
    if (!val.email) {
      errors.email = "Email is required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val.email)
    ) {
      errors.email = "Enter valid email";
    }
    if (!val.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9]{7,15}$/.test(val.phone)) {
      errors.phone = "Enter valid phone number";
    }
    if (!val.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  return (
    <div className="flex w-full px-10 md:px-0 md:w-1/2 xl:w-3/6 justify-center">
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col flex-wrap xl:flex-nowrap items-center justify-center border w-full h-full py-60 sm:py-0 text-center"
        >
          <div className="w-12 h-12 rounded-full bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="text-base sm:text-xl">
            Thank you for your response
          </div>
          <br />
          <input
            type="button"
            className="bg-darkpastelblue px-12 py-2 rounded-3xl font-bold cursor-pointer hover:text-darkpastelblue hover:bg-white"
            value="OK"
            onClick={() => setisSuccess(false)}
          />
        </motion.div>
      ) : (
        <div className="flex flex-wrap xl:flex-nowrap gap-x-8 items-start border px-5 py-10 sm:p-10">
          <h2 className="text-4xl lg:text-5xl mb-5 font-MerriweatherSans">
            Have Something to Say ?
          </h2>
          <br />
          <form
            action="#"
            method="post"
            onSubmit={handleSubmit}
            className="flex flex-col xl:h-full justify-between w-full xl:w-3/4 text-gray-400"
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={formData.name}
              className="bg-transparent border-b-2 h-10 outline-none focus:border-b-darkpastelblue duration-500"
              required
            />
            {
              <div className="text-xs leading-relaxed text-red-700 font-semibold h-4">
                {errors.name}
              </div>
            }
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              className="bg-transparent border-b-2 h-10 outline-none focus:border-b-darkpastelblue duration-500"
              required
            />
            {
              <div className="text-xs leading-relaxed text-red-700 font-semibold h-4">
                {errors.email}
              </div>
            }
            <label htmlFor="phone">Phone</label>
            <div className="flex gap-2">
              <select
                name="country_code"
                id="country_code"
                onChange={handleChange}
                value={formData.country_code}
                className="w-[4.2rem] bg-transparent border-b-2 h-10 outline-none focus:border-b-darkpastelblue duration-500"
                required
              >
                {countrycodes.map((cc: CountryCode, index: number) => (
                  <option
                    key={index}
                    className="bg-cinder text-darkpastelblue"
                    value={cc.dial_code}
                  >
                    {`${cc.dial_code.padEnd(10, "\u00A0")} ${cc.name} (${
                      cc.code
                    })`}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={handleChange}
                value={formData.phone}
                className="w-full bg-transparent border-b-2 h-10 outline-none focus:border-b-darkpastelblue duration-500"
                required
              />
            </div>
            {
              <div className="text-xs leading-relaxed text-red-700 font-semibold h-4">
                {errors.phone}
              </div>
            }
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={5}
              onChange={handleChange}
              value={formData.message}
              className="bg-transparent border-b-2 outline-none focus:border-b-darkpastelblue duration-500"
            ></textarea>
            {
              <div className="text-xs leading-relaxed text-red-700 font-semibold h-4">
                {errors.message}
              </div>
            }
            <button
              type="submit"
              className="p-3 px-4 rounded-3xl disabled:bg-slate-600 hover:bg-white hover:text-darkpastelblue text-white bg-darkpastelblue duration-500 font-Montserrat font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
