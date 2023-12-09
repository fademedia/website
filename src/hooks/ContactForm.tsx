import React, { useState, useEffect } from "react";
import { countrycodes } from "../assets/country_code";

const ContactForm = () => {
  interface CountryCode {
    name: string;
    dial_code: string;
    code: string;
  }

  interface FormData {
    name : string;
    email : string;
    country_code: string;
    phone : string;
    message : string;
  }

  const [formData, setformData] = useState({name:"",email:"",country_code:"+91",phone:"",message:""});
  const [errors, seterrors] = useState<any>({});
  const [issubmit, setissubmit] = useState(false);

  const handleChange = (e : any ) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && issubmit) {
      submitFormResponse(formData);
      setformData({name:"",email:"",country_code:"+91",phone:"",message:""});
    }
  }, [errors]);
  
  const submitFormResponse = async(resData : FormData) => {
    try {
      const url =
        "https://docs.google.com/forms/d/e/1FAIpQLSerty2b4mAmZr70NCSd3F7ZLt8GM-aZH9RaEAY3it76qstbxQ/formResponse";
      const formBody = {
        method : "POST",
        body: {
          "entry.2005620554" : resData.name,
          "entry.1045781291" : resData.email,
          "entry.1166974658" : resData.country_code + resData.phone,
          "entry.839337160" : resData.message
        }
      }
      const response = await fetch(url,formBody);
      console.log(response.status);
    } catch(err) {
      console.log(err);
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    seterrors(validate(formData));
    setissubmit(true);
  }

  const validate = (val : FormData) => {
    const errors : any = {};
    if(!val.name) {
      errors.name = "Name is required";
    }
    if(!val.email) {
      errors.email = "Email is required";
    }
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val.email))) {
      errors.email = "Enter valid email";
    }
    if(!val.phone) {
      errors.phone = "Phone number is required";
    } else if(!(/^[0-9]{7,15}$/.test(val.phone))) {
      errors.phone = "Enter valid phone number";
    }
    if(!val.message) {
      errors.message = "Message is required";
    }
    return errors;
  } 
  
  return (
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
              {`${cc.dial_code.padEnd(10, "\u00A0")} ${cc.name} (${cc.code})`}
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
  );
}

export default ContactForm;