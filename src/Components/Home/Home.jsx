import React from "react";
import FifthSection from "../ForthSection/FithSection/FifthSection";
import ForthSection from "../ForthSection/ForthSection";
import Header from "../Header/Header";
import SecondSection from "../SecondSection/SecondSection";
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
      </div>
    </>
  );
};

export default Home;
