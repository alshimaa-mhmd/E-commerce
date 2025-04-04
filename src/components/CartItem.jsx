import React, { useContext, useState, useEffect } from 'react'
import ProductsContext from './ProductsContext';
import deleteIcon from '../assets/icon-cancel.png'

function CartItem({ product, updateItemTotal }) {
  const { removeFromCart, cart } = useContext(ProductsContext);
  
  const [quantity, setQuantity] = useState(1);
  
  const subtotal = product?.price * quantity;
  
  // Update parent component whenever quantity changes
  useEffect(() => {
    updateItemTotal(product.id, subtotal);
  }, 
  
  [subtotal, cart]);
  
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 lg:gap-10 items-center py-4 border-b border-gray-200 last:border-b-0">
      {/* Product */}
      <div className='flex gap-4 items-center relative'>
        <button 
          onClick={() => removeFromCart(product?.id)} 
          className='md:absolute md:left-[-25px] top-[50%] md:top-[50%] transform md:translate-y-[-50%] cursor-pointer'
        >
          <img src={deleteIcon} alt="Delete" className='w-5 h-5' />
        </button>
        <img 
          src={product?.thumbnail} 
          alt={product?.title} 
          className='w-16 h-16 md:w-[54px] md:h-[54px] object-cover rounded' 
        />
        <div>
          <p className='font-medium line-clamp-2'>{product?.title}</p>
          <p className='md:hidden text-gray-600'>${product?.price}</p>
        </div>
      </div>
      
      {/* Price (hidden on mobile) */}
      <div className='hidden md:block'>${product?.price}</div>
      
      {/* Quantity */}
      <div className='flex items-center justify-between gap-4 md:gap-0'>
        <span className='md:hidden text-gray-600'>Quantity:</span>
        <div className='w-[100px] md:w-[72px] h-[40px] md:h-[44px] rounded-sm flex items-center justify-center border border-black/50'>
          <input
            type="number"
            min="1"
            max="100"
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value || 1))}
            className='w-full h-full text-center focus:outline-none'
          />
        </div>
      </div>
      
      {/* Subtotal */}
      <div className='flex justify-between md:block'>
        <span className='md:hidden text-gray-600'>Subtotal:</span>
        <span className='font-medium'>${subtotal.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default CartItem