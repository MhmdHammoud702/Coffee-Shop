import React from 'react'
import {FaPhoneAlt } from 'react-icons/fa';
import { BiMapPin } from "react-icons/bi";
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { FaGoogle } from 'react-icons/fa';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex, FaCcDiscover } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='mx-auto bg-[var(--primary)]'> 
        <div className='mx-10 mt-15'>
            <div className='text-white gap-15 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3'>
                {/* cafe */}
                <div className='space-y-6 my-15'>
                    <h1 className='text-3xl font-bold text-center'>Cafe</h1>
                    <p>Welcome! Step into a world of rich aromas and bold flavors, where every cup of coffee is crafted to brighten your day.</p>
                    <div className='flex items-center gap-2'>
                    <FaPhoneAlt className='scale-x-[-1]'></FaPhoneAlt><span className='text-white'>78 969 052</span>
                    </div>
                    <div  className='relative flex items-center gap-2'>
                    <BiMapPin/>
                    <span className='text-white'>Beirut</span>
                    </div>
                </div>
                    {/* Quik Links */}
                    <div className='flex flex-col justify-center items-center'>
                        <div className='space-y-6 my-10'>
                             <h1 className='text-3xl font-bold text-center'>Quick Links</h1>
                             <div className='space-y-4 text-center'>
                                <h3>Home</h3>
                                <h3>About</h3>
                                <h3>Contact us</h3>
                                <h3>Privacy Policy</h3>
                             </div>                                  
                        </div>
                    </div>
                    {/* Follow Us */}
                    <div className='flex flex-col justify-center items-center'>
                        <div className='space-y-4 mt-10'>
                            <h1 className='text-3xl font-bold text-center'>Follow Us</h1>
                        </div>
                         <div className='flex mt-6 items-center justify-center gap-4 '>
                        <FaFacebookF className='bg-white w-9 h-9 pt-2 rounded-full text-[var(--primary)]'/>
                        <FaInstagram className='text-4xl'/>
                        <FaTwitter className='text-4xl'/>
                        <FaGoogle className='text-4xl'/>
                        </div>
                        <div className='space-y-4 mt-6'>
                            <h1 className='text-2xl font-semibold text-center'>Payment Methods</h1>
                        </div>
                        <div className='mt-5 mb-10'>
                            <div className="flex gap-4 text-4xl">
                                 <FaCcVisa className="text-white cursor-pointer" />
                                 <FaCcMastercard className="text-white cursor-pointer" />
                                 <FaCcPaypal className="text-white cursor-pointer" />
                                 <FaCcAmex className="text-white cursor-pointer" />
                                 <FaCcDiscover className="text-white cursor-pointer" />
                    </div>
                        </div>
                    </div>
                    
            </div>
            <hr className='text-amber-50'></hr>
            <div className='text-center text-xl p-10'>
                <h1 className='text-white'>Copyright &copy; 2025</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer