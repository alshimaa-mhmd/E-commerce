import React from 'react'
import authImage from '../assets/Side Image (1).png'
import PinkButton from './PinkButton'
import { Link } from 'react-router'

function LogIn() {
  return (
    <div className='flex items-center justify-start gap-12 py-12'>
    <div className='hidden md:block h-[600px]'>
      <img src={authImage} alt='authImage' className='h-full' />
    </div>
   
    <div className='flex flex-col items-start p-8 gap-8'>
      <h2 className='font-[500] text-[24px] sm:text-[36px] leading-[30px]'>Log in to Exclusive</h2>
      <p className='text-[16px] leading-6'>Enter your details below</p>
      <form className='flex flex-col gap-8 mt-8 w-[100%] sm:w-[370px]'>
        <input type='email' placeholder='Email or Phone Number' className='w-full h-[32px] p-4 border-b-1 outline-none border-gray-400 text-black/70'/>  
        <input type='password' placeholder='Password' className='w-full h-[32px] p-4 border-b-1 outline-none border-gray-400 text-black/70'/>
        <div className='flex-col md:flex-row flex items-center justify-between w-full gap-6'>
            <PinkButton width={143} value={'Log In'} />
            <p className='text-[16px] leading-6 text-[#DB4444] cursor-pointer'>Forget Password?</p>
        </div>
        </form>
    </div>
  </div>
  )
}

export default LogIn
