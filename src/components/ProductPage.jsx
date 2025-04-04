import { useContext, useState } from "react";
import { Navigate, useParams } from "react-router";
import ProductsContext from "./ProductsContext";
import PinkButton from "./PinkButton";
import ProductTemplate from "./ProductTemplate";
import StarRating from "./StarRating";
import heart from '../assets/Wishlist.png'
import delivery from '../assets/icon-delivery.png'
import returnIcon from '../assets/Icon-return.png'


function ProductPage() {
    const { products, addToWishlist } = useContext(ProductsContext);
    const [quantity, setQuantity] = useState(1);
    const add = () => {
        setQuantity(quantity => quantity += 1);
    }
    const minus = () => {
        if(quantity == 1) return;
        setQuantity(quantity => quantity -= 1);
    }
    let params = useParams();

    const isValid = products?.some(item => String(item.id) === String(params.productId));
    if (!isValid) {
      return <Navigate to="/not-found" replace />;
    }
    const product = products[params.productId - 1];

  return (
    <>
      <div className='w-full p-4 md:p-8 lg:ml-12 lg:p-12'>
        <p className='text-[14px] leading-5 text-black flex gap-[12px]'>
          <span className='opacity-55'>Home</span> 
          <span className='opacity-55'>/</span> 
          {product?.title}
        </p>
      </div>

      <div className="px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* Product Images Section */}
            <div className="flex flex-col md:flex-row items-center w-full lg:w-auto justify-center gap-4">
               
                {/* Thumbnail Images */}
                <div className="flex flex-row md:flex-col gap-2 md:gap-4 order-2 md:order-1 mt-4 md:mt-0 overflow-x-auto md:overflow-visible w-full md:w-auto">
                    <div className="min-w-[100px] w-[100px] h-[80px] md:w-[170px] md:h-[138px] rounded-sm bg-[#F5F5F5] flex items-center justify-center">
                        <img src={product?.thumbnail} alt='product' className='w-[80px] h-[60px] md:w-[134px] md:h-[94px]' />
                    </div>
                    <div className="min-w-[100px] w-[100px] h-[80px] md:w-[170px] md:h-[138px] rounded-sm bg-[#F5F5F5] flex items-center justify-center">
                        <img src={product?.thumbnail} alt='product' className='w-[80px] h-[60px] md:w-[134px] md:h-[94px]' />
                    </div>
                    <div className="min-w-[100px] w-[100px] h-[80px] md:w-[170px] md:h-[138px] rounded-sm bg-[#F5F5F5] flex items-center justify-center">
                        <img src={product?.thumbnail} alt='product' className='w-[80px] h-[60px] md:w-[134px] md:h-[94px]' />
                    </div>
                    <div className="min-w-[100px] w-[100px] h-[80px] md:w-[170px] md:h-[138px] rounded-sm bg-[#F5F5F5] flex items-center justify-center">
                        <img src={product?.thumbnail} alt='product' className='w-[80px] h-[60px] md:w-[134px] md:h-[94px]' />
                    </div>
                </div>

                {/* Main Product Image */}
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] md:w-[400px] lg:w-[500px] lg:h-[600px] rounded-sm bg-[#F5F5F5] flex items-center justify-center order-1 md:order-2">
                    <img src={product?.thumbnail} alt='product' className='w-[80%] h-auto max-h-[80%] md:w-[440px] md:h-[315px] object-contain' />
                </div>
                
            </div>

            {/* Product Content */}
            <div className="flex flex-col w-full lg:w-[400px] leading-6 gap-4 md:gap-6 mt-6 lg:mt-0">
                <p className="font-semibold text-xl md:text-2xl">{product?.title}</p>
                <div className="flex gap-2 flex-wrap items-center">
                    <StarRating defaultRating={product?.rating} /> 
                    <span className="text-black/50">(150 Review)</span> | 
                    <span className="text-[#00FF66]">In Stock</span>
                </div>
                <p className="text-xl md:text-2xl">${product?.price}</p>
                <p className="text-sm md:text-base">
                    {product?.description}     
                </p>
                <hr />
                
                {/* Colors Section */}
                <div className="flex items-center gap-4 md:gap-6">
                    <p className="text-lg md:text-xl">Colours: </p>
                    <div className="flex gap-3">
                        <input type="radio" name="color" className="bg-[#A0BCE0] w-5 h-5"/>
                        <input type="radio" name="color" className="bg-[#E07575] w-5 h-5"/>
                    </div>
                </div>
                
                {/* Size Section */}
                <div className="flex items-center flex-wrap gap-4 md:gap-6">
                    <p className="text-lg md:text-xl">Size: </p>
                    <div className="flex gap-2 md:gap-4">
                        <div className="border rounded-sm w-7 h-7 md:w-8 md:h-8 border-black/50 font-[500] flex items-center justify-center text-black hover:border-white hover:text-white hover:bg-[#DB4444]">
                            XS
                        </div>
                        <div className="border rounded-sm w-7 h-7 md:w-8 md:h-8 border-black/50 font-[500] flex items-center justify-center text-black hover:border-white hover:text-white hover:bg-[#DB4444]">
                            S
                        </div>
                        <div className="border rounded-sm w-7 h-7 md:w-8 md:h-8 border-black/50 font-[500] flex items-center justify-center text-black hover:border-white hover:text-white hover:bg-[#DB4444]">
                            M
                        </div>
                        <div className="border rounded-sm w-7 h-7 md:w-8 md:h-8 border-black/50 font-[500] flex items-center justify-center text-black hover:border-white hover:text-white hover:bg-[#DB4444]">
                            L
                        </div>
                        <div className="border rounded-sm w-7 h-7 md:w-8 md:h-8 border-black/50 font-[500] flex items-center justify-center text-black hover:border-white hover:text-white hover:bg-[#DB4444]">
                            XL
                        </div>
                    </div>
                </div>

                {/* Quantity and Buy Section */}
                <div className="flex flex-wrap gap-4 items-center mt-2">
                    <div className="flex">
                        <button className="cursor-pointer  border rounded-l-sm w-8 h-10 md:w-10 md:h-11 border-black/50 font-[500] flex items-center justify-center text-black hover:text-white hover:bg-[#DB4444]" onClick={minus}> - </button>
                        <div className="border w-16 md:w-20 h-10 md:h-11 border-black/50 font-[500] flex items-center justify-center text-black"> 
                        {quantity} 
                        </div>
                        <button className="cursor-pointer border rounded-r-sm w-8 h-10 md:w-10 md:h-11 border-black/50 font-[500] flex items-center justify-center text-black hover:text-white hover:bg-[#DB4444]" onClick={add}> + </button>
                    </div>

                    <PinkButton value={"Buy Now"} width={165} />

                    <button className='rounded-md border w-[34px] h-[34px] flex items-center justify-center' onClick={() =>
                    addToWishlist(product?.id)
                    }>
                        <img src={heart} alt="Add to wishlist" />
                    </button>
                </div>

                {/* Delivery Information */}
                <div className="border border-black/50 rounded-md flex flex-col mt-4">
                    <div className="flex items-center gap-4 p-4 md:p-6">
                        <img src={delivery} alt="Delivery icon" className="w-8 h-8" />
                        <div>
                            <p className="font-[500] text-[14px] md:text-[16px]">Free Delivery</p>
                            <p className="underline font-[500] text-[10px] md:text-[12px]">Enter your postal code for Delivery Availability</p>
                        </div>
                    </div>
                    <hr className="border-[0.5px] border-black/50"/>
                    <div className="flex items-center gap-4 p-4 md:p-6">
                        <img src={returnIcon} alt="Return icon" className="w-8 h-8" />
                        <div>
                            <p className="font-[500] text-[14px] md:text-[16px]">Return Delivery</p>
                            <p className="underline font-[500] text-[10px] md:text-[12px]">Free 30 Days Delivery Returns. Details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Related Items Section */}
      <div className='my-8 md:my-12'>
        <div className='flex items-center justify-between w-full px-4 py-6 sm:px-6 md:px-12 lg:px-20'>
            <div className='flex gap-[16px] items-center justify-start'>
                <div className='bg-[#DB4444] text-[#DB4444] w-[20px] h-[40px] rounded-[4px]'>
                    .
                </div>
                <p className='text-[#DB4444] font-semibold text-[16px] leading-[20px]'>
                    Related Items
                </p>
            </div>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-2'>
            {products.filter(item => (item.category === product.category) && item.id !== product.id).map((product) => {
                return <ProductTemplate product={product} key={product.id} seen={false} />
            })}
        </div>
      </div>
    </>
  )
}

export default ProductPage