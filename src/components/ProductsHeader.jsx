import React from 'react'
import ProductCarousel from './ProductCarousel '

function ProductsHeader({title, subtitle}) {
  return (
    <div className=' flex flex-col items-strat justify-start gap-6 sm:gap-[40px] '>
      <div className='flex gap-[16px] items-center justify-start'>
        <div className='bg-[#DB4444] text-[#DB4444] w-[20px] h-[40px] rounded-[4px]'>
            .
        </div>
        <p className='text-[#DB4444] font-semibold text-[16px] leading-[20px]'>{title}</p>
      </div>

      <div className=''>
        <h2 className='font-semibold leading-[48px] text-[22px] sm:text-[36px] text-black'>{subtitle}</h2>
        {/* {subtitle === "Flash Sales" ? <ProductCarousel carouselRef={carouselRef} /> : ''} */}
      </div> 
    </div>
  )
}

export default ProductsHeader
