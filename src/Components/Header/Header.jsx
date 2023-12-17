import React from 'react';

import {
  Carousel,
  initTE,
} from "tw-elements";

initTE({ Carousel });

const Header = () => {
  return (
    <div>
      <div className='max-h-screen'>
<div
  id="carouselExampleControls"
  className="relative"
  data-te-carousel-init
  data-te-ride="carousel">
 
  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
   
    <div
      className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      data-te-carousel-active>
      <img
        src="/slider__1.jpg"
        className="block w-full"
        alt="black_watch" />
        <div className='absolute text-white w-full top-[25%] left-[20%]'>
          <div><p className='text-6xl border-b-customGold border-b-4 text-white inline-block'>Alertzy</p>
          <p className='py-6 text-customGold font-medium text-lg'>Exclusive Offer -20% Off This Week</p></div>
          <div className='pt-3 pb-8 font-medium'>
            <p className='py-1 text-customGray'>Expanding the offering is the choice between a leather strap or a metal </p> <p className='py-1 text-customGray'> breacelet, branding the total new look. Black-tone stainless steel case with a </p> <p className='py-1 text-customGray'> black rubber strap. Scarah free sapphire crystal.</p>
          </div>
          <div className='pb-11 flex items-center gap-x-5'><p className='font-medium text-lg text-customGray'>Starting @</p><p className='text-6xl text-customGold'>$ 250.00</p></div>
          <button className='uppercase w-52 py-3 px-4 bg-buttonBg font-medium border-b-[3px] border-b-customGold'>Explore Services</button>
        </div>
    </div>
   
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src="/slider__3_2000x_1.jpg"
        className="block w-full"
        alt="blue_watch" />
         <div className='absolute text-white w-full top-[25%] left-[50%]'>
          <div><p className='text-6xl border-b-customGold border-b-4 text-white inline-block'>Gertious</p>
          <p className='py-6 text-customGold font-medium text-lg'>Exclusive of Sales Tax</p></div>
          <div className='pt-3 pb-8'>
            <p className='py-1 text-customGray font-medium'>The watch bracelet gives a much far colder personality. Dress watch style.</p> <p className='py-1 text-customGray font-medium'>Swiss made luxury watch. Strainless steel case with brown leather strap.</p> <p className='py-1 text-customGray font-medium'>Scratch resistant sapphire crystal.</p>
          </div>
          <div className='pb-11 flex items-center gap-x-5'><p className='font-medium text-lg text-customGray'>Starting @</p><p className='text-6xl text-customGold'>$ 350.00</p></div>
          <button className='uppercase w-52 py-3 px-4 bg-buttonBg font-medium border-b-[3px] border-b-customGold'>Explore Services</button>
        </div>
    </div>
   
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src="/slider__2.jpg"
        className="block w-full"
        alt="black_white_watch" />
         <div className='absolute text-white top-[25%] left-[18%] w-1/3 flex flex-col items-center text-center'>
          <div><p className='text-6xl border-b-customGold border-b-4 text-white inline-block'>Gorgeous</p>
          <p className='py-6 text-customGold font-medium text-lg'>Exclusive of Sales Tax</p></div>
          <div className='pt-3 pb-8 font-medium'>
            <p className='py-1 text-customGray'>The watch bracelet gives a much far colder personality. Dress watch style.</p> <p className='py-1 text-customGray'>Swiss made luxury watch. Strainless steel case with brown leather strap.</p> <p className='py-1 text-customGray'>Scratch resistant sapphire crystal.</p>
          </div>
          <div className='pb-11 flex items-center gap-x-5'><p className='font-medium text-lg text-customGray'>Starting @</p><p className='text-6xl text-customGold'>$ 100.00</p></div>
          <button className='uppercase w-52 py-3 px-4 bg-buttonBg font-medium border-b-[3px] border-b-customGold'>Explore</button>
        </div>
    </div>
  </div>

 
  <button
    className="absolute bg-customGold left-3 top-1/2 z-[1] flex w-12 h-12 items-center justify-center border-0 bg-none p-0 text-center text-white opacity-70 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleControls"
    data-te-slide="prev">
    <span className="flex w-10 h-10 items-center justify-center">
      <svg
        xmlns="/public/right-arrow.svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous
      </span>
  </button>
  
  <button
    className="absolute bg-customGold right-3 top-1/2 z-[1] flex w-12 h-12 items-center justify-center border-0 bg-none p-0 text-center text-white opacity-70 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleControls"
    data-te-slide="next">
    <span className="flex w-10 h-10 items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
  </button>
</div>
      </div>
    </div>
  )
}

export default Header