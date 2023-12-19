import React from 'react'

const Product = () => {
  return (
    <div className='h-full'>
        <div className="h-[265px] w-full flex items-center justify-center bg-white bg-opacity-70">
            <div className='text-center space-y-4'>
                <p className='text-4xl font-medium tracking-widest font-playfair'>PRODUCT</p>
                <p className='text-lg font-normal'>All/Black Numeral Dial</p>
            </div>
        </div>
        <div className='grid grid-cols-2 w-full bg-custonBlackBg'>
            <div className='flex items-center justify-center'>
            <div className="w-4/6 h-4/6">
            <img
              src="/public/watch-10.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
            </div>
            <div className='flex items-start pt-20 justify-center'>
                <div>
                    <p className='text-4xl font-medium text-white py-8 font-playfair'>Analog Numeral</p>
                    <div className='flex gap-x-5'>
                    <div className='text-customGray space-y-4'>
                        <p>Price</p>
                        <p>Vendor</p>
                        <p>Type</p>
                        <p>Color</p>
                        <p>Quality</p>
                        <p>Availablity</p>
                        <p>Sub Total</p>
                        <button className='uppercase w-full py-3 px-4 bg-buttonBg font-medium border-b-[3px] border-b-customGold text-white'>Add to Cart</button>
                    </div>
                    <div className='text-customGray space-y-4'>
                        <p className='text-customGold font-semibold'>750$</p>
                        <p>Buggegt</p>
                        <p>Disital</p>
                        <p>Red</p>
                        <p>2</p>
                        <p>1 in stock</p>
                        <p>750$</p>
                        <button className='uppercase w-full py-3 px-4 bg-buttonBg font-medium border-b-[3px] border-b-customGold text-white'>Watch wishlist</button>
                    </div>
                    </div>
                    <button className='uppercase w-full py-3 px-4 my-4 bg-buttonBg font-medium border-b-[3px] border-b-customGold text-white'>Watch wishlist</button>
                    <p className='text-customGray font-semibold text-xl underline mt-10'>Let us know abour your query!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product