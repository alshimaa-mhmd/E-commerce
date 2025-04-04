import React, { useContext } from 'react'
import ProductsContext from './ProductsContext';
import PinkButton from './PinkButton';
import payment from '../assets/Frame 834.png'

function CheckOutPage() {
    const { cart } = useContext(ProductsContext);
    let subtotal = 0;
    return (
    <>
      <div className='w-full ml-4 md:ml-12 p-4 md:p-12'>
        <p className='text-[12px] md:text-[14px] leading-5 text-black flex gap-[12px]'>
          <span className='opacity-55'>Home</span>  
          <span className='opacity-55'>/</span> 
          <span>Cart</span> 
          <span className='opacity-55'>/</span> 
          CheckOut
        </p>
      </div> 

    <div className='flex flex-col-reverse lg:flex-row items-center lg:items-start justify-around gap-8 p-4 md:p-8'>
      <div className='flex flex-col items-start rounded-sm gap-6 md:gap-8 p-4 md:p-8 w-full max-w-[470px]'>
        <p className='font-[500] text-[18px] md:text-[20px]'>Billing Details</p>

          <div className='flex flex-col items-start justify-start gap-2 md:gap-4 w-full'>
            <label className='text-black/40 text-[14px] md:text-base'>First Name *</label>
            <input type='text' className='w-full h-[40px] md:h-[50px] rounded-sm p-3 md:p-4 bg-[#F5F5F5] text-black/70'/>
          </div>
          <div className='flex flex-col items-start justify-start gap-2 md:gap-4 w-full'>
            <label className='text-black/40 text-[14px] md:text-base'>Company Name</label>
            <input type='text' className='w-full h-[40px] md:h-[50px] rounded-sm p-3 md:p-4 bg-[#F5F5F5] text-black/70'/>
          </div>
          <div className='flex flex-col items-start justify-start gap-2 md:gap-4 w-full'>
            <label className='text-black/40 text-[14px] md:text-base'>Street Address *</label>
            <input type='text' className='w-full h-[40px] md:h-[50px] rounded-sm p-3 md:p-4 bg-[#F5F5F5] text-black/70'/>
          </div>
          <div className='flex flex-col items-start justify-start gap-2 md:gap-4 w-full'>
            <label className='text-black/40 text-[14px] md:text-base'>Apartment, floor, etc. (optional)</label>
            <input type='text' className='w-full h-[40px] md:h-[50px] rounded-sm p-3 md:p-4 bg-[#F5F5F5] text-black/70'/>
          </div>
          <div className='flex flex-col items-start justify-start gap-2 md:gap-4 w-full'>
            <label className='text-black/40 text-[14px] md:text-base'>Town/City*</label>
            <input type='text' className='w-full h-[40px] md:h-[50px] rounded-sm p-3 md:p-4 bg-[#F5F5F5] text-black/70'/>
          </div>
          <div className='flex flex-col items-start justify-start gap-2 md:gap-4 w-full'>
            <label className='text-black/40 text-[14px] md:text-base'>Phone Number*</label>
            <input type='text' className='w-full h-[40px] md:h-[50px] rounded-sm p-3 md:p-4 bg-[#F5F5F5] text-black/70'/>
          </div>
          <div className='flex flex-col items-start justify-start gap-2 md:gap-4 w-full'>
            <label className='text-black/40 text-[14px] md:text-base'>Email Address*</label>
            <input type='text' className='w-full h-[40px] md:h-[50px] rounded-sm p-3 md:p-4 bg-[#F5F5F5] text-black/70'/>
          </div>
         
            <div className='flex gap-2 items-start'>
                <input type='checkbox' className='bg-[#DB4444] text-white mt-1' />
                <p className='text-[14px] md:text-[16px]'>Save this information for faster check-out next time</p>
            </div>
        </div>


        <div className='flex flex-col gap-4 md:gap-6 w-full max-w-[470px] p-4 md:p-6 bg-gray-50 rounded-sm'>
            {cart.map(item => 
            { subtotal += item?.price;
              return <div className='flex items-center justify-between' key={item?.id}>
              
              <div className='flex gap-2 items-center justify-center'>
                <img src={item?.thumbnail} className='w-[40px] h-[40px] md:w-[54px] md:h-[54px]'  />
                <p className='text-[14px] md:text-base'>{item?.title}</p>
              </div>
              <p className='text-[14px] md:text-base'>${item?.price}</p>
            </div>
            }
            )}
     

        <div className='flex items-center justify-between'>
          <p className='text-[14px] md:text-base'>Subtotal:</p>
          <p className='text-[14px] md:text-base'>${(subtotal).toFixed(2)}</p>
        </div>
        <hr />
        <div className='flex items-center justify-between'>
          <p className='text-[14px] md:text-base'>Shipping:</p>
          <p className='text-[14px] md:text-base'>free</p>
        </div>
        <hr />
        <div className='flex items-center justify-between'>
          <p className='text-[14px] md:text-base'>Total:</p>
          <p className='text-[14px] md:text-base'>${(subtotal).toFixed(2)}</p>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <input name='payment' type='radio' /> 
              <span className='text-[14px] md:text-base'>Bank</span>
            </div>
            <img src={payment} className='h-6 md:h-8' />
          </div>
          <div className='flex items-center gap-2'>
            <input name='payment' type='radio' /> 
            <span className='text-[14px] md:text-base'>Cash on delivery</span>
          </div>
        </div>
        
        <div className='flex flex-col sm:flex-row items-start justify-start sm:justify-center gap-3 md:gap-5'>
          <input 
            type='text' 
            placeholder='Coupon Code' 
            className='w-full sm:w-[200px] md:w-[300px] h-[40px] md:h-[56px] rounded-sm border-1 border-black/50 p-3 md:p-4' 
          />
          <PinkButton width={211} value={'Apply Coupon'}/>
        </div>

        <PinkButton width={190} value={'Place Order'}/>
        </div>
    </div>
    </>
  )
}

export default CheckOutPage