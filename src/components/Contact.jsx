import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [capVal, setCapVal] = useState();

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_7qjwj9j',
        'template_wti5lcw',
        {
          from_name: form.name,
          to_name: "Viki",
          from_email: form.email,
          to_email: "vzlatev7@gmail.com",
          message: form.message,
        },
        'tT6dThUgl2JbIJdSq'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-5 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        
        <h3 className='text-[#F8F6F0] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Връзка с нас</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-5'
        >
          <label className='flex flex-col'>
          <span className='text-white text-[3vh] font-medium mb-4'>Тел: 088 039 0385</span>
          </label>

          <label className='flex flex-col'>
            <span className='text-white text-[3vh] font-medium mb-4'>Емейл: office@simonik.bg </span>
          </label>

          <label className='flex flex-col'>
            <span className='text-white text-[3vh] font-medium mb-3'>facebook: https://www.facebook.com/simonikproject</span>
          </label>

          <label className='flex flex-col'>
            <span className='text-white text-[3vh] font-medium mb-3'>instagram: https://www.instagram.com/simonikproject</span>
          </label>

          <label className='flex flex-col'>
            <span className='text-white text-[3vh] font-medium mb-3'>адрес...</span>
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            disabled={!capVal}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
