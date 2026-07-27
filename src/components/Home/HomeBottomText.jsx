import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className=" pb-3 font-[Lausane] uppercase text-[6.5vw] flex justify-center gap-[15px] ">
      <Link
        className=" border-4 leading-[4.6vw] px-7 pt-4 rounded-full"
        to="/projects"
      >
        Projets
      </Link>
      <Link
        to="/agence"
        className=" border-4 leading-[4.6vw] px-7 pt-4 rounded-full"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
