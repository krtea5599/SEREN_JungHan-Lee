import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-[#F9F9F9] flex flex-col items-center pt-24 pb-20 px-6 overflow-hidden relative">
      {/* Header Typography */}
      <div className="w-full max-w-7xl flex flex-col items-center text-center">
        <h1 className="flex flex-col items-center leading-[0.85] tracking-tighter uppercase font-black animate-fadeIn">
          <span className="text-6xl md:text-[140px] text-black">SEREN</span>
          <span className="text-6xl md:text-[140px] text-outline">COMPANY</span>
        </h1>
        
      {/* Introduction Line */}
      <div className="mt-8 mb-12">
       <p className="text-lg md:text-2xl font-normal tracking-tight text-black/80 text-center leading-relaxed">
        <span className="font-black text-[#1040DD]">안녕하세요.</span><br />
        <span className="font-black text-black/90">AI</span>와 <span className="font-black text-black/90">구조 설계</span>를 기반으로 
        <span className="font-black text-black/90">브랜드</span>를 구축하는<br />
        1인 창작자 <span className="font-black text-[#1040DD]">이정한</span>입니다.<br />
        <br />
        저는 <span className="font-black text-black/90">아이디어</span>를 단순한 기획에 머무르지 않고,<br />
        <span className="font-black text-black/90">실행</span> 가능한 <span className="font-black text-black/90">시스템</span>으로 설계해<br />
        <span className="font-black text-black/90">콘텐츠</span>
        <span className="font-normal opacity-30">,</span> <span className="font-black text-black/90">교육</span>
        <span className="font-normal opacity-30">,</span> <span className="font-black text-black/90">지식재산</span>
        <span className="font-normal opacity-30">,</span> <span className="font-black text-black/90">사업</span>으로 확장해 왔습니다.<br />
        <br />
        이 페이지는
        제가 <span className="font-black text-black/90">운영</span>하는 브랜드 <span className="font-black text-[#1040DD]">SEREN</span>과<br />
        그 안에서 진행 중인 <span className="font-black text-black/90">프로젝트</span>를 정리한 <br />
        <span className="font-black text-black/90">포트폴리오</span>입니다.
      </p>
    </div>
      </div>

      <div className="w-full max-w-4xl relative flex flex-col items-center">
        {/* Founder Portrait Only */}
        <div className="w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden flex items-center justify-center relative z-0">
          <img 
            src="https://raw.githubusercontent.com/krtea5599/SEREN-Portfolio/91d191264acf69070659dafe564266d495643ead/%EC%9D%B4%EC%A0%95%ED%95%9C%20%ED%94%84%EB%A1%9C%ED%95%84.jpg" 
            alt="주식회사 세렌" 
            className="w-full h-full object-contain object-top"
          />               
        </div>
        <div className="w-full mt-4 flex justify-end px-2"> 
           <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/80 text-right leading-relaxed">
           <span className="opacity-65 font-medium text-[9px] md:text-[10px]">
           Founder & Brand Architect</span><br />
           Junghan Lee
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.99); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;