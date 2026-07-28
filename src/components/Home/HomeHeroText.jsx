import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="text-center pt-2 mb-0">
      <div className="text-[9.5vw] font-[Lausane] leading-[8.8vw] uppercase">
        L'étincelle
      </div>
      <div className="text-[9.5vw] font-[Lausane] leading-[8.8vw] uppercase">
        <div className=" flex items-center justify-center">
          qui
          <div className="h-[6.8vw] w-[16.3vw] -mt-4 rounded-full overflow-hidden ">
            <Video />
          </div>
          génère
        </div>
      </div>
      <div className="text-[9.5vw] font-[Lausane] leading-[8.8vw] uppercase">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
