import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ProjetsCard from "../components/ProjetsCard";

const Projects = () => {
  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.from(".p-card", {
      height: "10px",
      scrollTrigger: {
        trigger: ".p-wrap",
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
      stagger: {
        amount: 0.3,
      },
    });
  });
  return (
    <div className="p-3">
      <div className="pt-[38vh]">
        <h1 className="font-[Lausane] text-center lg:text-left text-[18vw] lg:text-[14.6vw] font-[500] ">
          PROJETS
        </h1>
      </div>
      <div className=" -mt-6 lg:-mt-20 p-wrap">
        {projects.map((project, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col lg:flex-row p-card w-full h-[1000px]  lg:h-[480px] gap-2 mb-2"
            >
              <ProjetsCard img1={project.image1} img2={project.image2} />;
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Projects;
