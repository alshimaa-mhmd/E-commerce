import React, { useContext, useState } from 'react'
import WhiteButton from './WhiteButton'
import ProductTemplate from './ProductTemplate'
import ProductsContext from './ProductsContext'

function Wishlist() {
  const { wishlist, products, MoveAllToBag } = useContext(ProductsContext);
  const [seeAll, setSeeAll] = useState(false);
  const initialCount = 4;
  const justForYou = products.filter(product => (product.category == 'fragrances' || product.category == 'beauty'));

  const displayedAllProducts = seeAll ? justForYou : justForYou.slice(0, initialCount);

  const seeAllHandler = () => {
    setSeeAll(!seeAll)
  }

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Wishlist Section */}
      <div className="px-4 md:px-8 lg:px-20 py-8 md:py-12 lg:py-20">
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-8'>
          <p className="text-lg md:text-xl font-medium">Wishlist ({wishlist?.length})</p>
          <WhiteButton 
            width={223}
            value={'Move All To Bag'} 
            handleClick={MoveAllToBag} 
          />
        </div>

        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10'>
          {wishlist.map((product) => (
            <ProductTemplate product={product} key={product.id} seen={false} />
          ))}
        </div>
      </div>

      {/* Just For You Section */}
      <div className="px-4 md:px-8 lg:px-20 py-8 md:py-12">
        <div className='flex flex-col sm:flex-row items-center justify-between gap-6 mb-8'>
          <div className='flex gap-4 items-center'>
            <div className='bg-[#DB4444] w-[20px] h-[40px] md:h-8 rounded-sm' />
            <p className='text-black font-semibold text-lg md:text-xl'>
              Just For You
            </p>
          </div>
          <WhiteButton 
            width={150} 
            value={seeAll ? 'See Less' : 'See All'} 
            handleClick={seeAllHandler} 
          />
        </div>

        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10'>
          {displayedAllProducts.map((product) => (
            <ProductTemplate product={product} key={product.id} seen={false} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Wishlist