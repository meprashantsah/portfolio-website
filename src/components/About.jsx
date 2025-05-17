import React from 'react'
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right","spring", 0.5 * index, 0.75 )} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>INTRODUCTION</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>OVERVIEW.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I'm a Software Developer based in Bengaluru, India, passionate about building efficient, scalable, and user-friendly applications. I enjoy solving real-world problems through clean code and practical software solutions. 
      <br />With experience in Java, Spring Boot, Node.js, Ruby on Rails, and React, I’ve built full-stack applications and secure, cloud-integrated systems during internships and personal projects. I'm always eager to learn, collaborate, and take on new challenges in dynamic environments.
     </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

// export default About
export default SectionWrapper(About, "about")