import React from 'react'
import PinkButton from './PinkButton'
import phone from '../assets/icons-phone.png'
import mail from '../assets/icons-mail.png'

function Contact() {
  return (
    <>
      <div className='w-full sm:ml-12 sm:p-12 p-6'>
        <p className='text-[14px] leading-5 text-black flex gap-[12px]'><span className='opacity-55'>Home</span> <span className='opacity-55'>/</span> Contact</p>
      </div>

      <div className='w-full flex-wrap my-12 flex items-start justify-center gap-8'>
        <aside className='w-[340px] shadow-2xl shadow-gray-300  rounded-sm flex flex-col items-start justify-center gap-8 p-8 '>
          <div className='flex gap-4 items-center justify-center'>
            <img src={phone} />
            <p className='font-[500] text-[16px] leading-[24px] text-black'>
              Call Us
            </p>
            </div>
            <p className='text-[14px] leading-[21px] text-black'>
              We are available 24/7, 7 days a week.
            </p>
            <p className='text-[14px] leading-[21px] text-black'>
              Phone: +8801611112222
            </p>

            <hr className='opacity-50 w-full border-1 border-black'/>

            <div className='flex gap-4 items-center justify-center'>
            <img src={mail} />
            <p className='font-[500] text-[16px] leading-[24px] text-black'>
              Write To Us
            </p>
            </div>
            <p className='text-[14px] leading-[21px] text-black'>
            Fill out our form and we will contact you within 24 hours.
            </p>
            <p className='text-[14px] leading-[21px] text-black'>
            Emails: customer@exclusive.com
            </p>
            <p className='text-[14px] leading-[21px] text-black'>
            Emails: support@exclusive.com
            </p>
        </aside>


        <div className='flex flex-col items-end rounded-sm gap-8 shadow-2xl shadow-gray-300 p-8'>
          <div className='flex flex-wrap items-center justify-start gap-4 w-full'>
            <input type='text' placeholder='Your Name *' className='w-[235px] h-[50px]rounded-sm p-4 bg-[#F5F5F5] text-black/70'/>
            <input type='email' placeholder='Your Email *' className='w-[235px] h-[50px]rounded-sm p-4 bg-[#F5F5F5] text-black/70'/>  
            <input type='text' placeholder='Your Phone *' className='w-[235px] h-[50px]rounded-sm p-4 bg-[#F5F5F5] text-black/70'/>
          </div>
          <textarea placeholder='Your Message *' className='w-full h-[200px] rounded-sm p-4 bg-[#F5F5F5] text-black/70 my-4'/>
          <PinkButton width={215} value={'Send Message'}/>
        </div>
       
      </div>
    </>
  )
}

export default Contact
