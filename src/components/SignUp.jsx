import React from 'react'
import PinkButton from './PinkButton'
import { Link } from 'react-router'
import authImage from '../assets/Side Image (1).png'
import google from '../assets/Icon-Google.png'

function SignUp() {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-6 md:gap-12 py-8 md:py-12 px-4 sm:px-6 md:px-8 w-full'>
          <div className='md:block hidden w-1/2 lg:w-auto'>
            <img src={authImage} alt='authImage' className='h-[500px] lg:h-[600px] object-cover' />
          </div>
         
          <div className='flex flex-col items-start w-full md:w-auto p-4 sm:p-6 md:p-8 gap-4 md:gap-6'>
            <h2 className='font-[500] text-[28px] sm:text-[32px] md:text-[36px] leading-[1.2] w-full text-center md:text-left'>Create an account</h2>
            <p className='text-[14px] md:text-[16px] leading-6 w-full text-center md:text-left'>Enter your details below</p>
            
            <form className='flex flex-col gap-6 md:gap-8 mt-4 md:mt-8 w-full max-w-[370px]'>
              <input 
                type='text' 
                placeholder='Name' 
                className='w-full h-[40px] md:h-[42px] p-4 border-b border-gray-400 outline-none text-black/70'
              />
              <input 
                type='email' 
                placeholder='Email or Phone Number' 
                className='w-full h-[40px] md:h-[42px] p-4 border-b border-gray-400 outline-none text-black/70'
              />  
              <input 
                type='password' 
                placeholder='Password' 
                className='w-full h-[40px] md:h-[42px] p-4 border-b border-gray-400 outline-none text-black/70'
              />
              
              <div className='w-full mt-2 hidden sm:block'>
                <PinkButton width={317} value={'Create Account'} />
              </div>
              <div className='w-full mt-2 block sm:hidden'>
                <PinkButton width={260} value={'Create Account'} />
              </div>
              
              <button 
                className='cursor-pointer rounded-sm w-[260px] sm:w-[317px] border border-black/30 bg-white flex items-center gap-2 md:gap-4 justify-center py-3 md:py-4 h-[50px] md:h-[56px] text-black font-[400] text-[14px] md:text-[16px] leading-6'
                onClick={(e) => {
                  e.preventDefault();
                  console.log('clicked')
                }}
              >
                <img src={google} alt="Google icon" className="w-5 h-5 md:w-6 md:h-6" /> 
                <p>Sign Up with Google</p>
              </button>
            </form>
            
            <p className='flex items-center justify-center gap-2 w-full text-black/70 text-[14px] md:text-[16px] mt-4'>
              Already have an account? 
              <Link to='/login' className='underline text-black font-medium'>Login</Link>
            </p>
          </div>
        </div>
  )
}

export default SignUp