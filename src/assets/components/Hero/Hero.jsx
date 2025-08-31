import React, { useState } from 'react';
import BgImage from '../../bg-slate.png';
import Black from '../../black.png';
import Navbar from '../Navbar/Navbar.jsx';
import { motion } from "framer-motion";
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};

function Hero(){

    const [sidebar,setSidebar] = useState(false);

    return(
    <main style={bgImage}>
        <section className="relative min-h-[750px] w-full">
            <div className="mx-auto p-1 sm:p-2">
                {/*navbar section*/}
                <Navbar sidebar={sidebar} setSidebar={setSidebar} />
                {/*Hero section*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px] px-20">
                {/*text content*/}
                <div className='text-[var(--lightOrange)] mt-[100px] md:mt-0 p-4 space-y-28'>
                    <motion.h1 initial={{opacity: 0,y:-100}} whileInView={{opacity:1,y:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.4}} className='text-7xl font-bold leading-tight ml-14'>Black Tumbler</motion.h1>
                    <div className='relative'> 
                        <motion.div initial={{opacity: 0,y:100}} animate={{opacity:1,y:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.4}} className='relative z-10 space-y-4'>
                            <h1 className='text-2xl'>Black Lifestyle Lovers,</h1>
                            <h1  className='text-sm opacity-55 leading-loose'>Black Lifestyle Lovers is your go-to space for celebrating the 
                                rich culture and vibrant stories of the Black coffee community.
                                From artisan roasts to cozy coffee rituals, we explore how coffee
                                fuels creativity, connection, and lifestyle.</h1>
                        </motion.div>
                        <div className='absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25'></div>
                    </div>
                </div>
                {/*Image Section*/}
                <div className='relative'>
                    <motion.img initial={{opacity: 0,scale: 0}} animate={{opacity:1,scale:1}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.8}} src= {Black} className='relative z-40 h-[400px] md:h-[700px] img-shadow  sm:img-shadow2'/>
                    {/* orange circle*/}
                    <motion.div initial={{opacity: 0,y:-100}} whileInView={{opacity:1,y:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.8}} className='h-[180px] w-[180px] absolute top-24 -right-16 border-[var(--primary)] border-[20px] rounded-full z-1'></motion.div>

                    {/* big text section*/}
                    <motion.div initial={{opacity: 0,x:100}} whileInView={{opacity:1,x:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.7}} className='absolute -top-20 left-[200px] z-[1]'>
                        <h1 className='text-[140px] scale-150 font-bold text-[var(--darkGray)]/40 loading-none'>Black Tumbler</h1>
                    </motion.div>
                </div>
                {/*third div section*/}
                <div className='text-[var(--lightOrange)] mt-[100px] sm:hidden md:mt-0 p-4 space-y-28 hidden lg:block'>
                    <h1  className='opacity-0 text-7xl font-bold leading-tight ml-14'>Black Tumbler</h1>
                    <div className='relative'> 
                        <motion.div initial={{opacity: 0,y:100}} animate={{opacity:1,y:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.4}} className='relative z-10 space-y-4'>
                            <h1 className='text-2xl'>Black Tumbler,</h1>
                            <h1  className='text-sm opacity-55 leading-loose'>Black Lifestyle Lovers is dedicated to bringing 
                                                                            you the essence of Black coffee culture.
                                                                             From handcrafted brews to everyday coffee moments, we highlight the flavors, 
                                                                             stories, and experiences that inspire creativity, connection,
                                                                             and a love for the coffee lifestyle.</h1>
                        </motion.div>
                        <div className='absolute -top-6 -right-10 w-[250px] h-[180px] bg-black/15'></div>
                    </div>
                </div>
                </div>
            </div>
            {/* sidebar ,menu */}
            {sidebar && (
            <motion.div initial={{x:"100%"}} whileInView={{x:"0"}}  className='absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-[var(--primary)]/75 to-[var(--primary)]/80 backdrop-blur-sm z-100'>
             <div className='w-full h-full flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center gap-6 text-white'>
                    {/* Line */}
                    <div className='w-[1px] h-[70px] bg-white'></div>
                    {/*social icons */}
                        <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                        <FaFacebookF className='text-2xl'/>
                        </div>
                        <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                        <FaTwitter  className='text-2xl '/>
                         </div>
                        <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                        <FaInstagram  className='text-2xl'/>
                        </div>
                    <div className='w-[1px] h-[70px] bg-white'></div>
                </div>
              </div>
            </motion.div>
            )}
        </section>
    </main>
    )
}

export default Hero