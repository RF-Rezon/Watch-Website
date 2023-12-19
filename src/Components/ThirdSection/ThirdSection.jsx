import React from 'react'

const ThirdSection = () => {
  return (
    <div className='bg-transparent w-full h-80 flex items-center justify-center py-60'>
        <div className='flex flex-col items-center gap-y-3 mb-20'>
        <div>
        <p className="text-5xl border-b-customGold border-b-4 text-white inline-block mt-10 mb-5 font-playfair">
        Most wanted of the year
        </p>
      </div>
      <button className='uppercase w-52 py-3 px-4 bg-buttonBg font-medium border-b-[3px] border-b-customGold text-white'>Shop Now</button>
        </div>
    </div>
  )
}

export default ThirdSection