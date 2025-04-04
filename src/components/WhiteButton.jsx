import React from 'react'

function WhiteButton({width, handleClick = () => {console.log('clicked')}, value}) {
  return (
    <button className={`cursor-pointer rounded-sm bg-white border-1 border-black/50 flex items-center justify-center py-4 h-[56px] text-black font-[500] text-[16px] leading-6`}
      onClick={handleClick}
      style={{ width: `${width}px` }}
      >
      {value}
    </button>
  )
}

export default WhiteButton
