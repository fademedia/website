import React, { useState, useEffect } from "react";

const ContactForm = () => {
  interface CountryCode {
    name: string;
    dial_code: string;
    code: string;
  }

  const [countryCode, setcountryCode] = useState<CountryCode[]>([]);
  
  const fetchDetails = async () => {
    const url =
      "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json";
    const options = {
      method: "GET",
    };

    try {
      const response = await fetch(url, options);
      const result : Array<CountryCode> = await response.json();
      setcountryCode(result);
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  
  return (
    <form
      action="#"
      method="post"
      className="flex flex-col xl:h-full justify-between w-full xl:w-3/4 text-gray-400"
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        className="bg-transparent border-b-2 h-10 outline-none focus:border-b-darkpastelblue duration-1000"
        required
      />
      {
        <div className="text-xs leading-relaxed text-red-700 font-semibold h-4">
          {false && "Enter valid name"}
        </div>
      }
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        className="bg-transparent border-b-2 h-10 outline-none focus:border-b-darkpastelblue duration-1000"
        required
      />
      {
        <div className="text-xs leading-relaxed text-red-700 font-semibold h-4">
          {false && "Enter valid Email"}
        </div>
      }
      <label htmlFor="phone">Phone</label>
      <div className="flex gap-2">
        <select
          name="country-code"
          id="country-code"
          className="w-[4.2rem] bg-transparent border-b-2 h-10 outline-none focus:border-b-darkpastelblue duration-1000"
          required
        >
          {countryCode.map((cc) => (
            <option
              className="bg-cinder text-darkpastelblue"
              selected={cc.dial_code == "+91" ? true : false}
              value={cc.dial_code}
            >
              {`${cc.dial_code.padEnd(10, "\u00A0")} ${cc.name} (${cc.code})`}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="phone"
          id="phone"
          className="w-full bg-transparent border-b-2 h-10 outline-none focus:border-b-darkpastelblue duration-1000"
          required
        />
      </div>
      {
        <div className="text-xs leading-relaxed text-red-700 font-semibold h-4">
          {false && "Enter valid Phone Number"}
        </div>
      }
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        cols={30}
        rows={5}
        className="bg-transparent border-b-2 outline-none focus:border-b-darkpastelblue duration-1000"
      ></textarea>
      <br />
      <button
        type="submit"
        className="p-3 px-4 rounded-3xl hover:bg-white hover:text-darkpastelblue text-white bg-darkpastelblue duration-500 font-Montserrat font-bold"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;