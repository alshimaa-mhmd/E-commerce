import React from 'react'
import { Link } from 'react-router'

function NotFound() {

  return (
    <>
    <div className='w-full ml-12 p-12'>
        <p className='text-[14px] leading-5 text-black flex gap-[12px]'><span className='opacity-55'>Home</span> <span className='opacity-55'>/</span> 404 Error</p>
      </div>
    <div className='flex flex-col items-center justify-center gap-10 text-black w-full h-[500px]'>
      <h1 className='text-[35px] sm:text-8xl font-[500] leading-[110px] '>
        404 Not Found
      </h1>
      <p className='text-[16px] leading-6 text-center'>
        You've visited a page not found. You may go home page.
      </p>

      <Link to='/' className='text-[16px] text-[#FAFAFA] w-[254px] h-[56px] rounded-[4px] flex items-center justify-center bg-[#DB4444] '>
        Go back to home page
      </Link>
    </div>
    </>
  )
}

export default NotFound
