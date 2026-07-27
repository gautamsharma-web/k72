import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NavbarContext, { NavContext } from "../../context/navbarContext";
import { Link } from "react-router-dom";
function FullScreenNav() {
  const navLinkRef = useRef(null);

  const [NavOpen, SetNavOpen] = useContext(NavContext);
  useGSAP(() => {
    function openAnimaiton() {
      const tl = gsap.timeline();
      tl.set(".stairsWrap", {
        display: "block",
      });
      tl.to(".stairs2", {
        delay: 0.2,
        height: "100%",
        stagger: {
          amount: -0.2,
        },
      });
      tl.fromTo(
        ".link",
        {
          opacity: 0,
          rotateX: 90,
        },
        {
          opacity: 1,
          rotateX: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.2",
      );
    }
    function closeAnimation() {
      const tl = gsap.timeline();
      tl.to(
        ".link",
        {
          opacity: 0,
          rotateX: 90,
          stagger: 0.2,
          duration: 0.1,
        },
        "-=0.2",
      );
      tl.to(".stairs2", {
        height: 0,
        stagger: {
          amount: -0.2,
        },
      });
      tl.set(".stairsWrap", {
        display: "none",
      });
    }
    if (NavOpen) {
      openAnimaiton();
    } else {
      closeAnimation();
    }
  }, [NavOpen]);
  return (
    <div
      className={`fixed stairsWrap inset-0  z-[999] w-full h-screen text-white `}
    >
      <div className="  stairsParent h-screen w-full fixed top-0 left-0 ">
        <div className=" flex  h-full w-full ">
          <div className="stairs2 bg-black w-1/5 h-full"></div>
          <div className="stairs2 bg-black w-1/5 h-full"></div>
          <div className="stairs2 bg-black w-1/5 h-full"></div>
          <div className="stairs2 bg-black w-1/5 h-full"></div>
          <div className="stairs2 bg-black w-1/5 h-full"></div>
        </div>
      </div>
      <div ref={navLinkRef} className="nav-ref">
        <div className="flex justify-between relative z-[1000] items-top p-3 mb-[3vw]">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="50"
              viewBox="0 0 103 44"
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            className="close-btn h-25 w-25 relative cursor-pointer"
            onClick={() => {
              SetNavOpen(false);
            }}
          >
            <div className=" absolute w-1 h-34 origin-top  -rotate-45 bg-white "></div>
            <div className=" absolute w-1 h-34 origin-top right-0 rotate-45 bg-white "></div>
          </div>
        </div>
        <div className="link origin-top overflow-hidden border-[#ffffff79] border-t-1 py-6 lg:py-10 relative">
          <h1 className="text-center text-[8vw] font-[Lausane]  leading-1 pt-5 font-[500] uppercase">
            Projets
          </h1>
          <div className="flex bg-link items-center w-max whitespace-nowrap h-full  absolute top-0 left-0 bg-[#D3FD50]">
            <div className="flex gap-5 items-center pr-5">
              <h1 className="whitespace-nowrap text-[7.5vw] font-[Lausane] text-black leading-1 pt-4 font-[500] uppercase">
                Pour Tout Voir
              </h1>
              <img
                className="w-50 h-20 object-cover rounded-full shrink-0"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
              <h1 className="whitespace-nowrap text-[7.5vw] text-black font-[Lausane] leading-1 pt-4 font-[500] uppercase">
                Pour Tout Voir
              </h1>
              <img
                className="w-50 h-20 object-cover rounded-full shrink-0"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
            </div>
            <div className="flex gap-5 items-center pr-5">
              <h1 className="whitespace-nowrap text-[8vw] font-[Lausane] text-black leading-1 pt-5 font-[500] uppercase">
                Pour Tout Voir
              </h1>
              <img
                className="w-50 h-20 object-cover rounded-full shrink-0"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
              <h1 className="whitespace-nowrap text-[8vw] text-black font-[Lausane] leading-1 pt-5 font-[500] uppercase">
                Pour Tout Voir
              </h1>
              <img
                className="w-50 h-20 object-cover rounded-full shrink-0"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="link overflow-hidden origin-top border-[#ffffff79] border-t-1 py-6 lg:py-10 relative">
          <h1 className="text-center text-[8vw] font-[Lausane]   leading-1 pt-5 font-[500] uppercase">
            Agence
          </h1>
          <div className="flex bg-link items-center w-max whitespace-nowrap h-full  absolute top-0 left-0 bg-[#D3FD50]">
            <div className="flex gap-5 items-center pr-5">
              <h1 className="whitespace-nowrap text-[7.5vw] font-[Lausane] text-black leading-1 pt-4 font-[500] uppercase">
                Pour Tout Voir
              </h1>
              <img
                className="w-50 h-20 object-cover rounded-full shrink-0"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
              <h1 className="whitespace-nowrap text-[7.5vw] text-black font-[Lausane] leading-1 pt-4 font-[500] uppercase">
                Pour Tout Voir
              </h1>
              <img
                className="w-50 h-20 object-cover rounded-full shrink-0"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
            </div>
            <div className="flex gap-5 items-center pr-5">
              <h1 className="whitespace-nowrap text-[8vw] font-[Lausane] text-black leading-1 pt-5 font-[500] uppercase">
                Pour Tout Voir
              </h1>
              <img
                className="w-50 h-20 object-cover rounded-full shrink-0"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
              <h1 className="whitespace-nowrap text-[8vw] text-black font-[Lausane] leading-1 pt-5 font-[500] uppercase">
                Pour Tout Voir
              </h1>
              <img
                className="w-50 h-20 object-cover rounded-full shrink-0"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="link overflow-hidden origin-top border-[#ffffff79] border-t-1 py-6 lg:py-10 relative">
          <h1 className="text-center text-[8vw] font-[Lausane]   leading-1 pt-5 font-[500] uppercase">
            Contact
          </h1>
          <div className="flex bg-link items-center w-max whitespace-nowrap h-full  absolute top-0 left-0 bg-[#D3FD50]">
            <div className="flex gap-5 items-center pr-5">
              <h1 className="whitespace-nowrap text-[7.5vw] font-[Lausane] text-black leading-1 pt-4 font-[500] uppercase">
                Pour Tout Voir
              </h1>
              <img
                className="w-50 h-20 object-cover rounded-full shrink-0"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
              <h1 className="whitespace-nowrap text-[7.5vw] text-black font-[Lausane] leading-1 pt-4 font-[500] uppercase">
                Pour Tout Voir
              </h1>
              <img
                className="w-50 h-20 object-cover rounded-full shrink-0"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
            </div>
            <div className="flex gap-5 items-center pr-5">
              <h1 className="whitespace-nowrap text-[8vw] font-[Lausane] text-black leading-1 pt-5 font-[500] uppercase">
                Pour Tout Voir
              </h1>
              <img
                className="w-50 h-20 object-cover rounded-full shrink-0"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
              <h1 className="whitespace-nowrap text-[8vw] text-black font-[Lausane] leading-1 pt-5 font-[500] uppercase">
                Pour Tout Voir
              </h1>
              <img
                className="w-50 h-20 object-cover rounded-full shrink-0"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="link overflow-hidden origin-top border-[#ffffff79] border-y-1 py-6 lg:py-10 relative">
          <h1 className="text-center text-[8vw] font-[Lausane]   leading-1 pt-5 font-[500] uppercase">
            Blogue
          </h1>
          <div className="flex bg-link items-center w-max whitespace-nowrap h-full  absolute top-0 left-0 bg-[#D3FD50]">
            <div className="flex gap-5 items-center pr-5">
              <h1 className="whitespace-nowrap text-[7.5vw] font-[Lausane] text-black leading-1 pt-4 font-[500] uppercase">
                Pour Tout Voir
              </h1>
              <img
                className="w-50 h-20 object-cover rounded-full shrink-0"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
              <h1 className="whitespace-nowrap text-[7.5vw] text-black font-[Lausane] leading-1 pt-4 font-[500] uppercase">
                Pour Tout Voir
              </h1>
              <img
                className="w-50 h-20 object-cover rounded-full shrink-0"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
            </div>
            <div className="flex gap-5 items-center pr-5">
              <h1 className="whitespace-nowrap text-[8vw] font-[Lausane] text-black leading-1 pt-5 font-[500] uppercase">
                Pour Tout Voir
              </h1>
              <img
                className="w-50 h-20 object-cover rounded-full shrink-0"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
              <h1 className="whitespace-nowrap text-[8vw] text-black font-[Lausane] leading-1 pt-5 font-[500] uppercase">
                Pour Tout Voir
              </h1>
              <img
                className="w-50 h-20 object-cover rounded-full shrink-0"
                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenNav;
