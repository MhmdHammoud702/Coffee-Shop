import React from 'react';
import {motion} from 'framer-motion';
import Coffee1 from '../../coffee1.png';
import Coffee3 from '../../coffee3.png';

const coffee = [{ 
        id: 1,
        image: Coffee1,
        title: "Black Coffee",
        subtitle: "Bold and pure, black coffee delivers an intense flavor and rich aroma that awakens your senses. It’s coffee in its most natural form—simple, strong, and timeless",
    },
    {
        id: 2,
        image: Coffee3,
        title: "Hot Coffee",
        subtitle: "Warm, comforting, and aromatic—hot coffee is the perfect way to start your day or enjoy a cozy moment anytime.",
    },
    {
        id: 3,
        image: Coffee1,
        title: "Ice Coffee",
        subtitle: "Refreshing, smooth, and energizing—cold coffee delivers bold flavor with a cool twist, perfect for any time of day.",
    }];


const Services = () => {
  return (
    <main className="mt-16">   {/* <-- Tailwind margin-top works */}
    <div className="mx-auto p-1 sm:p-2 space-y-4">
            <div className="text-center max-w-lg mx-auto space-y-2 px-2">
                 <motion.h1 initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{type:"spring" , stiffness:150,damping:10,delay:0.2}} className="text-3xl font-bold text-[var(--lightGray)]">
                 Fresh and <span className="text-[var(--primary)]">Tasty coffee</span>
               </motion.h1>
                 <motion.p initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{type:"spring" , stiffness:150,damping:10,delay:0.4}} className='text-sm opacity-50'>
                      Experience the rich aroma and bold flavor of freshly brewed coffee—
                       crafted to energize your day and delight your senses.
                </motion.p>
             </div>
           {/* card section */}  
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 px-5 '>
            {coffee.map((coffe) => (
                <div className='flex flex-col items-center justify-center '>
                    <motion.img initial={{scale:1}} whileHover={{scale:1.1, delay:1.5}} className="w-[200px] h-[200px] my-5 img-shadow3 cursor-pointer"  src={coffe.image}/>
                    <div className='text-center space-y-2 max-w-50'>
                        <h1 className='text-2xl font-bold text-[var(--primary)]'>{coffe.title}</h1>
                        <h1 className=''>{coffe.subtitle}</h1>
                    </div>
                </div>    
            ))}
           </div>

    </div>
    </main>

  )
}

export default Services