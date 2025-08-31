import React from 'react';
import world from '../../world-map.png';
import {motion} from 'framer-motion';
const Order = () => {
  return (
    <div className='my-36 sm:mx-10 md:mx-10 lg:mx-20 p-1 sm:p-2'>
  <div className='grid grid-cols-1 sm:grid-cols-3 items-center gap-8 '>

    {/* Form Section */}
    <div className='space-y-8 flex flex-col items-center mx-auto '>
      <motion.h1 initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.4}} className='text-4xl font-bold text-center-left lg:ml-15 '>
        Buy our products from anywhere
      </motion.h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md'>
        <motion.input initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.5}} className="border border-gray-500 rounded-[8px] pl-3 py-2 w-full" type='text' placeholder='Name'/>
        <motion.input initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}}  transition={{type:"spring",stiffness: 100,damping: 10,delay:0.4}} className="border border-gray-500 rounded-[8px] pl-3 py-2 w-full" type='text' placeholder='Email'/>
        <input className="border border-gray-500 rounded-[8px] pl-3 py-2 w-full" type='text' placeholder='Country'/>
        <input className="border border-gray-500 rounded-[8px] pl-3 py-2 w-full" type='text' placeholder='Zipcode'/>
        <button className="bg-[var(--primary)] w-full col-span-1 sm:col-span-2 cursor-pointer text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-600 mx-auto">
          Order Now
        </button>
      </div>
    </div>

    {/* World Map Section */}
    <motion.div initial={{opacity:0,scale: 0.5}} whileInView={{opacity:1,scale:1}} className='sm:col-span-2 flex justify-center'>
      <img src={world} className='w-full sm:w-[500px]' alt="World Map"/>
    </motion.div>

  </div>
</div>

  );
}

export default Order;
