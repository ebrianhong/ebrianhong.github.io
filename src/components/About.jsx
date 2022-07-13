import React from 'react';

/**
   * PurgeCSS:
   * bg-[#0a192f]
   * text-green-500
   * text-yellow-500
   * text-gray-500
   * text-purple-500
   * text-indigo-500
   * text-blue-500
   * text-pink-500
   *

   */

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full px-12'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-teal-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, I'm Brian! Welcome to my portfolio website :)</p>
            </div>
            <div>
              <p></p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
