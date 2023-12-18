import React from 'react'

const MiniCards = () => {
  return (
    <div className='py-16 px-10'>
        <div className='grid grid-cols-3 place-items-center gap-10'>
            <div className='w-full h-60 border-[5px] border-customGray relative'>
                <div className='absolute w-full h-full'><img src="/model-6.jpg" className='w-full h-full object-cover' alt="" /></div>
                <div className='absolute flex flex-col items-end justify-center w-full h-full p-14 gap-y-3'>
                    <p className='italic text-customGold font-medium text-2xl'>Flash Sale</p>
                    <p className='text-white text-4xl'>Women's Watch</p>
                    <p className='text-customGray font-medium text-2xl'>25% Discount</p>
                </div>
            </div>
            <div className='w-full h-60 border-[5px] border-customGray relative'>
                <div className='absolute w-full h-full'><img src="/model-8.png" className='w-full h-full object-cover' alt="" /></div>
                <div className='absolute flex flex-col items-center justify-center w-full h-full p-14 gap-y-3'>
                    <p className='italic text-customGold font-medium text-2xl'>Flash Sale</p>
                    <p className='text-white text-4xl'>Couple's Watch</p>
                    <p className='text-customGray font-medium text-2xl'>40% Discount</p>
                </div>
            </div>
            <div className='w-full h-60 border-[5px] border-customGray relative'>
                <div className='absolute w-full h-full'><img src="/model-7.png" className='w-full h-full object-cover' alt="" /></div>
                <div className='absolute flex flex-col items-end justify-center w-full h-full p-14 gap-y-3'>
                    <p className='italic text-customGold font-medium text-2xl'>Flash Sale</p>
                    <p className='text-white text-4xl'>Men's Watch</p>
                    <p className='text-customGray font-medium text-2xl'>30% Discount</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default MiniCards