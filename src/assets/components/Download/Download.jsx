import React from 'react'
import Background from '../../coffee-cover.jpg';
import playstore from '../../play_store.png';
import appstore from '../../app_store.png';
import {motion} from "framer-motion";
const banner = {
    backgroundImage : `url(${Background})`,
    backgroundSize : "cover",
    backgroundPosition : "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"

};

const Download = () => {
  return (
    <div className='mx-10 p-1 sm:p-2 my-14'>
        <div style={banner} className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl'>
           <div>
                <div className='space-y-6 max-w-xl mx-auto lg:mx-40'>
                    <motion.h1 initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}}  transition={{type:"spring",stiffness: 100,damping: 10,delay:0.3}} className='text-2xl text-center font-semibold sm:text-4xl'>Download the app</motion.h1>
                    <motion.p  initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}}  transition={{type:"spring",stiffness: 100,damping: 10,delay:0.4}} className='text-center'>Get our coffee experience in the palm of your hand. Order, explore, and enjoy fresh brews anytime, anywhere with our easy-to-use app.</motion.p>
                    {/* logos */}
                    <div className='flex justify-center gap-4'>
                        <a href="" className='max-w-[150px] sm:max-w-[150px] md:[max-w-[200px]'><motion.img initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}}  transition={{type:"spring",stiffness: 100,damping: 10,delay:0.5}} src={appstore}  alt="" /></a>
                        <a href="" className='max-w-[150px] sm:max-w-[150px] md:[max-w-[200px]'><motion.img initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}}  transition={{type:"spring",stiffness: 100,damping: 10,delay:0.6}}  src={playstore}  alt="" /></a>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Download
