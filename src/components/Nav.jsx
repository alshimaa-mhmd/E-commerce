import React, { useContext, useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router'
import wishlisticon from '../assets/Wishlist.png'
import carticon from '../assets/Cart1 with buy.png'
import search from '../assets/Component 2.png'
import user from '../assets/user.png'
import activeUser from '../assets/user (1).png'
import dropdown from '../assets/DropDown (1).png'
// import menu from '../assets/DropDown.png' // You'll need to add this icon
// import close from '../assets/Vector (2).png' // You'll need to add this icon
import ProductsContext from './ProductsContext'

function Nav() {
  const { wishlist, cart } = useContext(ProductsContext);
  const [active, setActive] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  const handleActive = () => {
    setActive(false);
  }

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setMobileMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className='flex flex-col p-0 m-0 w-full sticky top-0 z-50 bg-white'>
        {/* Top banner */}
        <div className='w-full h-[48px] bg-black m-0 flex items-center justify-center text-[#FAFAFA] relative px-4'>
          <p className='text-[14px] text-center md:text-left truncate'>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
            <span className='underline font-semibold leading-[24px] ml-1'> Shop Now</span>
          </p>
          <div className='hidden md:flex items-center justify-center gap-2 absolute right-4 lg:right-20 cursor-pointer'>
            <p>English</p>  
            <img src={dropdown} alt="language dropdown" />
          </div>
        </div>

        {/* Main navigation */}
        <div className='flex items-center justify-between px-4 md:justify-around leading-[24px] mb-[1rem] mt-[1.5rem] bg-white z-50'>
          <div className='flex items-center'>
            <p className='text-black font-bold text-[24px]'>Exclusive</p>
          </div>

          {/* Mobile menu button */}
          <div className='flex md:hidden'>
            <button onClick={toggleMobileMenu} className='p-2'>
              {mobileMenu ? <svg className="w-6 h-6 text-gray-800" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>
 : <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6H6m12 4H6m12 4H6m12 4H6"/>
</svg>

          }
            </button>
          </div>

          {/* Desktop navigation links */}
          <div className='hidden md:flex items-center justify-between w-[367px] text-black font-[400] text-[16px]'>
            <NavLink to='/' onClick={handleActive}>Home</NavLink>
            <NavLink to='contact' onClick={handleActive}>Contact</NavLink>
            <NavLink to='about' onClick={handleActive}>About</NavLink>
            <NavLink to='sign up' onClick={handleActive}>Sign Up</NavLink>
          </div>

          {/* Search and icons */}
          <div className='hidden md:flex items-center justify-between gap-2'>
            <div className='flex bg-[#F5F5F5] items-center justify-center gap-0 px-2 rounded-[4px]'>
              <input 
                type='text' 
                className='w-[160px] lg:w-[243px] h-[38px] py-[7px] pl-[20px] text-black bg-[#F5F5F5]' 
                placeholder='What are you looking for?' 
              />
              <img src={search} alt="search" />
            </div>
            
            <Link to='/wishlist' className='flex' onClick={handleActive}>
              <img src={wishlisticon} alt="wishlist" /> 
              <div className='bg-[#DB4444] w-[20px] h-[17px] flex items-center justify-center text-white rounded-full relative right-[14px] bottom-[3px] text-[12px]'>
                {wishlist.length}
              </div>
            </Link>
            <Link to='/cart' className='flex' onClick={handleActive}>
              <img src={carticon} alt="cart" />
              <div className='bg-[#DB4444] w-[20px] h-[17px] flex items-center justify-center text-white rounded-full relative right-[14px] bottom-[3px] text-[12px]'>
                {cart.length}
              </div>
            </Link>
            <Link to='/profile' onClick={() => setActive(true)}>
              {active ? <img src={activeUser} alt="active user" /> : <img src={user} alt="user" />}
            </Link>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenu && (
          <div className='flex md:hidden flex-col bg-white absolute top-[117px] h-[70vh] z-5 w-full shadow-lg py-4 gap-7 px-6 animate-fade-in'>
            <div className='flex flex-col space-y-4 text-black font-[400] text-[16px] gap-2.5'>
              <NavLink to='/' onClick={() => { handleActive(); toggleMobileMenu(); }}>Home</NavLink>
              <NavLink to='contact' onClick={() => { handleActive(); toggleMobileMenu(); }}>Contact</NavLink>
              <NavLink to='about' onClick={() => { handleActive(); toggleMobileMenu(); }}>About</NavLink>
              <NavLink to='sign up' onClick={() => { handleActive(); toggleMobileMenu(); }}>Sign Up</NavLink>
            </div>
            
            <div className='mt-4 flex bg-[#F5F5F5] items-center justify-between rounded-[4px]'>
              <input 
                type='text' 
                className='w-full h-[38px] py-[7px] pl-[20px] text-black bg-[#F5F5F5]' 
                placeholder='What are you looking for?' 
              />
              <button className='px-3'>
                <img src={search} alt="search" />
              </button>
            </div>
            
            <div className='flex justify-around mt-4 py-2'>
              <Link to='/wishlist' className='flex items-center' onClick={() => { handleActive(); toggleMobileMenu(); }}>
                <img src={wishlisticon} alt="wishlist" /> 
                <div className='bg-[#DB4444] w-[20px] h-[17px] flex items-center justify-center text-white rounded-full relative right-[14px] bottom-[3px] text-[12px]'>
                  {wishlist.length}
                </div>
                
              </Link>
              <Link to='/cart' className='flex items-center' onClick={() => { handleActive(); toggleMobileMenu(); }}>
                <img src={carticon} alt="cart" />
                <div className='bg-[#DB4444] w-[20px] h-[17px] flex items-center justify-center text-white rounded-full relative right-[14px] bottom-[3px] text-[12px]'>
                  {cart.length}
                </div>
               
              </Link>
              <Link to='/profile' className='flex items-center' onClick={() => { setActive(true); toggleMobileMenu(); }}>
                {active ? <img src={activeUser} alt="active user" /> : <img src={user} alt="user" />}
                
              </Link>
            </div>
          </div>
        )}

        <hr className='opacity-30'/>
      </nav>
    </>
  )
}

export default Nav