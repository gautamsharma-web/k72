import React from "react";
import Video from "../components/Home/video";
import HomeHeroText from "../components/Home/HomeHeroText";
import HomeBottomText from "../components/Home/HomeBottomText";
import FullScreenNav from "../components/Navigation/FullScreenNav";

const Home = () => {
  return (
    <div className="text-white">
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col lg:justify-between justify-end lg:gap-0 gap-[8vw]">
        <HomeHeroText />
        <div className="flex flex-col items-end me-3 lg:-mt-10 mt-0">
          <p className="lg:w-[24vw] w-[50vw] text-right font-[Lausane] lg:text-[1vw] text-[3.3vw] text-white">
            K72 est une agence qui pense
          </p>
          <p className="lg:w-[18vw] text-white w-[67vw] text-justify font-[Lausane] lg:text-[0.98vw] text-[3.3vw] me-3">
            chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5
            ans. On cherche la friction qui crée l’étincelle pour générer de
            l’émotion. Pour assurer une relation honnête, on est sans filtre, on
            dit ce qui doit être dit, on fait ce qui doit être fait.
          </p>
        </div>
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
