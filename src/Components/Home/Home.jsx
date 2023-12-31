import React from "react";
import FifthSection from "../FithSection/FifthSection";
import ForthSection from "../ForthSection/ForthSection";
import Header from "../Header/Header";
import Partners from "../Partners/Partners";
import SecondSection from "../SecondSection/SecondSection";
import SixthSection from "../SixthSection/SixthSection";
import ThirdSection from "../ThirdSection/ThirdSection";

const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <SecondSection />
        <ThirdSection />
        <ForthSection />
        <FifthSection />
       <SixthSection />
       <Partners />
      </div>
    </>
  );
};

export default Home;
