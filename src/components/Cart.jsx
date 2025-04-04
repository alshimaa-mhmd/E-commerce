import React, { useContext, useState } from 'react'
import WhiteButton from './WhiteButton'
import PinkButton from './PinkButton'
import ProductsContext from './ProductsContext';
import CartItem from './CartItem';
import { Link, NavLink } from 'react-router';

function Cart() {
  const { cart, updateCart } = useContext(ProductsContext);
  const [itemTotals, setItemTotals] = useState({});
  
  const updateItemTotal = (productId, total) => {
    setItemTotals(prev => ({
      ...prev,
      [productId]: total
    }));
  };
  
  const cartSubtotal = Object.values(itemTotals).reduce((sum, total) => sum + total, 0);

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Breadcrumb */}
      <div className='w-full px-4 md:px-8 lg:px-12 py-6 md:py-12'>
        <p className='text-sm md:text-[14px] leading-5 text-black flex gap-3'>
          <span className='opacity-55'>Home</span>
          <span className='opacity-55'>/</span>
          <span>Cart</span>
        </p>
      </div>

      <div className='px-4 md:px-8 lg:px-20 pb-12 md:pb-20'>
        {/* Cart Table */}
        <div className="hidden md:grid grid-cols-4 w-full gap-4 md:gap-6 lg:gap-10 mb-6">
          <div className="font-bold">Product</div>
          <div className="font-bold">Price</div>
          <div className="font-bold">Quantity</div>
          <div className="font-bold">Subtotal</div>
        </div>

        {/* Mobile header */}
        <h2 className="md:hidden text-xl font-bold mb-4">Your Cart ({cart.length})</h2>

        {/* Cart Items */}
        <div className="space-y-6 md:space-y-0">
          {cart.map((product) => (
            <CartItem product={product} key={product.id} updateItemTotal={updateItemTotal}/>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 my-8 md:my-12">
          <NavLink 
            className="w-full md:w-auto cursor-pointer rounded-sm bg-white border border-black/50 flex items-center justify-center py-3 md:py-4 h-[50px] md:h-[56px] text-black font-medium text-base leading-6 px-6"
            to='/'
          >
            Return To Shop
          </NavLink>
          <WhiteButton 
            width={195}
            value={'Update Cart'} 
            handleClick={updateCart}
          />
        </div>

        {/* Coupon and Total */}
        <div className='flex flex-col lg:flex-row justify-between items-start gap-8 my-8'>
          <div className='w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4'>
            <input 
              type='text' 
              placeholder='Coupon Code' 
              className='w-full sm:w-[300px] h-[50px] md:h-[56px] rounded-sm border border-black/50 p-3 md:p-4' 
            />
            <PinkButton width={211} value={'Apply Coupon'}/>
          </div>

          {/* Cart Total */}
          <div className='w-full lg:w-[470px] flex flex-col items-start rounded-sm border border-black/70 p-4 md:p-6 h-auto md:h-[340px] justify-center gap-4 md:gap-6'>
            <h3 className='font-medium text-lg md:text-xl leading-7'>Cart Total</h3>
            <div className='flex items-center justify-between w-full'>
              <p>Subtotal</p>
              <p>${cartSubtotal.toFixed(2)}</p>
            </div>
            <hr className='opacity-40 border border-black w-full'/>
            <div className='flex items-center justify-between w-full'>
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr className='opacity-40 border border-black w-full'/>
            <div className='flex items-center justify-between w-full'>
              <p>Total</p>
              <p>${cartSubtotal.toFixed(2)}</p>
            </div>
            <div className='flex items-center justify-center w-full mt-4'>
              <Link 
                className="cursor-pointer w-full md:w-[260px] rounded-sm bg-[#DB4444] flex items-center justify-center py-3 md:py-4 h-[50px] md:h-[56px] text-white font-medium text-base md:text-[16px] leading-6" 
                to="/checkout"
              > 
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart