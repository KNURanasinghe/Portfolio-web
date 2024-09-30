import { motion } from "framer-motion";
import React from 'react';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import {
  DiCss3,
  DiDart,
  DiHtml5,
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiNodejsSmall,
  DiPython,
  DiReact,
} from "react-icons/di";
import { TypeAnimation } from 'react-type-animation';
import profilepic from "../assets/profpic.png";
import ShinyEffect from "./ShinyEffect";

const Hero = () => {

  const downloadFileAtURL = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.substring(url.lastIndexOf('/') + 1); // Extracts filename from URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='mt-24 max-w-[1200px] mx-auto relative'>
      <div className='grid gap-8 md:grid-cols-2 place-items-center'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Mobile Developer",
              1000,
              "Web Developer",
              1000,
              "Backend Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className='mb-4 text-xl font-bold text-gray-400 md:text-5xl italic-'
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-4 text-5xl tracking-tight text-gray-200 md:text-7xl"
          >
            HEY, I AM <br />
            <span className="text-purple-500">NIDARSHANA UTHPALA</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-6 text-lg max-w-[300px] md:max-w-[500px] text-gray-300 md:text-2xl"
          >
            I am a Computer Science undergraduate and self-taught programmer, and Full-Stack Dev & Blogger
          </motion.p>
          
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-row items-center gap-6 my-4 md:mb-0"
        >
            <motion.button
            onClick={()=>{downloadFileAtURL('https://portpolio-bb899.web.app/CV.pdf')}}
            whileHover={{scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)"}}
            className="z-10 p-4 font-bold text-gray-200 border rounded cursor-pointer md:w-auto-purple-500-xl"
            >
                Download CV
            </motion.button>
            <div className="z-20 flex flex-row gap-6 text-4xl text-purple-400 md:text-6xl">
                <motion.a
                    whileHover={{scale: 1.2, }}
                    href="https://github.com/KNURanasinghe?tab=repositories"
                    target="_blank"
                >
                    <AiOutlineGithub/>
                    
                </motion.a>
                <motion.a
                    whileHover={{scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)"}}
                    href="#"
                    target="https://www.linkedin.com/in/knuranasinghe/"
                >
                    <AiOutlineLinkedin/>
                </motion.a>
                <motion.a
                    whileHover={{scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)"}}
                    href="https://twitter.com/NidarshanaUthpala"
                    target="_blank"
                >
                    <AiOutlineInstagram/>
                </motion.a>
            </div>
        </motion.div>
        </motion.div>

        <motion.img
            src={profilepic}
            className="w-[300px] md:w-[450px] "
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            
        </motion.img>
      </div>
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        viewport={{ once: true }}
        transition={{ duration: 1, delay:2 }}
        className="flex flex-row items-center justify-center w-full px-12 py-24 text-7xl md:px-0"
       >
        <p className="mr-6 text-gray-200">My Tech Stack</p>
        <DiHtml5 className="mx-2 text-orange-600"/>
        <DiCss3 className="mx-2 text-blue-600"/>
        <DiJavascript1 className="mx-2 text-yellow-600"/>
        <DiNodejsSmall className="mx-2 text-green-500"/>
        <DiDart className="mx-2 " style={{ color: '#0175C2' }}/>
        <DiPython className="mx-2 text-yellow-200"/>
        <DiJava className="mx-2 text-red-600"/>
        <DiReact className="mx-2 text-blue-500"/>
        <DiMysql className="mx-2 text-blue-800"/>
        <DiMongodb className="mx-2 text-green-600"/>
      </motion.div>
      
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400}/>
      </div>
    </div>
  );
};

export default Hero;
