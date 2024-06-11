import React, { useState, useEffect } from 'react';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import Reveal from './Reveal';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }
  }, [isSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const formData = new FormData(form);
      const response = await fetch('https://getform.io/f/ebpdgdlb', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        console.error('Form submission error:', response.statusText);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className='px-6 max-w-[1000px] mx-auto md:my-12' id='contact'>
      <Reveal>
        <div className='grid md:grid-cols-2 place-items-center'>
          <div>
            <div className='my-3 text-gray-300'>
              <h3 className='mb-5 text-4xl font-semibold'>About <span>Me</span></h3>
              <p className='w-11/12 mx-auto leading-7 text-justify'>
                I am Nidarshna Uthpala, a dedicated Computer Science student at Eastern University, Trincomalee Campus. My passion for technology
                and development has led me to become a versatile full-stack developer, proficient in both front-end and back-end technologies. Currently,
                I am working as a freelance developer, where I leverage my expertise in Flutter for mobile development and React for web development to
                create seamless, user-friendly applications. My skills extend to backend development, ensuring robust and efficient solutions for my clients.
                In addition to my technical prowess, I have honed my communication skills by completing an English diploma at ESOFT Metro Campus in Dambulla.
                I am committed to continuous learning and innovation,
                always striving to deliver exceptional results in every project I undertake.
                <br></br>
                <span>Contact Me !</span>
              </p>
              <p className='flex items-center w-11/12 mx-auto leading-7 text-justify md:mt-2'>
                <FiPhoneCall className='mr-2 text-purple-400' />
                <span className='text-2xl font-bold text-gray-300 md:ml-3'>078 327 5618</span>
              </p>
              <p className='flex items-center w-11/12 mx-auto leading-7 text-justify md:mt-2'>
                <FiMail className='mr-2 text-purple-400' />
                <span className='text-2xl font-bold text-gray-300 md:ml-3'>nidarshanauthpala90@gmail.com</span>
              </p>
            </div>
            <div className='flex items-center mt-10 gap-7'>
              <div className='p-4 rounded-lg bg-gray-800/40 '>
                <h3 className='text-2xl font-semibold text-white md:text-4xl'>20 <span>+</span>
                </h3>
                <p className='text-xs md:text-base'><span>Projects</span></p>
              </div>
              <div className='p-5 rounded-lg bg-gray-800/40 '>
                <h3 className='text-2xl font-semibold text-white md:text-4xl'>3 <span>+</span>
                </h3>
                <p className='text-xs md:text-base'><span>Years of experience</span></p>
              </div>
              <div className='p-5 rounded-lg bg-gray-800/40 '>
                <h3 className='text-2xl font-semibold text-white md:text-4xl'>30 <span>+</span>
                </h3>
                <p className='text-xs md:text-base'><span>Happy clients</span></p>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className='max-w-6xl p-5 md:p-12'
            id='form'
          >
            <p className='mb-2 text-xl font-bold text-gray-100'>
              Let`s connect!
            </p>
            <input
              type='text'
              id='name'
              placeholder='Your Name ...'
              name='name'
              className='w-full py-2 pl-2 pr-4 mb-2 border border-purple-600 rounded-md'
            />
            <input
              type='email'
              id='email'
              placeholder='Your Email ...'
              name='email'
              className='w-full py-2 pl-2 pr-4 mb-2 border border-purple-600 rounded-md'
            />
            <textarea
              id='textarea'
              cols='30'
              rows='4'
              placeholder='Your Message ...'
              name='textarea'
              className='w-full py-2 pl-2 pr-4 mb-2 border border-purple-600 rounded-md'
            />
            <button
              type='submit'
              className='w-full py-3 text-xl font-semibold text-gray-100 rounded-md bg-primary-color '
            >
              Send Message
            </button>
            {isSubmitted && (
              <p className='mt-4 text-xl font-semibold text-purple-400'>
                Message sending is successful!
              </p>
            )}
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
