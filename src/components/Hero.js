import React from 'react';

import WomanImg from '../img/woman1.png';

import { Link } from 'react-router-dom';

const Hero = () => {
  return (
  <section className='h-[800px] bg-gradient-to-l from-purple-500 to-pink-50 bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
       {/* image */}
       <div className='hidden lg:block'>
        <img src={WomanImg} alt='' />
      </div>
      {/* text */}
      <div className='flex flex-col justify-center'>
        {/* pretitle */}
        <div className='font-semibold flex items-center uppercase'>
          <div className='w-10 h-[5px] bg-red-500 mr-3'></div>Rare Finds
        </div>
        {/* title */}
        <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
          Thrift Store <br />
          <span className='font-semibold'>WOMENS</span>
        </h1>
        <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>By: Jane Araza</Link>
      </div>
    
    </div>
  </section>
  );
};

export default Hero;
