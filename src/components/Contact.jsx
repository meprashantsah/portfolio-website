import React from 'react'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion';

// import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";




//'1xwZIG7-ua0RisHgB'
//'service_twp9dds',
//'template_lamz1vj',


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
        'service_twp9dds',
        'template_lamz1vj',
        {
          from_name: form.name,
          to_name: "Prashant Sah",
          from_email: form.email,
          to_email: "iamprashantsah@gmail.com",
          message: form.message,
        },
        '1xwZIG7-ua0RisHgB'
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
    <div className='xl: mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left", "tween", 0.2, 1 )} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>GET IN TOUCH</p>
        <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>CONTACT.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8' >

          {/* <label className='flex flex-col '>
            <span className='text-white font-medium mb-4'>Phone no: +91 9031877974</span>
          </label> */}

          <label className='flex items-center gap-2 mb-4'>
            <PhoneIcon className="w-5 h-5 text-white" />
            <a href="tel:+919031877974" className="text-white hover:underline">
              +91 9031877974
            </a>
          </label>

          <label className='flex items-center gap-2 mb-4'>
            <EnvelopeIcon className="w-5 h-5 text-white" />
            <a href="mailto:iamprashantsah@gmail.com" className="text-white hover:underline">
              iamprashantsah@gmail.com
            </a>
          </label>

          <label className='flex items-center gap-2 mb-4'>
            <FaLinkedin className="w-5 h-5 text-white" />
            <a
              href="https://www.linkedin.com/in/prashant-sah-41642529b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              LinkedIn
            </a>
          </label>

          <label className='flex items-center gap-2 mb-4'>
            <FaGithub className="w-5 h-5 text-white" />
            <a
              href="https://github.com/meprashantsah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              GitHub
            </a>
          </label>

          <label className='flex items-center gap-2 mb-4'>
            <FaInstagram className="w-5 h-5 text-white" />
            <a
              href="https://www.instagram.com/prashantsah_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Instagram
            </a>
          </label>



          {/* <label className='flex flex-col '>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:test-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col '>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:test-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col '>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows="7" name='message' value={form.message} onChange={handleChange} placeholder="What do you want to say?" className='bg-tertiary py-4 px-6 placeholder:test-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button> */}

        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1 )} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")