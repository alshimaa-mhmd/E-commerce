import React from 'react'

function PinkButton({width, handleClick = () => {console.log('clicked')}, value}) {
  return (
    <button className={`pink-button cursor-pointer rounded-sm bg-[#DB4444] flex items-center justify-center py-4 h-[56px] text-white font-[500] text-[16px] leading-6 `}
      onClick={handleClick}
      style={{ width: `${width}px` }}
      >
      {value}
    </button>
  )
}

export default PinkButton
