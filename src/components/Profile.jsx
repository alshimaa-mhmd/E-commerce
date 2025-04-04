import React from 'react'
import PinkButton from './PinkButton'

function Profile() {
  return (
    <>
      {/* Header section with breadcrumbs and welcome message */}
      <div className='w-full px-6 sm:px-20 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
        <p className='text-[12px] sm:text-[14px] leading-5 text-black flex gap-[12px]'>
          <span className='opacity-55'>Home</span> 
          <span className='opacity-55'>/</span> 
          My Account
        </p>
        <p className='text-[12px] sm:text-[14px] leading-5 text-black'>
          Welcome! <span className='text-[#DB4444]'>Md Rimel</span>
        </p>
      </div>

      {/* Main content section with sidebar and form */}
      <div className='w-full flex flex-col-reverse md:flex-row items-start justify-center p-4 sm:p-8 gap-8 md:gap-16 lg:gap-20 my-4 sm:my-12'>
        
        {/* Sidebar / Navigation */}
        <aside className='w-full md:w-auto flex flex-col items-start justify-center gap-8 p-4 border-t md:border-t-0 pt-8 md:pt-0 mt-8 md:mt-0'>
          <ul className='w-full'>
            <p className='font-[500] text-[16px] leading-[24px] mb-2'>
              Manage My Account
            </p>
            <li className='text-[16px] leading-[32px] text-[#DB4444]'>
              My Profile
            </li>
            <li className='text-[16px] leading-[32px] text-black/50'>
              Address Book
            </li>
            <li className='text-[16px] leading-[32px] text-black/50'>
              My Payment Options
            </li>
          </ul>
          
          <ul className='w-full'>
            <p className='font-[500] text-[16px] leading-[24px] mb-2'>
              My Orders
            </p>
            <li className='text-[16px] leading-[32px] text-black/50'>
              My Returns
            </li>
            <li className='text-[16px] leading-[32px] text-black/50'>
              My Cancellations
            </li>
          </ul>

          <div className='w-full'>
            <p className='font-[500] text-[16px] leading-[24px]'>
              My Wishlist
            </p>
          </div>
        </aside>

        {/* Profile Edit Form */}
        <div className='flex flex-col items-start rounded-sm gap-4 md:gap-8 shadow-2xl shadow-gray-300 p-4 md:p-8 w-full max-w-4xl'>
          <p className='font-[500] text-[18px] md:text-[20px] text-[#DB4444]'>Edit Your Profile</p>
          
          <div className='flex flex-col items-start justify-start gap-8 w-full'>
            {/* Name fields - stack on mobile, side by side on tablet/desktop */}
            <div className='flex flex-col md:flex-row gap-4 md:gap-8 w-full'>
              <div className='flex flex-col w-full'>
                <label className='mb-1'>First Name</label>
                <input 
                  type='text' 
                  placeholder='Md' 
                  className='w-full h-[50px] rounded-sm p-4 bg-[#F5F5F5] text-black/70'
                />
              </div>
              <div className='flex flex-col w-full'>
                <label className='mb-1'>Last Name</label>
                <input 
                  type='text' 
                  placeholder='Rimel' 
                  className='w-full h-[50px] rounded-sm p-4 bg-[#F5F5F5] text-black/70'
                />
              </div>
            </div>
            
            {/* Email and Address fields - stack on mobile, side by side on tablet/desktop */}
            <div className='flex flex-col md:flex-row gap-4 md:gap-8 w-full'>
              <div className='flex flex-col w-full'>
                <label className='mb-1'>Email</label>
                <input 
                  type='email' 
                  placeholder='rimel1111@gmail.com' 
                  className='w-full h-[50px] rounded-sm p-4 bg-[#F5F5F5] text-black/70'
                />
              </div>
              <div className='flex flex-col w-full'>
                <label className='mb-1'>Address</label>
                <input 
                  type='text' 
                  placeholder='Kingston, 5236, United State' 
                  className='w-full h-[50px] rounded-sm p-4 bg-[#F5F5F5] text-black/70'
                />
              </div>
            </div>
            
            {/* Password fields - always full width */}
            <div className='flex w-full'>
              <div className='flex flex-col items-start w-full'>
                <label className='mb-1'>Password Changes</label>
                <input 
                  type='password' 
                  placeholder='Current Password' 
                  className='w-full h-[50px] rounded-sm p-4 bg-[#F5F5F5] text-black/70 mb-4'
                />
                <input 
                  type='password' 
                  placeholder='New Password' 
                  className='w-full h-[50px] rounded-sm p-4 bg-[#F5F5F5] text-black/70 mb-4'
                />
                <input 
                  type='password' 
                  placeholder='Confirm New Password' 
                  className='w-full h-[50px] rounded-sm p-4 bg-[#F5F5F5] text-black/70'
                />
              </div>
            </div>
          </div>
          
          {/* Buttons - adjust on mobile */}
          <div className='w-full flex flex-col-reverse sm:flex-row items-center sm:justify-end gap-3 md:gap-6 mt-4'>
            <p className='cursor-pointer font-[500]'>Cancel</p>
            <PinkButton width={214} value={'Save Changes'}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile