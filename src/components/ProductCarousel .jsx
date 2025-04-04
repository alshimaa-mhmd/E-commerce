import React, { useRef } from 'react';

const ProductCarousel = () => {
  const carouselRef = useRef(null);
  
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Adjust this value based on your needs
      const newScrollPosition = direction === 'left' 
        ? carouselRef.current.scrollLeft - scrollAmount 
        : carouselRef.current.scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full">
        {/* Navigation buttons */}
        <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            aria-label="Scroll left"
        >
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style="fill:#232326" d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg>
        </button>
        
        <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            aria-label="Scroll right"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style="fill:#232326" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
        </button>
      </div>
    )
}
  export default ProductCarousel;