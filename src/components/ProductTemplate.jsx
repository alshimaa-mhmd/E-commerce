import React, { useContext, useState } from 'react'
import ProductsContext from './ProductsContext';
import { Link } from 'react-router';
import heart from '../assets/Vector (2).png'
import eye from '../assets/Group (1).png'
import cart from '../assets/Cart1.png'
import StarRating from './StarRating';

function ProductTemplate({product, seen = true}) {
    const { addToWishlist, addToCart, removeFromWishlist,  wishlist } = useContext(ProductsContext);
    const oldPrice =( product?.price / ( 1 - (product?.discountPercentage / 100))).toFixed(2);
    const [isHovered, setIsHovered] = useState(false);

    const inWishlist = wishlist.some(item => item.id === product?.id);
  return (
    <div className='min-w-[270px] relative max-w-[272px] h-[350px] p-0 flex flex-col items-start gap-[30px] text-[16px] leading-[24px] transition-all' onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className='w-full h-[270px] bg-[#F5F5F5] flex items-start justify-center relative'>
        {product?.discountPercentage > 10 &&
            <div className='w-[55px] h-[26px] flex items-center justify-center py-[4px] px-[12px] bg-[#DB4444] relative top-[12px] left-[12px] rounded-[4px] z-[10]'>
                <p className='text-[#FAFAFA] text-[12px] font-normal'>-
                    {product?.discountPercentage}%</p>
            </div>
        }
            <div className='w-full flex items-center justify-center'>
            <img src={product?.thumbnail} alt='product' className={`w-[190px] h-[180px] ${isHovered ? 'scale-[0.8]' : 'scale-[1]'} transition-[scale] ease-linear duration-150 `} />
            </div>
            
           
            <div className='w-[34px] flex flex-col gap-[12px] items-center justify-center py-[4px] px-[12px] relative top-[12px] right-[10px] z-[10]'>
            {inWishlist ? 
                <button onClick={()=>removeFromWishlist(product?.id)} className='cursor-pointer'>
                    <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                </button> :  
                <button className='rounded-full bg-[#FFFFFF] w-[34px] h-[34px] flex items-center justify-center cursor-pointer' onClick={() =>
                    addToWishlist(product?.id)
                }>
                    <img src={heart} />
                </button>
            }
                {seen && <Link to={`${product.id}`} className='rounded-full bg-[#FFFFFF] w-[34px] h-[34px] flex items-center justify-center'>
                    <img src={eye} />
                </Link>
                }
            </div>

        </div>
        <button className={`cursor-pointer gap-2 bg-black z-[10] transition-all duration-300 ${isHovered ? ' opacity-100 bottom-[110px]' : ' opacity-0 bottom-[50px]'} absolute w-full flex items-center justify-center p-3 text-[#FAFAFA]`} onClick={()=> {
            addToCart(product?.id)
        }}>
           <img src={cart} /> <p>Add To Cart</p>
        </button>
        <div className='gap-[10px] flex flex-col'>
        <p className='font-[500]'>{product?.title}</p>
        <p className='font-[500] flex gap-2'>
            <span className='text-[#DB4444]'>${product?.price}</span>
            {product?.discountPercentage > 10 &&
            <span className='text-black line-through opacity-55'>${oldPrice}</span>
            }
        </p>

        <div className='flex gap-2'>
            <div>
                <StarRating defaultRating={product?.rating} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductTemplate
