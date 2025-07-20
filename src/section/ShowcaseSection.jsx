import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper cursor-pointer group" onClick={() => window.open('https://job-portal-client-ecru-eta.vercel.app', '_blank')}>
            <div className="image-wrapper">
              <img className="" src="/images/Job-portal-2.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Job Portal
              </h2>
              <p className="text-white-50 md:text-xl">
                A comprehensive Job Portal web application that connects job seekers with recruiters, featuring dual-role functionality. The platform offers a modern, responsive design and complete job application management system.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project cursor-pointer group" ref={libraryRef} onClick={() => window.open('https://assembly-hangman.vercel.app', '_blank')}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/Assembly-Game-Photoroom.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Assembly Hangman</h2>
            </div>

            <div className="project cursor-pointer group" ref={ycDirectoryRef} onClick={() => window.open('https://tenzies-lyart-tau.vercel.app', '_blank')}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/Tenzies-Photoroom.png" alt="YC Directory App" />
              </div>
              <h2>Tenzies</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;