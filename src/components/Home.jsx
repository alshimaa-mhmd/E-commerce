import { useContext, useRef, useState } from 'react'
import ProductsHeader from './ProductsHeader'
import ProductTemplate from './ProductTemplate'
import PinkButton from './PinkButton'
import headerImage from '../assets/Frame 560-1.png'
import dropdown from '../assets/DropDown.png'
import frame from '../assets/Frame 600.png'
import xbox from '../assets/Frame 684.png'
import woman from '../assets/Frame 685.png'
import speaker from '../assets/Frame 686.png'
import perfume from '../assets/Frame 687.png'
import icon1 from '../assets/Category-CellPhone.png';
import icon2 from '../assets/Category-Computer.png';
import icon3 from '../assets/Category-SmartWatch.png';
import icon4 from '../assets/Category-Camera.png';
import icon5 from '../assets/Category-Headphone.png';
import icon6 from '../assets/Category-Gamepad.png';
import service1 from '../assets/services.png'
import service2 from '../assets/services-1.png'
import service3 from '../assets/services-2.png'
import up from '../assets/icons_arrow-up.png'

import ProductsContext from './ProductsContext'
import Timer from './Timer'

function Home() {
  const { products } = useContext(ProductsContext)
  const initialBestCount = 4;
  const initialAllCount = 8;
  const [showBestSelling, setShowBestSelling] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  
  const bestSellingProducts = products.filter(product => (product.category == 'furniture' || product.category == 'fragrances'));
  const displayedBestSelling = showBestSelling ? bestSellingProducts : bestSellingProducts.slice(0, initialBestCount);
  const displayedAllProducts = showAll ? products : products.slice(0, initialAllCount);
  const buttonText = !showAll ? 'View All Products' : 'View less Products';
  
  const BestSellingHandler = () => {
    setShowBestSelling(!showBestSelling)
  }
  
  const showAllHandler = () => {
    setShowAll(!showAll)
  }
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const carouselRef = useRef(null);
   
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      const newScrollPosition = direction === 'left' 
        ? carouselRef.current.scrollLeft - scrollAmount 
        : carouselRef.current.scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const asideContent = [
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  const categories = [
    { title: 'Phones', img: icon1 },
    { title: 'Computers', img: icon2 },
    { title: 'SmartWatch', img: icon3 },
    { title: 'Camera', img: icon4 },
    { title: 'Headphones', img: icon5 },
    { title: 'Gaming', img: icon6 },
  ];

  const features = [
    { title: 'FREE AND FAST DELIVERY', description: 'Free delivery for all orders over $140', icon: service1 },
    { title: '24/7 CUSTOMER SERVICE', description: 'Friendly 24/7 customer support', icon: service2 },
    { title: 'MONEY BACK GUARANTEE', description: 'We reurn money within 30 days', icon: service3 }
  ];
  
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12'>
      {/* Header panel with responsive layout */}
      <div className='flex flex-col md:flex-row mt-0 items-end md:items-start'>
        {/* Mobile sidebar toggle button */}
        <button 
          className="md:hidden flex items-center p-2 mb-4 cursor-pointer"
          onClick={toggleSidebar}
        >
          <span className="mr-2">Categories</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          
        </button>

        {/* Sidebar - Hidden on mobile unless toggled */}
        <aside className={`${showSidebar ? 'flex' : 'hidden'}  border-r-1 border-black/30 py-0 pr-3 flex-col w-full md:w-[217px] items-start justify-center gap-6 mb-6 md:mb-0`}>
          <div className='flex items-center justify-between w-full'>
            <p className='text-black text-[16px] font-[400] cursor-pointer'>
              Women's fashion 
            </p>
            <img src={dropdown} alt="dropdown" />
          </div>
          <div className='flex items-center justify-between w-full'>
            <p className='text-black text-[16px] font-[400] cursor-pointer'>
              Men's fashion
            </p>
            <img src={dropdown} alt="dropdown" />
          </div>
          {
            asideContent.map((content, index) => (
              <p key={index} className='text-black text-[16px] font-[400] cursor-pointer'>{content}</p>
            ))
          }
        </aside>

        {/* Banner image with responsive sizing */}
      

        <div className='flex mt-0'>
        <aside  className='border-r-1 border-black/30 py-6 pr-3 hidden md:flex flex-col w-[217px] items-start justify-center gap-4'>
        <div className='flex items-center justify-between w-full'>
          <p className='text-black text-[16px] font-[400] cursor-pointer'>
          Women's fashion 
          </p>
          <img src={dropdown} />
        </div>
        <div className='flex items-center justify-between w-full'>
          <p className='text-black text-[16px] font-[400] cursor-pointer'>
          Men's fashion
          </p>
          <img src={dropdown} />
        </div>
          {
            asideContent.map((content, index) => (
              <p key={index} className='text-black text-[16px] font-[400] cursor-pointer'>{content}</p>
            ))
          }
        </aside>

        <div className='p-2 sm:p-4 md:p-6 lg:p-10 w-full'>
          <img src={headerImage} alt='panel' className='w-full h-auto' />
        </div>
      </div>
      </div>

      {/* Flash Sales Section */}
      <div className='flex flex-col gap-10 my-10 md:my-20'>  
        <div className='my-6 md:my-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4'>
          <div className='flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-8'>   
            <ProductsHeader title={"Today's"} subtitle={"Flash Sales"} />
            <Timer />
          </div>
          <div className="flex items-center justify-center gap-6">
            <button 
              onClick={() => scroll('left')} 
              className="hover:bg-[#F5F5F5]] p-2 rounded-full shadow-md bg-gray-100 cursor-pointer"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>     
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="hover:bg-[#F5F5F5]] p-2 rounded-full shadow-md bg-gray-100 cursor-pointer"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>           
            </button>
          </div>
        </div>

        <div ref={carouselRef}
          className="flex flex-row overflow-x-auto scrollbar-hide scroll-smooth gap-4 sm:gap-6 lg:gap-10 px-2 sm:px-6 lg:px-10 py-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.filter(product => (product.category == 'fragrances' || product.category == 'beauty')).map((product) => {
            return <ProductTemplate product={product} key={product.id} />
          })}
        </div>
      </div>

      {/* Categories Section */}
      <div className='flex flex-col gap-6 sm:gap-10 my-10 md:my-20'>     
        <ProductsHeader title={"Categories"} subtitle={"Browse By Category"} />
      
        <div className='w-full flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 flex-wrap my-4 sm:my-8'>
          {
            categories.map((category, index) => {
              return (
                <div key={index} className='w-[120px] sm:w-[150px] h-[120px] sm:h-[145px] border-1 border-black/30 flex flex-col items-center justify-center rounded-sm gap-4 hover:text-white hover:border-white hover:bg-[#DB4444]'>
                  <img src={category.img} alt={category.title} className="w-8 h-8 sm:w-10 sm:h-10" />
                  <p className='text-[14px] sm:text-[16px] leading-[24px]'>
                    {category.title}
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* Best Selling Products Section */}
      <div className='flex flex-col gap-6 sm:gap-10 my-10 md:my-20'>  
        <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-4 my-6 md:my-12'>   
          <ProductsHeader title={"This Month"} subtitle={"Best Selling Products"} />
          <PinkButton width={159} value={"View All"} handleClick={BestSellingHandler} className="w-full sm:w-auto" />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10'>
          {displayedBestSelling.map((product) => {
            return <ProductTemplate product={product} key={product.id} />
          })}
        </div>
      </div>

      {/* Banner Section */}
      <div className='w-full my-16 sm:my-24 md:my-32 flex items-center justify-center'>
        <img src={frame} alt='category' className="w-full h-auto" />
      </div>

      {/* Explore Products Section */}
      <div className='flex flex-col gap-10 md:gap-20 my-10 md:my-20'>     
        <ProductsHeader title={"Our Products"} subtitle={"Explore Our Products"} />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10'>
          {displayedAllProducts.map((product) => {
            return <ProductTemplate product={product} key={product.id} />
          })}
        </div>

        <div className='w-full flex items-center justify-center'>
          <PinkButton width={234} value={buttonText} handleClick={showAllHandler} className="w-full sm:w-auto max-w-[234px]" />
        </div>
      </div>

      {/* New Arrival Section */}
      <div className='flex flex-col gap-10 md:gap-20 my-10 md:my-20'>     
        <ProductsHeader title={"Featured"} subtitle={"New Arrival"} />

        <div className='flex flex-col lg:flex-row gap-6 items-center justify-center'>
          <div className="w-full lg:w-auto">
            <img src={xbox} alt='xbox' className="w-full h-auto" />
          </div>

          <div className='flex flex-col gap-6 w-full lg:w-auto'>
            <div>
              <img src={woman} alt="woman" className="w-full h-auto" />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <img src={speaker} alt="speaker" className="w-full h-auto" />
              <img src={perfume} alt="perfume" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10 md:my-20'>
        {features.map((feature, index) => {
          return (
            <div key={index} className='w-full h-[200px] flex flex-col items-center justify-center gap-4 sm:gap-6'>
              <img src={feature.icon} alt={feature.title} />
              <p className='text-center text-[18px] sm:text-[20px] leading-[28px] font-[600]'>
                {feature.title}
              </p>
              <p className='text-center text-[12px] sm:text-[14px] leading-[21px]'>
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Scroll to Top Button */}
      <div className='w-full flex items-center justify-end my-6 md:my-12'>
        <div className='w-[46px] h-[46px] cursor-pointer rounded-full bg-[#F5F5F5] flex items-center justify-center' onClick={scrollToTop}>
          <img src={up} alt="scroll to top" />
        </div>
      </div>
    </div>
  )
}

export default Home
