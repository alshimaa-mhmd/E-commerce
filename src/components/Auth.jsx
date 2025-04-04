import React from 'react'
import authImage from '../assets/Side Image (1).png'
import SignUp from './SignUp'
function Auth() {
  return (
    <div className='flex items-center justify-start gap-12 py-12'>
      <div className='h-[600px]'>
        <img src={authImage} alt='authImage' className='h-full' />
      </div>
      <SignUp />
    </div>
  )
}

export default Auth
