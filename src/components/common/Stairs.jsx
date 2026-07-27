import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
const Stairs = (props) => {
  const currentPath = useLocation().pathname;
  const stairsRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(
    function () {
      const tl = gsap.timeline();
      tl.to(stairsRef.current, {
        display: "block",
      });
      tl.from(".stairs", {
        height: 0,
        stagger: {
          amount: -0.25,
        },
      });
      tl.to(".stairs", {
        y: "100%",
        stagger: {
          amount: -0.25,
        },
      });
      tl.to(stairsRef.current, {
        display: "none",
      });
      tl.to(".stairs", {
        y: "0%",
      });
      gsap.from(pageRef.current, {
        opacity: 0,
        delay: 1.2,
        ease: "circ.out",
      });
    },
    [currentPath],
  );
  return (
    <>
      <div ref={stairsRef} className=" h-screen w-screen fixed top-0 z-20">
        <div className="flex h-full w-ful">
          <div className="stairs bg-black w-1/5 h-full"></div>
          <div className="stairs bg-black w-1/5 h-full"></div>
          <div className="stairs bg-black w-1/5 h-full"></div>
          <div className="stairs bg-black w-1/5 h-full"></div>
          <div className="stairs bg-black w-1/5 h-full"></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </>
  );
};

export default Stairs;
