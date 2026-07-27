import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];
  let imageDivBg = imageArray[1];
  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 28%",
        end: "top -183%",
        pin: true,
        onUpdate: (e) => {
          let imageArrayIndex = Math.floor(e.progress * imageArray.length);
          if (imageArrayIndex >= imageArray.length) {
            imageArrayIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageArrayIndex];
        },
      },
    });
  });
  return (
    <div>
      <div
        ref={imageDivRef}
        className="absolute rounded-3xl z-[-1] top-[4vw] lg:top-[10vw] left-[30vw] h-[28vw] lg:h-[20vw] w-[20vw] lg:w-[15vw] overflow-hidden"
      >
        <img
          ref={imageRef}
          className="object-cover w-100"
          src="https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg"
          alt=""
        />
      </div>
      <div className="relative">
        <div className="flex flex-col items-center mt-[42vh] lg:mt-[56vh] bg-transparent ">
          <h1 className="font-[Lausane] text-[18vw] lg:text-[20vw] leading-[17vw] uppercase ">
            Soixan7e
          </h1>
          <h1 className="font-[Lausane] text-[18vw] lg:text-[20vw] leading-[17vw] uppercase">
            Douze
          </h1>
        </div>
        <div className="flex items-end flex-col mt-[18vw] lg:mt-2">
          <p className=" font-[Lausane] text-center  lg:text-left text-[4.3vw] leading-[4.2vw] w-[99vw]  lg:w-[60vw]">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            Notre curiosité <br />
            nourrit notre créativité. On <br /> reste humbles et on dit non aux
            gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques influentes.
          </p>
        </div>
        <div className="ps-[10.5vw] pe-[8vw] ">
          <div className="flex justify-start font-[Lausane] gap-[23vw] text-[4vw] lg:text-[1.5vw] my-[10vh] lg:my-[30vh]">
            <div>Expertise</div>
            <ul>
              <li>Stratégie</li>
              <li>Publicité</li>
              <li>Branding</li>
              <li>Design </li>
              <li>Contenu</li>
            </ul>
          </div>
          <div className="font-[Lausane] w-full  flex justify-center">
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-[4vw] text-[4vw] lg:text-[1.5vw] text-zinc-900 leading-[1.3] tracking-tighter items-start">
              <div className="w-full">
                <p>
                  Nos projets_ naissent dans l’humilité, grandissent dans la
                  curiosité et vivent grâce à la créativité sous toutes ses
                  formes.
                </p>
              </div>
              <div className="w-full">
                <p>
                  Notre création_ bouillonne dans un environnement où le talent
                  a le goût d’exploser. Où on se sent libre d’être la meilleure
                  version de soi-même.
                </p>
              </div>
              <div className="w-full">
                <p>
                  Notre culture_ c’est l’ouverture aux autres. Point. Tout
                  l’équipage participe à bâtir une agence dont on est fiers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agence;
