import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProjectItem from './components/ProjectItem.tsx';
import Testimonial from './components/Testimonial.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import { PILLARS, VISION_IMAGE } from './constants.tsx';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-black selection:text-[#F9F9F9]">
      <Navbar />
      
      <main>
        {/* Hero Section (ID: home) */}
        <Hero />
        

        {/* Work Section (ID: work) */}
        <section id="work" className="flex flex-col">
          <div className="px-6 md:px-12 pt-16 pb-12 border-y border-black flex flex-col md:flex-row justify-between items-end bg-[#F9F9F9] gap-5">
           <div className="order-2 md:order-1 w-full md:w-auto text-right md:text-left">
            <p className="text-lg md:text-2xl font-normal leading-relaxed text-black/80 tracking-tight">
             <span className="font-black text-[#1040DD]">세렌</span>의 <span className="font-black text-[#1040DD]">프로젝트</span>는<br />
              모두 하나의 <span className="font-semibold text-black/90">질문</span>에서 출발합니다.<br />
              <br />
              <span className="font-black text-[#1040DD]">“이 아이디어는 어떤 구조로 확장될 수 있는가?”</span><br />
              <br />
              <span className="font-semibold text-black/90">출판, 교육, 기술, 지역, 브랜드 프로젝트</span>는 각각<br />
              다른 형태를 띠고 있지만<br />
              모두 <span className="font-semibold text-black/90">같은 구조적 사고</span> 위에서 <span className="font-semibold text-black/90">설계</span>되었습니다.<br />
            </p>
          </div>

           <div className="order-1 md:order-2 w-full md:w-auto flex flex-col items-end"> 
             <h2 className="relative z-10 flex flex-col items-end w-full leading-none tracking-tighter uppercase font-black text-right">
                  <span className="text-6xl md:text-[90px] text-black mb-1">
                    SEREN
                  </span>
                   <span className="text-6xl md:text-[90px] text-outline mt-1">
                    Project
                  </span>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80 max-w-xs mt-6 leading-relaxed self-end">
                  _____
                  </p>
              </h2>
            </div>
           </div>
          
          {PILLARS.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </section>
        
         {/* Contact Section (ID: contact) */}
            <Contact />
            </main>
            <Testimonial />

       <Footer />
    </div>
  );
};

<style>{`
  .text-outline {
    color: transparent;
    -webkit-text-stroke: 1.5px #000000; /* 보라색 대신 확실한 검정색 테두리 */
  }

  @media (max-width: 768px) {
    .text-outline {
      -webkit-text-stroke: 1px #000000;
    }
  }
`}</style>

export default App;