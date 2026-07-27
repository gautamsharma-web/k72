import React from "react";

const ProjetsCard = (props) => {
  return (
    <>
      <div className=" lg:w-1/2 h-full relative group overflow-hidden rounded-none transition-all transi hover:rounded-[30px] bg-red-950">
        <img src="props.img1" alt="" />
        <div className="absolute opacity-0 transition-all ease-in-out group-hover:opacity-100 top-0 left-0 w-full h-full flex bg-black/30 items-center  justify-center">
          <h2 className="uppercase text-[2.5vw] font-[Lausane] text-white border-2 border-white pt-1 px-3 rounded-[50px] ">
            voir le projet
          </h2>
        </div>
      </div>
      <div className=" lg:w-1/2 h-full relative group overflow-hidden rounded-none transition-all transi hover:rounded-[30px] bg-red-950">
        <img src={props.img2} alt="" />
        <div className="absolute opacity-0 transition-all ease-in-out group-hover:opacity-100 top-0 left-0 w-full h-full flex bg-black/30 items-center  justify-center">
          <h2 className="uppercase text-[2.5vw] font-[Lausane] text-white border-2 border-white pt-1 px-3 rounded-[50px] ">
            voir le projet
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjetsCard;
