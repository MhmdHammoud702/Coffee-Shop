import { useState } from 'react';
import {GiHamburgerMenu} from "react-icons/gi"
import {motion} from "framer-motion";
const Navbar = ({sidebar,setSidebar}) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='absolute top-0 left-0 w-full pt-10 text-white z-9999'>
        <div className="mx-auto p-1 sm:p-3">
            <div className='flex justify-between items-center mx-3'>
                {/* logo section */}
                <motion.h1 initial={{opacity: 0,y:-100}} animate={{opacity:1,y:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:1}} className='text-2xl font-semibold'>
                <span className='text-[var(--primary)]'>CODERS</span> COFFEE</motion.h1>
                {/* Hamburger Menu section */}
                <motion.div initial={{opacity: 0,y:-100}} animate={{opacity:1,y:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:1}} className="z-10" onClick={()=>setSidebar(!sidebar)}>
                    <GiHamburgerMenu  className={`text-3xl cursor-pointer transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`} 
                    onClick={() =>setOpen(!open)}/>
                </motion.div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar