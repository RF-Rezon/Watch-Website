import { motion } from "framer-motion";
import React from "react";

const ForthSection = () => {
  return (
    <div className="h-1/2">
      <div className="flex bg-custonBlackBg p-20">
        <div className="basis-1/2 flex flex-col items-start justify-center gap-y-4 overflow-hidden">
          <p className="text-white font-medium text-2xl py-2 font-playfair">
            Roman or Numeral
          </p>
          <p className="py-1 text-customGray font-medium text-lg">
            Limited Edition of 200 pieces world-wide. Watch Big Bang,
            361.PE.2010.RW.1104 The stainless steel case and band are thick and
            prominent, creating a durable feel on the wrist. However, the dial
            is much more whimsical.
          </p>
          <p className="py-1 text-customGray font-medium text-lg mb-3">
            Accurate and Comfortable Imported Japanese quartz movement ensures
            precise time keeping. Its classic design of multi display watches
            and comfortable silicone material can provide to users excellent
            outdoor experiences.
          </p>
          <button className="uppercase w-52 py-3 px-4 bg-buttonBg font-medium border-b-[3px] border-b-customGold text-white">
            Shop Now
          </button>
          <div className="w-full h-[3px] pt-12 flex items-center justify-end">
            <motion.div
              animate={{
                scale: [1, 0, 1],
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="h-[5px] bg-customGold w-full"
            />
          </div>
        </div>
        <div className="basis-1/2">
          <div className="w-full h-full">
            <img
              src="/Bg2.jpg"
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForthSection;
