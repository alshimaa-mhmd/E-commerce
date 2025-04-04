import React from 'react'
import facebook from '../assets/Icon-Facebook.png'
import instagram from '../assets/icon-instagram.png'
import linkedin from '../assets/Icon-Linkedin.png'
import twitter from '../assets/Icon-Twitter.png'
import send from '../assets/icon-send.png'
import Qrcode from '../assets/Qrcode 1.png'
import googlePlay from '../assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png'
import appStore from '../assets/download-appstore.png'


function Footer() {
  return (
    <footer className='bg-black text-[#FAFAFA] w-full flex items-start justify-evenly flex-wrap gap-[50px] px-4 py-8'>
      <div className='flex flex-col items-start justify-center gap-[16px] leading-[24px]'>
        <h3 className='text-[24px] font-bold'>Exclusive</h3>
        <p className='text-[20px] font-[500] leading-[28px]'>Subscribe</p>
        <p className='text-[16px]'>Get 10% off your first order</p>
        <div className='flex rounded-[4px] border-[1.5px] border-[#FAFAFA] py-[12px] pl-[16px] w-[237px] h-[48px] '>
            <input className='text-[#FAFAFA] text-[16px] leading-[24px] ' placeholder='Enter your email' />
            <img src={send} />
        </div>
      </div>

      <div className='w-[170px] flex flex-col items-start justify-center gap-[16px] leading-[24px]'>
        <h3 className='text-[24px] font-bold'>Support</h3>
        <p className='text-[16px]'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
        <p className='text-[16px]'>exclusive@gmail.com</p>
        <p className='text-[16px]'>+88015-88888-9999</p>
      </div>

      <div className='flex flex-col items-start justify-center gap-[16px] leading-[24px]'>
        <h3 className='text-[24px] font-bold'>Account</h3>
        <p className='text-[16px]'>My Account</p>
        <p className='text-[16px]'>Login / Register</p>
        <p className='text-[16px]'>Cart</p>
        <p className='text-[16px]'>Wishlist</p>
        <p className='text-[16px]'>Shop</p>
      </div>

      <div className='flex flex-col items-start justify-center gap-[16px] leading-[24px]'>
        <h3 className='text-[24px] font-bold'>Quick Link</h3>
        <p className='text-[16px]'>Privacy Policy</p>
        <p className='text-[16px]'>Terms Of User</p>
        <p className='text-[16px]'>FAQ</p>
        <p className='text-[16px]'>Contact</p>
      </div>


      <div className='flex flex-col items-start justify-center gap-[16px] leading-[24px]'>
        <h3 className='text-[24px] font-bold'>Download App</h3>
        <p className='text-[13px]'>Save $3 with App New User Only</p>
         <div className='flex gap-3 items-center justify-center'>
                  <div>
                    <img src={Qrcode} alt='qrcode' />
                  </div>
        
                  <div className='flex flex-col gap-3'>
                    <div>
                      <img src={googlePlay} alt='play' />
                    </div>
                    <div className='flex gap-2 flex-wrap'>
                      <img src={appStore} alt='app store' />
                    </div>
                  </div>
                </div>
        <div className='flex w-[90%] justify-between '>
          <img src={facebook} />
          <img src={twitter} />
          <img src={instagram} />
          <img src={linkedin} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
