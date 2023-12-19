import React from 'react';

import { Tab, initTE } from "tw-elements";

initTE({ Tab });

const SixthSection = () => {
  return (
    <div>
        <div className='bg-custonBlackBg w-full h-screen'>
        <div className="flex flex-col gap-y-5 items-center w-full h-screen pt-20 pb-5">
      <div>
        <p className="text-5xl border-b-customGold border-b-4 text-white inline-block mt-10 mb-5">
        Product Categories
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-y-2">
        <ul
          class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
          role="tablist"
          data-te-nav-ref
        >
          <li role="presentation">
            <a
              href="#tabs-home4"
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-base font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-customGold data-[te-nav-active]:text-customGold dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:text-customGold"
              data-te-toggle="pill"
              data-te-target="#tabs-home4"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-home4"
              aria-selected="true"
            >
              CLASSICO
            </a>
          </li>
          <li role="presentation">
            <a
              href="#tabs-profile4"
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-base font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-customGold data-[te-nav-active]:text-customGold dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:text-customGold"
              data-te-toggle="pill"
              data-te-target="#tabs-profile4"
              role="tab"
              aria-controls="tabs-profile4"
              aria-selected="false"
            >
              EXCLUSIVE
            </a>
          </li>
          <li role="presentation">
            <a
              href="#tabs-messages4"
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-base font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-customGold data-[te-nav-active]:text-customGold dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:text-customGold"
              data-te-toggle="pill"
              data-te-target="#tabs-messages4"
              role="tab"
              aria-controls="tabs-messages4"
              aria-selected="false"
            >
              SPORTS
            </a>
          </li>
          <li role="presentation">
            <a
              href="#tabs-dialer4"
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-base font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-customGold data-[te-nav-active]:text-customGold dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:text-customGold"
              data-te-toggle="pill"
              data-te-target="#tabs-dialer4"
              role="tab"
              aria-controls="tabs-dialer4"
              aria-selected="false"
            >
              DIALER
            </a>
          </li>
        </ul>

        <div class="mb-6 w-5/6 h-full">
          <div
            class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block h-full"
            id="tabs-home4"
            role="tabpanel"
            aria-labelledby="tabs-home-tab4"
            data-te-tab-active
          >
            <div className="grid grid-cols-5 place-items-center gap-10 h-full">
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/public/watch-5.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Analog Numeral</p>
                </div>
            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/public/watch-11.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Black Numeral Dial</p>
                   
                </div>
            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/public/Watch18.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Golden Automatic</p>
                  
                </div>
            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/public/watch-15.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Golden Classical</p>
                    
                </div>
            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/public/watch-9.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Classica Nemeral</p>
                    
                </div>
            </div>
            </div>
          </div>
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-profile4"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab4"
          >
            <div className="grid grid-cols-5 place-items-center gap-10 h-full">
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/Watch22.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Red & Black Numeral</p>
                   
                </div>
            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/Watch21.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Platinum Numeral</p>
                   
                </div>
            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/public/Watch18.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Golden Automatic</p>
                   
                </div>
            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/public/watch-15.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Golden Classical</p>
                  
                </div>
            </div>
            </div>
          </div>
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-messages4"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab4"
          >
            <div className="grid grid-cols-5 place-items-center gap-10 h-full">
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/Watch21.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Platinum Numeral</p>
                    
                </div>
            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/public/Watch20.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Platinum Classic</p>
                   
                </div>
            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/public/Watch18.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Golden Automatic</p>
                  
                </div>
            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/public/watch-4.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Analogue Autometic</p>
                </div>
            </div>
            </div>
          </div>
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-dialer4"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab4"
          >
            <div className="grid grid-cols-5 place-items-center gap-10 h-full">
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/Watch21.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Platinum Numeral</p>
                    
                </div>
            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/public/Watch20.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Platinum Classic</p>
                   
                </div>
            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/public/Watch18.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Golden Automatic</p>
                  
                </div>
            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className="w-full h-full bg-custonBlackBg flex flex-col items-center">
                <div className="basis-[55%] bg-gray-500 hover:bg-customGray flex items-center justify-center">
                    <img className="w-full h-full object-cover" src="/public/watch-4.png" alt="" />
                </div>
                <div className="basis-[45%] flex flex-col items-center">
                    <p className="text-white font-medium text-2xl py-6">Analogue Autometic</p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default SixthSection